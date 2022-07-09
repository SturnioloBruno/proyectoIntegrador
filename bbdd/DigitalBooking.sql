CREATE DATABASE  IF NOT EXISTS `proyectointegrador` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `proyectointegrador`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: db-group1.ckiqtgesdyez.us-east-1.rds.amazonaws.com    Database: proyectointegrador
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bookings` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `prod_id` int NOT NULL,
  `user_id` int NOT NULL,
  `booking_start_time` time DEFAULT NULL,
  `booking_start_date` date DEFAULT NULL,
  `booking_finish_date` date DEFAULT NULL,
  `booking_vaccine_covid` bit(1) DEFAULT NULL,
  `booking_userinfo_covid` varchar(500) DEFAULT NULL,
  `booking_city` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`booking_id`),
  KEY `prod_id` (`prod_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`),
  CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `cat_id` int NOT NULL AUTO_INCREMENT,
  `cat_title` varchar(100) NOT NULL,
  `cat_description` varchar(500) DEFAULT NULL,
  `cat_url_img` varchar(500) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Hotel','821.458 Hoteles','https://bucketdbgrupo1.s3.amazonaws.com/images/categories/hotel.jpg'),(2,'Hostels','821.458 Hostels','https://bucketdbgrupo1.s3.amazonaws.com/images/categories/hostels.jpg'),(3,'Departamentos','821.458 Departamentos','https://bucketdbgrupo1.s3.amazonaws.com/images/categories/departamentos.jpg'),(4,'Bed and Breakfast','821.458 Bed and Breakfast','https://bucketdbgrupo1.s3.amazonaws.com/images/categories/bedandbreakfast.jpg');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `characteristics`
--

DROP TABLE IF EXISTS `characteristics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characteristics` (
  `charact_id` int NOT NULL AUTO_INCREMENT,
  `charact_title` varchar(100) NOT NULL,
  `charact_class` varchar(100) NOT NULL,
  PRIMARY KEY (`charact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characteristics`
--

LOCK TABLES `characteristics` WRITE;
/*!40000 ALTER TABLE `characteristics` DISABLE KEYS */;
/*!40000 ALTER TABLE `characteristics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `city_id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(100) NOT NULL,
  `city_country` varchar(100) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Buenos Aires','Argentina'),(2,'Rosario','Argentina'),(3,'Entre Rios','Argentina'),(4,'Cordoba','Argentina'),(5,'Mar del Plata','Argentina'),(6,'Salta','Argentina'),(7,'Santa Fe','Argentina'),(8,'San Salvador de Jujuy','Argentina'),(9,'San Luis','Argentina'),(10,'San Carlos de Bariloche','Argentina'),(11,'Comodoro Rivadavia','Argentina'),(12,'Mendoza','Argentina');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favourites`
--

DROP TABLE IF EXISTS `favourites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favourites` (
  `fav_id` int NOT NULL AUTO_INCREMENT,
  `prod_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`fav_id`),
  KEY `prod_id` (`prod_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `favourites_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`),
  CONSTRAINT `favourites_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favourites`
--

