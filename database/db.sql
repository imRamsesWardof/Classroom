-- -----------------------------------------------------
-- Schema Classroom
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Classroom` DEFAULT CHARACTER SET utf8 ;
USE `Classroom` ;

-- -----------------------------------------------------
-- Table `Classroom`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Classroom`.`Role` (
  `Id` VARCHAR(36) NOT NULL,
  `Type` VARCHAR(50) UNIQUE NOT NULL,
  `IsActive` BIT NULL,
  `Date` DATETIME NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Classroom`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Classroom`.`User` (
  `Id` VARCHAR(36) NOT NULL,
  `Name` VARCHAR(100) NULL,
  `Username` VARCHAR(100) NULL,
  `Password` LONGTEXT NULL,
  `Rol_Id` VARCHAR(36) NOT NULL,
  `IsActive` BIT NULL,
  `Date` DATETIME NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `fk_User_Rol`
    FOREIGN KEY (`Rol_Id`)
    REFERENCES `Classroom`.`Role` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Classroom`.`Class`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Classroom`.`Class` (
  `Id` VARCHAR(36) NOT NULL,
  `Title` VARCHAR(100) NULL,
  `Description` TEXT NULL,
  `StartDate` DATETIME NULL,
  `EndDate` DATETIME NULL,
  `Teacher_Id` VARCHAR(36) NOT NULL,
  `IsActive` BIT NULL,
  `Date` DATETIME NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `fk_User_tacher`
    FOREIGN KEY (`Teacher_Id`)
    REFERENCES `Classroom`.`user` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- -----------------------------------------------------
-- Table `Classroom`.`Assignment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Classroom`.`Assignment` (
  `Id` VARCHAR(36) NOT NULL,
  `User_Id` VARCHAR(36) NOT NULL,
  `Class_Id` VARCHAR(36) NOT NULL,
  `IsActive` BIT NULL,
  `Date` DATETIME NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `fk_User_has_Class_User1`
    FOREIGN KEY (`User_Id`)
    REFERENCES `Classroom`.`User` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_User_has_Class_Class1`
    FOREIGN KEY (`Class_Id`)
    REFERENCES `Classroom`.`Class` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;