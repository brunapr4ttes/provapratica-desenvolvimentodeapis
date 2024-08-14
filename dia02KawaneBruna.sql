CREATE DATABASE  IF NOT EXISTS `restful` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `restful`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: restful
-- ------------------------------------------------------
-- Server version	8.0.36

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

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `eventoId` varchar(60) NOT NULL,
  `titulo` varchar(80) NOT NULL,
  `dataEvento` varchar(255) NOT NULL,
  `palestranteId` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`eventoId`),
  KEY `palestranteId` (`palestranteId`),
  CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`palestranteId`) REFERENCES `palestrantes` (`palestranteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES ('27645a11-0b53-4e47-a217-bce5ecffe333','Sunset Robótico','2024-08-14','045e4e88-5c04-4249-8601-5cb57e119c80','2024-08-14 12:46:28','2024-08-14 12:46:28'),('81493120-8671-4fdc-9dc3-fefdb3c7f26e','Loolapalooza','2024-08-14','1137ac63-a5d2-4dc2-8258-63a862ad8eeb','2024-08-14 12:54:24','2024-08-14 12:54:24');
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `palestrantes`
--

DROP TABLE IF EXISTS `palestrantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `palestrantes` (
  `palestranteId` varchar(60) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `expertise` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`palestranteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `palestrantes`
--

LOCK TABLES `palestrantes` WRITE;
/*!40000 ALTER TABLE `palestrantes` DISABLE KEYS */;
INSERT INTO `palestrantes` VALUES ('045e4e88-5c04-4249-8601-5cb57e119c80','loira','patrocínio','2024-08-14 12:46:06','2024-08-14 12:46:06'),('1137ac63-a5d2-4dc2-8258-63a862ad8eeb','bruna','nenhuma','2024-08-14 12:51:22','2024-08-14 12:51:22');
/*!40000 ALTER TABLE `palestrantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participanteevento`
--

DROP TABLE IF EXISTS `participanteevento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participanteevento` (
  `participanteId` varchar(255) NOT NULL,
  `eventoId` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY `participanteId` (`participanteId`),
  CONSTRAINT `participanteevento_ibfk_1` FOREIGN KEY (`participanteId`) REFERENCES `participantes` (`participanteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participanteevento`
--

LOCK TABLES `participanteevento` WRITE;
/*!40000 ALTER TABLE `participanteevento` DISABLE KEYS */;
/*!40000 ALTER TABLE `participanteevento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participantes`
--

DROP TABLE IF EXISTS `participantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participantes` (
  `participanteId` varchar(60) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`participanteId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participantes`
--

LOCK TABLES `participantes` WRITE;
/*!40000 ALTER TABLE `participantes` DISABLE KEYS */;
INSERT INTO `participantes` VALUES ('573e7455-53f9-4e9e-9e73-f389ec3d41ce','kawan','kawanprates@gmail.com','2024-08-14 12:45:58','2024-08-14 12:45:58'),('b74e9b36-f283-4850-894b-a5da5e1744b5','ricardo','ricardo@gmail.com','2024-08-14 12:52:51','2024-08-14 12:52:51');
/*!40000 ALTER TABLE `participantes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-14 10:02:28
