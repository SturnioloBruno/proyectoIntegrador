package com.grupo01.proyectointegrador.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo01.proyectointegrador.Model.*;
import com.grupo01.proyectointegrador.DTO.ProductDTO;
import com.grupo01.proyectointegrador.Repository.IProductRepository;
import com.grupo01.proyectointegrador.Service.Interfaces.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class ProductService implements IProductService {

    @Autowired
    IProductRepository productRepository;

    @Autowired
    ImageService imageService;

    @Autowired
    PolicyService policyService;

    @Autowired
    ProductPolicyService productPolicyService;

    @Autowired
    ProductCharacteristicService productCharacteristicService;

    @Autowired
    AwsS3Service awsS3Service;

    @Autowired
    ObjectMapper mapper;

    public Product crearProduct(Product product) throws Exception{
       return  productRepository.save(product);
    }

    public Product saveProduct(ProductDTO product) throws Exception{

        Product product1 =  mapper.convertValue(product,Product.class);
        product1.setProductsC(product.getCharacteristic());
        Product productInsertado = productRepository.save(product1);

        List<Image> listaImagenes = product.getImages();
        //falta insertar en bucket
        for (Image img:listaImagenes) {
            img.setNombre_url(awsS3Service.uploadFile(img.getNombre_url(),productInsertado.getId().toString()));
            img.setProId(productInsertado);
            imageService.guardar(img);
        }

        List<ProductCharacteristic> listCharacteristic = product.getCharacteristic();
        for (ProductCharacteristic pc: listCharacteristic) {
            pc.setProduct(productInsertado);
            productCharacteristicService.save(pc);
        }
        productInsertado.setProductsC(listCharacteristic);

        List<ProductPolicy> listPolicy = product.getPolicy();
        for (ProductPolicy pp: listPolicy) {
            Policy policyInsert = policyService.guardar(pp.getPolicy());
            pp.setProduct(productInsertado);
            productPolicyService.save(pp);
        }
        productInsertado.setProductsP(listPolicy);

        return  productRepository.save(productInsertado);
    }

    @Override
    public List<ProductDTO> getProducts(Optional<Boolean> sort) throws Exception{
        List<Product> listaProducts = productRepository.findAll();
        List<ProductDTO> productsDTO = new ArrayList<>();

        for (Product p: listaProducts){
            ProductDTO productReturn = null;
            productReturn = mapper.convertValue(p,ProductDTO.class);
            productReturn.setImages(p.getImages());
            productReturn.setCharacteristic(p.getProductsC());
            productReturn.setPolicy(p.getProductsP());
            productsDTO.add(productReturn);
        }

        if(!sort.isEmpty()){
            if(!sort.get()){
                Collections.shuffle(productsDTO);
            }
        }

        return productsDTO;
    }

    @Override
    public ProductDTO buscarPorIdDTO(Long id) throws Exception{
        Optional<Product> product = productRepository.findById(id);
        ProductDTO productEncontrado = null;
        if (product.isPresent()){
            productEncontrado = mapper.convertValue(product.get(),ProductDTO.class);
            productEncontrado.setImages(product.get().getImages());
            productEncontrado.setCharacteristic(product.get().getProductsC());
            productEncontrado.setPolicy(product.get().getProductsP());
            productEncontrado.setBookings(product.get().getBookings());
        }
        return productEncontrado;
    }

    public Product buscarPorId(Long id) throws Exception{
        Optional<Product> product = productRepository.findById(id);

        return product.orElse(null);
    }


    public void delete(Long id)throws Exception{
        // verifico que existe
        ProductDTO product = buscarPorIdDTO(id);

        if(product == null){
            throw new Exception("Producto con id: "+ id + " no existe");
        }

        productRepository.deleteById(id);
    }

    public ProductDTO update(ProductDTO productDTO) throws Exception{
        ProductDTO productBuscado = buscarPorIdDTO(productDTO.getId());

        if(productBuscado == null){
            throw new Exception("Producto con id: "+ productDTO.getId() + " no existe");
        }

        Product product=mapper.convertValue(productDTO,Product.class);
        productRepository.save(product);
        return productDTO;
    }


    public List<ProductDTO> findByCityId(Long idCiudad)throws Exception {
        List<Product> products = productRepository.findByCityId(idCiudad).get();
        List<ProductDTO> productDTOs = new ArrayList<>();
        for (Product p:products){
            ProductDTO productReturn = null;
            productReturn = mapper.convertValue(p,ProductDTO.class);
            productReturn.setImages(p.getImages());
            productReturn.setCharacteristic(p.getProductsC());
            productReturn.setPolicy(p.getProductsP());

            productDTOs.add(productReturn);
        }
        return productDTOs;
    }

    public List<ProductDTO> findByCategoryId(Long idCategory)throws Exception {
        List<Product> products = productRepository.findByCategoryId(idCategory).get();
        List<ProductDTO> productDTOs = new ArrayList<>();
        for (Product p:products){
            ProductDTO productReturn = null;
            productReturn = mapper.convertValue(p,ProductDTO.class);
            productReturn.setImages(p.getImages());
            productReturn.setCharacteristic(p.getProductsC());
            productReturn.setPolicy(p.getProductsP());
            productDTOs.add(productReturn);
        }
        return productDTOs;
    }

    public List<ProductDTO> findByFilter(Optional<Long> city,
                                         Optional<Long> category,
                                         Optional<String> dateStart,
                                         Optional<String> dateEnd,
                                         Optional<Boolean> sort)throws Exception{

        //SI ESTA SIN FILTRO RETORNO LISTA COMPLETA
        if(city.isEmpty() && category.isEmpty() && dateStart.isEmpty() && dateEnd.isEmpty()){
                return getProducts(sort);
        }

        Optional<List<Product>> listProducts = validateFilter(city,category,dateStart,dateEnd);
        List<ProductDTO> listRet = new ArrayList<>();

        //SI TRAE REGISTROS LOS MAPEO AL DTO DE RETORNO
        if(listProducts.isPresent()){

            for (Product p:listProducts.get()){
                ProductDTO productReturn = null;
                productReturn = mapper.convertValue(p,ProductDTO.class);
                productReturn.setImages(p.getImages());
                productReturn.setCharacteristic(p.getProductsC());
                productReturn.setPolicy(p.getProductsP());
                listRet.add(productReturn);
            }
        }

        //HAGO RANDOM CUANDO ES FALSE
        if(sort.isPresent()){
            if(!sort.get()){
                Collections.shuffle(listRet);
            }
        }

        return listRet;
    }

    private Optional<List<Product>> validateFilter (Optional<Long> city,
                                      Optional<Long> category,
                                      Optional<String> dateStart,
                                      Optional<String> dateEnd){

        //SI TIENE TODOS LOS FILTROS
        if(city.isPresent() && category.isPresent() && dateStart.isPresent() && dateEnd.isPresent()){
            return productRepository.findByFilterAll(city.get(),category.get(),LocalDate.parse(dateStart.get()),LocalDate.parse(dateEnd.get()));
        }

        if(dateStart.isPresent() && dateEnd.isPresent() && category.isPresent()){
            return  productRepository.findByDatesAndCategory(category.get(),LocalDate.parse(dateStart.get()),LocalDate.parse(dateEnd.get()));
        }

        if(dateStart.isPresent() && dateEnd.isPresent() && city.isPresent()){
            return productRepository.findByDatesAndCity(city.get(),LocalDate.parse(dateStart.get()),LocalDate.parse(dateEnd.get()));
        }

        if(dateStart.isPresent() && dateEnd.isPresent() ){
            return  productRepository.findByDates(LocalDate.parse(dateStart.get()),
                    LocalDate.parse(dateEnd.get()));
        }

        if(city.isPresent() && category.isPresent() ){
            return productRepository.findByCategoryIdAndCityId(category.get(),city.get());
        }

        if(city.isPresent()){
            return productRepository.findByCityId(city.get());
        }

        if(category.isPresent()  ){
            return  productRepository.findByCategoryId(category.get());
        }

        return null;
    }
}

