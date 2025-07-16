CREATE DATABASE  IF NOT EXISTS `demoproject` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `demoproject`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: demoproject
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `email` varchar(50) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `security_question` varchar(45) DEFAULT NULL,
  `security_answer` varchar(45) DEFAULT NULL,
  `role` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('admin@gmail.com','$2a$10$eK5tRya8V0H/8.k9ImvzJOmVWblE5nGTTyepf8bERtkebnK3KO/IC',NULL,NULL,'Admin'),('anand@gmail.com','$2a$10$vkjPdJUerkgre.u9kcoMcumALFOWBbiv/ydixi8xqdPOdRNVtozkS',NULL,NULL,'Teacher'),('aniket@gmail.com','$2a$10$x0lsappH3mC9HUt/rKgpGeo96OzD.MXg.Eb2HhFkw26b8LNfu18Vi',NULL,NULL,'Student'),('atul@gmail.com','$2a$10$oW5KKz3yOSnZQBfcJ6VuV.FAaypo6.jnldJiEVVrxkIcp.GpBKQbi',NULL,NULL,'Student'),('avinash@gmail.com','$2a$10$r0xNd6GUvfmg01rXbX/HNu94/iN1Yq8fuIMWKQpebkRGHa72YCFje',NULL,NULL,'Teacher'),('kamil@gmail.com','$2a$10$mjmOw0BOQNp7Q7OEO2qp3ePjPq6/UbsLKI3PjBvel1yr0zn4rzoHm',NULL,NULL,'Student'),('rajkamal@gmail.com','$2a$10$pNKILVZTP289xm6hd9edMOqatQD3CYs2e4ms3cNRbQhtUCHqd6XrW',NULL,NULL,'Teacher');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marks`
--

DROP TABLE IF EXISTS `marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marks` (
  `marks_id` int NOT NULL AUTO_INCREMENT,
  `project_id` int DEFAULT NULL,
  `synopsis` int DEFAULT NULL,
  `review1` int DEFAULT NULL,
  `review2` int DEFAULT NULL,
  `review3` int DEFAULT NULL,
  `final` int DEFAULT NULL,
  PRIMARY KEY (`marks_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marks`
--

LOCK TABLES `marks` WRITE;
/*!40000 ALTER TABLE `marks` DISABLE KEYS */;
INSERT INTO `marks` VALUES (3,14,15,12,25,23,15),(4,15,25,15,25,25,25),(5,16,15,25,15,54,12);
/*!40000 ALTER TABLE `marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(40) DEFAULT NULL,
  `domain` varchar(45) DEFAULT NULL,
  `technology_used` longtext,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `title_Status` int DEFAULT '1',
  PRIMARY KEY (`project_id`),
  KEY `indx_title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (9,'','','',NULL,NULL,'Assigned',0),(10,'Crypto Graphy','Crypto','Solana',NULL,NULL,'Assigned',1),(11,'','','',NULL,NULL,'Assigned',1),(12,'','','',NULL,NULL,'Assigned',1),(13,'','','',NULL,NULL,'Assigned',1),(14,'','','',NULL,NULL,'Assigned',1),(15,'Intigri chain','Study','Time',NULL,NULL,'Assigned',1),(16,'Ecommerrce Wbesite','Web devlopment','MERN Stack',NULL,NULL,'Assigned',1);
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_allocation`
--

DROP TABLE IF EXISTS `project_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_allocation` (
  `stu_project` varchar(45) NOT NULL,
  `prn` varchar(10) NOT NULL,
  `teacher_id` int NOT NULL,
  `project_id` int NOT NULL,
  `Allocation_date` date DEFAULT NULL,
  `semester` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`stu_project`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_allocation`
--

LOCK TABLES `project_allocation` WRITE;
/*!40000 ALTER TABLE `project_allocation` DISABLE KEYS */;
INSERT INTO `project_allocation` VALUES ('122M1H006_14','122M1H006',7,14,'2024-02-28','5th'),('122M1H006_9','122M1H006',5,9,'2023-11-30','1st'),('122M1H017_10','122M1H017',5,10,'2023-11-30','1st'),('122M1H035_11','122M1H035',6,11,'2023-11-30','1st'),('122M1H035_13','122M1H035',6,13,'2024-02-28','4th'),('122M1H035_15','122M1H035',7,15,'2024-02-28','2nd'),('122M1H054_12','122M1H054',6,12,'2023-11-30','1st'),('122M1H07_16','122M1H07',7,16,'2024-02-29','4th');
/*!40000 ALTER TABLE `project_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project_diary`
--

DROP TABLE IF EXISTS `project_diary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project_diary` (
  `diaryId` int NOT NULL,
  `projectID` varchar(45) DEFAULT NULL,
  `visitDate` date DEFAULT NULL,
  `Remarks` longtext,
  PRIMARY KEY (`diaryId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project_diary`
--

LOCK TABLES `project_diary` WRITE;
/*!40000 ALTER TABLE `project_diary` DISABLE KEYS */;
/*!40000 ALTER TABLE `project_diary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schedule` (
  `task_id` int NOT NULL AUTO_INCREMENT,
  `task_name` varchar(255) NOT NULL,
  `date_allocated` date DEFAULT NULL,
  PRIMARY KEY (`task_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (9,'Synopsis','2023-10-05'),(10,'Review 1','2023-10-12'),(11,'Review 2','2023-10-19'),(12,'Review 3','2023-10-28'),(13,'Final Submission','2023-12-03'),(14,'mock','2023-11-17'),(15,'Meet Priya','2024-03-03');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `prn` varchar(10) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `gender` enum('Male','Female') DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `department` varchar(20) DEFAULT NULL,
  `status` int DEFAULT NULL,
  PRIMARY KEY (`prn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('122M1H006','Aditya Singh ','Male','adi@gmail.com',9130406918,'MCA',1),('122M1H017','Atul Agrawal','Male','atul@gmail.com',9881858078,'MCA',1),('122M1H035','Kamil Shaikh','Male','kamil@gmail.com',9586241572,'MCA',1),('122M1H054','Sahil Mudhale','Male','sahil@gmail.com',9403763760,'MCA',0),('122M1H07','Aniket Phalke','Male','aniket@gmail.com',9656481750,'MCA',1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `teacher_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  `gender` enum('Male','Female') DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `specialization` longtext,
  `status` int DEFAULT '1',
  PRIMARY KEY (`teacher_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (5,'Rajkamal Sangole','Male',9665615424,'rajkamal@gmail.com','ML',1),(6,'Avinash ','Male',9421598652,'avinash@gmail.com','ML',1),(7,'Anand Jain','Male',9421598652,'anand@gmail.com','ML',1);
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01  0:16:18
