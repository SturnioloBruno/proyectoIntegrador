package com.grupo01.proyectointegrador.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.grupo01.proyectointegrador.DTO.BookingDTO;
import com.grupo01.proyectointegrador.Model.Booking;
import com.grupo01.proyectointegrador.Model.User;
import com.grupo01.proyectointegrador.Repository.IBookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    IBookingRepository bookingRepository;

    @Autowired
    UserService userService;

    @Autowired
    ObjectMapper mapper;

    public Booking guardar(BookingDTO bookingDTO) throws Exception {
        LocalTime bookingStartTime=LocalTime.parse(bookingDTO.getBookingStarTime());
        LocalDate bookingStartDate=LocalDate.parse(bookingDTO.getBookingStartDate());
        LocalDate bookingFinishDate=LocalDate.parse(bookingDTO.getBookingFinishDate());

        Booking opcion2=new Booking(bookingStartTime,bookingStartDate,bookingFinishDate,bookingDTO.getBookingVaccineCovid(),bookingDTO.getBookingUserInfoCovid(),bookingDTO.getProdId(),bookingDTO.getUserId(), bookingDTO.getBookingCity());
        return bookingRepository.save(opcion2);
    }

    public Booking buscarId(Long id) throws Exception {
        Optional<Booking> booking = bookingRepository.findById(id);
        return booking.orElse(null);
    }

    public void borrar (Long id) throws Exception {
        Booking booking = buscarId(id);
        if(booking != null) {
            bookingRepository.deleteById(id);
        }
        else{
            throw new Exception("Reserva con id: "+ id + " no existe");
        }
    }

    public Booking actualizar (Booking booking) throws Exception {
        Booking booking1 = buscarId(booking.getId());
        if (booking1 != null){
            return bookingRepository.save(booking);
        }
        else{
            throw new Exception("Reserva con id: "+ booking.getId() + " no existe");
        }
    }

    public List<BookingDTO> getByUserId(Long id)throws Exception{
        User user = userService.buscarId(id);

       Optional<List<Booking>> listFilter = bookingRepository.findByUserId(user);
        List<BookingDTO> listRet = new ArrayList<>();

       if(listFilter.isPresent()){
           for (Booking b : listFilter.get()){
               BookingDTO bookingDTO = null;
               bookingDTO = mapper.convertValue(b,BookingDTO.class);
               bookingDTO.setBookingStarTime(String.valueOf(b.getBookingStartTime()));
               bookingDTO.setProdId(b.getProdId());
               bookingDTO.setBookingCity(b.getCity());
               bookingDTO.setBookingUserInfoCovid(b.getBookingUserInfoCovid());
               listRet.add(bookingDTO);
           }
       }

        return listRet;
    }
}
