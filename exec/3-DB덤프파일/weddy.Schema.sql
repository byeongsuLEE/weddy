-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema weddy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema weddy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `weddy` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `weddy` ;

-- -----------------------------------------------------
-- Table `weddy`.`Cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddy`.`Cart` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `coupleCode` VARCHAR(255) NULL DEFAULT NULL,
  `productId` BIGINT NULL DEFAULT NULL,
  `userId` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 43
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `weddy`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddy`.`User` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `coupleCode` VARCHAR(255) NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `fcmToken` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `otherId` BIGINT NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `picture` VARCHAR(255) NULL DEFAULT NULL,
  `socialId` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `weddy`.`Contract`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddy`.`Contract` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `additionalTerms` VARCHAR(255) NULL DEFAULT NULL,
  `companyName` VARCHAR(30) NULL DEFAULT NULL,
  `downPayment` BIGINT NULL DEFAULT NULL,
  `endDate` DATE NULL DEFAULT NULL,
  `finalPayment` BIGINT NULL DEFAULT NULL,
  `productContent` VARCHAR(255) NULL DEFAULT NULL,
  `productId` BIGINT NULL DEFAULT NULL,
  `productName` VARCHAR(255) NULL DEFAULT NULL,
  `type` TINYINT NULL DEFAULT NULL,
  `startDate` DATE NULL DEFAULT NULL,
  `status` ENUM('CONTRACT_PENDING', 'PAYMENT_COMPLETED', 'PAYMENT_PENDING', 'SIGN_PENDING') NULL DEFAULT NULL,
  `totalMount` BIGINT NULL DEFAULT NULL,
  `user_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKsd60fqk87g9s0yjjf0y3phfph` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FKsd60fqk87g9s0yjjf0y3phfph`
    FOREIGN KEY (`user_id`)
    REFERENCES `weddy`.`User` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `weddy`.`Vender`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddy`.`Vender` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(100) NOT NULL,
  `businessNumber` VARCHAR(30) NOT NULL,
  `imageUrl` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(30) NOT NULL,
  `userId` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UKb3pm4h1laegcbj25g7jgcng65` (`businessNumber` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `weddy`.`Product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddy`.`Product` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(100) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `price` INT NOT NULL,
  `type` ENUM('DRESS', 'MAKEUP', 'STUDIO') NOT NULL,
  `vender_id` BIGINT NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK57pus9x5dk997tn6lqdk13in3` (`vender_id` ASC) VISIBLE,
  CONSTRAINT `FK57pus9x5dk997tn6lqdk13in3`
    FOREIGN KEY (`vender_id`)
    REFERENCES `weddy`.`Vender` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 49
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `weddy`.`ProductImage`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddy`.`ProductImage` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `imageUrl` VARCHAR(255) NOT NULL,
  `product_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK6ch4gkmymtkgrhncc35bhyrmf` (`product_id` ASC) VISIBLE,
  CONSTRAINT `FK6ch4gkmymtkgrhncc35bhyrmf`
    FOREIGN KEY (`product_id`)
    REFERENCES `weddy`.`Product` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 49
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `weddy`.`Review`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddy`.`Review` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `content` VARCHAR(255) NULL DEFAULT NULL,
  `date` DATE NULL DEFAULT NULL,
  `score` DOUBLE NULL DEFAULT NULL,
  `userId` BIGINT NULL DEFAULT NULL,
  `product_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK4j47rrl7uw14px7jb4egtaoxq` (`product_id` ASC) VISIBLE,
  CONSTRAINT `FK4j47rrl7uw14px7jb4egtaoxq`
    FOREIGN KEY (`product_id`)
    REFERENCES `weddy`.`Product` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `weddy`.`Schedule`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddy`.`Schedule` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `code` VARCHAR(10) NULL DEFAULT NULL,
  `content` VARCHAR(255) NULL DEFAULT NULL,
  `endDate` DATE NULL DEFAULT NULL,
  `productId` BIGINT NULL DEFAULT NULL,
  `startDate` DATE NULL DEFAULT NULL,
  `type` ENUM('DRESS', 'MAKEUP', 'STUDIO', 'WEDDING') NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 131
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `weddy`.`Sketch`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `weddy`.`Sketch` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `dressName` VARCHAR(255) NULL DEFAULT NULL,
  `image` VARCHAR(255) NULL DEFAULT NULL,
  `studio` VARCHAR(255) NULL DEFAULT NULL,
  `user_id` BIGINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FKp0875q80s4nvpyftjhekbw350` (`user_id` ASC) VISIBLE,
  CONSTRAINT `FKp0875q80s4nvpyftjhekbw350`
    FOREIGN KEY (`user_id`)
    REFERENCES `weddy`.`User` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
