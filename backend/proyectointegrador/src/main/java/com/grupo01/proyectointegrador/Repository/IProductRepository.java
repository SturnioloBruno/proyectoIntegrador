package com.grupo01.proyectointegrador.Repository;

import com.grupo01.proyectointegrador.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface IProductRepository extends JpaRepository<Product, Long> {
    Optional<List<Product>> findByCityId(@Param("idCiudad") Long idCiudad);
    Optional<List<Product>> findByCategoryId(@Param("idCategory") Long idCategory);
    Optional<List<Product>> findByCategoryIdAndCityId(@Param("idCategory") Long idCategory, @Param("idCiudad") Long idCiudad);

    @Query(value = "SELECT * " +
            " FROM products " +
            " WHERE "+
            " prod_id NOT IN( " +
            " SELECT DISTINCT prod_id " +
            "             FROM bookings " +
            " WHERE (booking_start_date <= :dateStart" +
            "             AND booking_finish_date > :dateStart)" +
            "     OR (booking_start_date <= :dateEnd" +
            "            AND booking_finish_date > :dateEnd)" +
            "     OR (booking_start_date > :dateStart" +
            "            AND booking_finish_date < :dateEnd));",nativeQuery = true)
    Optional<List<Product>> findByDates(@Param("dateStart")LocalDate dateStart,
                                        @Param("dateEnd") LocalDate dateEnd);

    @Query(value = "SELECT * " +
            " FROM products " +
            " WHERE " +
            " city_id = :cityId " +
            " AND cat_id = :catId " +
            " AND prod_id NOT IN( " +
            " SELECT DISTINCT prod_id " +
            "             FROM bookings " +
            " WHERE (booking_start_date <= :dateStart" +
            "             AND booking_finish_date > :dateStart)" +
            "     OR (booking_start_date <= :dateEnd" +
            "            AND booking_finish_date > :dateEnd)" +
            "     OR (booking_start_date > :dateStart" +
            "            AND booking_finish_date < :dateEnd));",nativeQuery = true)
    Optional<List<Product>> findByFilterAll(@Param("cityId") Long cityId,
                                         @Param("catId") Long catId,
                                         @Param("dateStart")LocalDate dateStart,
                                         @Param("dateEnd") LocalDate dateEnd);

    @Query(value = "SELECT * " +
            " FROM products " +
            " WHERE " +
            " city_id = :cityId " +
            " AND prod_id NOT IN( " +
            " SELECT DISTINCT prod_id " +
            "             FROM bookings " +
            " WHERE (booking_start_date <= :dateStart" +
            "             AND booking_finish_date > :dateStart)" +
            "     OR (booking_start_date <= :dateEnd" +
            "            AND booking_finish_date > :dateEnd)" +
            "     OR (booking_start_date > :dateStart" +
            "            AND booking_finish_date < :dateEnd));",nativeQuery = true)
    Optional<List<Product>> findByDatesAndCity(@Param("cityId") Long cityId,
                                            @Param("dateStart")LocalDate dateStart,
                                            @Param("dateEnd") LocalDate dateEnd);

    @Query(value = "SELECT * " +
            " FROM products " +
            " WHERE " +
            " cat_id = :catId " +
            " AND prod_id NOT IN( " +
            " SELECT DISTINCT prod_id " +
            "             FROM bookings " +
            " WHERE (booking_start_date <= :dateStart" +
            "             AND booking_finish_date > :dateStart)" +
            "     OR (booking_start_date <= :dateEnd" +
            "            AND booking_finish_date > :dateEnd)" +
            "     OR (booking_start_date > :dateStart" +
            "            AND booking_finish_date < :dateEnd));",nativeQuery = true)
    Optional<List<Product>> findByDatesAndCategory( @Param("catId") Long catId,
                                            @Param("dateStart")LocalDate dateStart,
                                            @Param("dateEnd") LocalDate dateEnd);
}