LOCK TABLES `favourites` WRITE;
/*!40000 ALTER TABLE `favourites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favourites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `img_id` int NOT NULL AUTO_INCREMENT,
  `prod_id` int NOT NULL,
  `img_url` text NOT NULL,
  PRIMARY KEY (`img_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,1,'https://bucketdbgrupo1.s3.amazonaws.com/images/1/1.jpg'),(2,1,'https://bucketdbgrupo1.s3.amazonaws.com/images/1/2.jpg'),(3,1,'https://bucketdbgrupo1.s3.amazonaws.com/images/1/3.jpg'),(4,1,'https://bucketdbgrupo1.s3.amazonaws.com/images/1/4.jpg'),(5,1,'https://bucketdbgrupo1.s3.amazonaws.com/images/1/5.jpg'),(6,2,'https://bucketdbgrupo1.s3.amazonaws.com/images/2/6.jpg'),(7,2,'https://bucketdbgrupo1.s3.amazonaws.com/images/2/7.jpg'),(8,2,'https://bucketdbgrupo1.s3.amazonaws.com/images/2/8.jpg'),(9,2,'https://bucketdbgrupo1.s3.amazonaws.com/images/2/9.jpg'),(10,2,'https://bucketdbgrupo1.s3.amazonaws.com/images/2/10.jpg'),(11,3,'https://bucketdbgrupo1.s3.amazonaws.com/images/3/11.jpg'),(12,3,'https://bucketdbgrupo1.s3.amazonaws.com/images/3/12.jpg'),(13,3,'https://bucketdbgrupo1.s3.amazonaws.com/images/3/13.jpg'),(14,3,'https://bucketdbgrupo1.s3.amazonaws.com/images/3/14.jpg'),(15,3,'https://bucketdbgrupo1.s3.amazonaws.com/images/3/15.jpg'),(16,4,'https://bucketdbgrupo1.s3.amazonaws.com/images/4/16.jpg'),(17,4,'https://bucketdbgrupo1.s3.amazonaws.com/images/4/17.jpg'),(18,4,'https://bucketdbgrupo1.s3.amazonaws.com/images/4/18.jpg'),(19,4,'https://bucketdbgrupo1.s3.amazonaws.com/images/4/19.jpg'),(20,4,'https://bucketdbgrupo1.s3.amazonaws.com/images/4/20.jpg'),(21,5,'https://bucketdbgrupo1.s3.amazonaws.com/images/5/21.jpg'),(22,5,'https://bucketdbgrupo1.s3.amazonaws.com/images/5/22.jpg'),(23,5,'https://bucketdbgrupo1.s3.amazonaws.com/images/5/23.jpg'),(24,5,'https://bucketdbgrupo1.s3.amazonaws.com/images/5/24.jpg'),(25,5,'https://bucketdbgrupo1.s3.amazonaws.com/images/5/25.jpg'),(26,6,'https://bucketdbgrupo1.s3.amazonaws.com/images/6/26.jpg'),(27,6,'https://bucketdbgrupo1.s3.amazonaws.com/images/6/27.jpg'),(28,6,'https://bucketdbgrupo1.s3.amazonaws.com/images/6/28.jpg'),(29,6,'https://bucketdbgrupo1.s3.amazonaws.com/images/6/29.jpg'),(30,6,'https://bucketdbgrupo1.s3.amazonaws.com/images/6/30.jpg'),(31,7,'https://bucketdbgrupo1.s3.amazonaws.com/images/7/31.jpg'),(32,7,'https://bucketdbgrupo1.s3.amazonaws.com/images/7/32.jpg'),(33,7,'https://bucketdbgrupo1.s3.amazonaws.com/images/7/33.jpg'),(34,7,'https://bucketdbgrupo1.s3.amazonaws.com/images/7/34.jpg'),(35,7,'https://bucketdbgrupo1.s3.amazonaws.com/images/7/35.jpg'),(36,8,'https://bucketdbgrupo1.s3.amazonaws.com/images/8/36.jpg'),(37,8,'https://bucketdbgrupo1.s3.amazonaws.com/images/8/37.jpg'),(38,8,'https://bucketdbgrupo1.s3.amazonaws.com/images/8/38.jpg'),(39,8,'https://bucketdbgrupo1.s3.amazonaws.com/images/8/39.jpg'),(40,8,'https://bucketdbgrupo1.s3.amazonaws.com/images/8/40.jpg'),(41,9,'https://bucketdbgrupo1.s3.amazonaws.com/images/9/41.jpg'),(42,9,'https://bucketdbgrupo1.s3.amazonaws.com/images/9/42.jpg'),(43,9,'https://bucketdbgrupo1.s3.amazonaws.com/images/9/43.jpg'),(44,9,'https://bucketdbgrupo1.s3.amazonaws.com/images/9/44.jpg'),(45,9,'https://bucketdbgrupo1.s3.amazonaws.com/images/9/45.jpg'),(46,10,'https://bucketdbgrupo1.s3.amazonaws.com/images/10/46.jpg'),(47,10,'https://bucketdbgrupo1.s3.amazonaws.com/images/10/47.jpg'),(48,10,'https://bucketdbgrupo1.s3.amazonaws.com/images/10/48.jpg'),(49,10,'https://bucketdbgrupo1.s3.amazonaws.com/images/10/49.jpg'),(50,10,'https://bucketdbgrupo1.s3.amazonaws.com/images/10/50.jpg'),(51,11,'https://bucketdbgrupo1.s3.amazonaws.com/images/11/51.jpg'),(52,11,'https://bucketdbgrupo1.s3.amazonaws.com/images/11/52.jpg'),(53,11,'https://bucketdbgrupo1.s3.amazonaws.com/images/11/53.jpg'),(54,11,'https://bucketdbgrupo1.s3.amazonaws.com/images/11/54.jpg'),(55,11,'https://bucketdbgrupo1.s3.amazonaws.com/images/11/55.jpg'),(56,12,'https://bucketdbgrupo1.s3.amazonaws.com/images/12/56.jpg'),(57,12,'https://bucketdbgrupo1.s3.amazonaws.com/images/12/57.jpg'),(58,12,'https://bucketdbgrupo1.s3.amazonaws.com/images/12/58.jpg'),(59,12,'https://bucketdbgrupo1.s3.amazonaws.com/images/12/59.jpg'),(60,12,'https://bucketdbgrupo1.s3.amazonaws.com/images/12/60.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `policies`
--

DROP TABLE IF EXISTS `policies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policies` (
  `policies_id` int NOT NULL AUTO_INCREMENT,
  `policies_title` varchar(100) NOT NULL,
  `policies_desc` varchar(500) NOT NULL,
  PRIMARY KEY (`policies_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policies`
--

LOCK TABLES `policies` WRITE;
/*!40000 ALTER TABLE `policies` DISABLE KEYS */;
/*!40000 ALTER TABLE `policies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `prod_id` int NOT NULL AUTO_INCREMENT,
  `cat_id` int NOT NULL,
  `city_id` int NOT NULL,
  `prod_address` varchar(300) NOT NULL,
  `prod_name` varchar(100) NOT NULL,
  `prod_punctuation` smallint DEFAULT NULL,
  `prod_stars` decimal(2,1) DEFAULT NULL,
  `prod_desc_title` varchar(100) DEFAULT NULL,
  `prod_desc` varchar(500) DEFAULT NULL,
  `prod_x` decimal(18,10) DEFAULT NULL,
  `prod_y` decimal(18,10) DEFAULT NULL,
  `prod_score` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`prod_id`),
  KEY `cat_id` (`cat_id`),
  KEY `city_id` (`city_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`cat_id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`city_id`) REFERENCES `cities` (`city_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_characteristics`
--

DROP TABLE IF EXISTS `products_characteristics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_characteristics` (
  `prod_charact_id` int NOT NULL AUTO_INCREMENT,
  `prod_id` int NOT NULL,
  `charact_id` int NOT NULL,
  PRIMARY KEY (`prod_charact_id`),
  KEY `prod_id` (`prod_id`),
  KEY `charact_id` (`charact_id`),
  CONSTRAINT `products_characteristics_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`),
  CONSTRAINT `products_characteristics_ibfk_2` FOREIGN KEY (`charact_id`) REFERENCES `characteristics` (`charact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_characteristics`
--

LOCK TABLES `products_characteristics` WRITE;
/*!40000 ALTER TABLE `products_characteristics` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_characteristics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_policies`
--

DROP TABLE IF EXISTS `products_policies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_policies` (
  `prod_policies_id` int NOT NULL AUTO_INCREMENT,
  `prod_id` int NOT NULL,
  `policies_id` int NOT NULL,
  PRIMARY KEY (`prod_policies_id`),
  KEY `prod_id` (`prod_id`),
  KEY `policies_id` (`policies_id`),
  CONSTRAINT `products_policies_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`),
  CONSTRAINT `products_policies_ibfk_2` FOREIGN KEY (`policies_id`) REFERENCES `policies` (`policies_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_policies`
--

LOCK TABLES `products_policies` WRITE;
/*!40000 ALTER TABLE `products_policies` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_policies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `punctuations`
--

DROP TABLE IF EXISTS `punctuations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `punctuations` (
  `punct_id` int NOT NULL AUTO_INCREMENT,
  `prod_id` int NOT NULL,
  `user_id` int NOT NULL,
  `punct_value` decimal(2,1) NOT NULL,
  PRIMARY KEY (`punct_id`),
  KEY `prod_id` (`prod_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `punctuations_ibfk_1` FOREIGN KEY (`prod_id`) REFERENCES `products` (`prod_id`),
  CONSTRAINT `punctuations_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `punctuations`
--

LOCK TABLES `punctuations` WRITE;
/*!40000 ALTER TABLE `punctuations` DISABLE KEYS */;
/*!40000 ALTER TABLE `punctuations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role_name` varchar(100) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN'),(2,'USER');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `role_id` int NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_surname` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` char(60) NOT NULL,
  `user_city` varchar(100) NOT NULL,
  `user_confirmation` tinyint NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,2,'Maria','Acosta','maria@email.com','password1','1',0),(2,2,'Juan','Corral','juan@email.com','password2','2',0),(3,2,'Valeria','Lopez','valeria@email.com','password3','3',0),(4,2,'Franco','Elias','franco@email.com','password4','4',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-06 17:35:34
