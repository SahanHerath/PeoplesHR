-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2024 at 06:56 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employees_hr`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(140) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@nimi.com', 'admin@nimi'),
(2, 'hr@nimi.com', 'hr');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Software Engineer'),
(2, 'HR Manager'),
(3, 'QA Engineer'),
(4, 'Intern'),
(5, 'Business Analyst'),
(6, 'Project Manger');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(60) NOT NULL,
  `team` varchar(50) NOT NULL,
  `position` varchar(30) NOT NULL,
  `age` int(11) NOT NULL,
  `distance` varchar(60) NOT NULL,
  `image` varchar(60) NOT NULL,
  `available_days` varchar(60) NOT NULL,
  `medical_condition` varchar(30) NOT NULL,
  `family` varchar(60) NOT NULL,
  `salary` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `email`, `password`, `team`, `position`, `age`, `distance`, `image`, `available_days`, `medical_condition`, `family`, `salary`, `category_id`) VALUES
(1, 'Mahesh Abeykoon', 'mahesh@nimi.com', '$2b$10$CIrY4bBrKIwah3Wdip8ExukT.yHs0EHLB1feY.Uv567ShmvEZAfdW', 'team B', 'ASE', 0, '150Km', 'image_1723989541655.png', 'Monday & Tuesday', '', '', 1010101, 1),
(2, 'Abc Cba', 'test1@nimi.com', '$2b$10$wLUBE3E85SeHdBhxZge.i.uEjVUxXI33bl4jqkgKsWa2Z1TxFn81q', 'A', 'ASE', 34, '103Km', 'image_1723994329458.png', 'Monday & Tuesday', 'Medical Condition', '', 121313, 3),
(3, 'name', 'asd@nimi.com', '$2b$10$L0biSnz1cSEgaKuzu0dSnev19o1BlIlSfH0IM1M5Son/WeehZfe62', 'non', 'BA', 34, 'Distance to Office', 'image_1723994524988.png', 'available_days	', 'Medical ', 'Family', 0, 1),
(4, 'name', 'mail1@nimi.com', '$2b$10$0DuACrWlUS8OPljNorT2lO15B3jOOrPIJaqbpIhrrsrWFeIcT3d0O', 'Team E', 'Intern HR', 33, '1133KM', 'image_1723994711641.png', 'Monday & Tuesday', 'Medical ', 'Family', 0, 2),
(5, 'name', '', 'admin@nimi.com', '-', 'SE', 0, '', 'image_1723994867659.png', '', '', '', 0, 0),
(7, 'Mahesh Abeykoon', 'mah@nimi.com', '$2b$10$/OU/FYYjzGOpdgaXlshCh.6q0792a0MkKzzj73bhEOd7WdOs1OCqm', 'Team', 'position', 33, '555', 'image_1723995097585.png', 'Monday & Tuesday', 'medical_condition', 'family', 121212, 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
