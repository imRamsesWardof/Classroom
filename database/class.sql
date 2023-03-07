DELIMITER //
CREATE PROCEDURE GetClasses()
BEGIN
	SELECT title AS name, id as value FROM class c
    WHERE IsActive = 1;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE GetClass(IN Id varchar(36))
BEGIN
	SELECT c.*, u.name AS Teacher_Name FROM class c
    INNER JOIN user u ON c.Teacher_Id = u.Id
    WHERE c.Id = Id AND c.IsActive = 1;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE PostClass( 
		IN Id VARCHAR(36),
        IN Title VARCHAR(100),
        IN Description TEXT,
        IN User_Id VARCHAR(36),
        IN StartDate DATETIME,
        IN EndDate DATETIME,
        IN IsActive_ BIT,
        IN Date_ DATETIME)
BEGIN
	INSERT INTO `class`VALUES 
    (Id, Title, Description, User_Id, StartDate, EndDate, IsActive_, Date_);
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE PutClass( 
		IN Id VARCHAR(36),
        IN Title VARCHAR(100),
        IN Description TEXT,
        IN User_Id VARCHAR(36),
        IN StartDate DATETIME,
        IN EndDate DATE,
        IN IsActive BIT(1),
        IN date DATETIME)
BEGIN
	UPDATE `class` SET `Title` = Title , `Description` = Description, `Teacher_Id` = User_Id,
    `StartDate` = StartDate, `EndDate` = EndDate, `IsActive` = IsActive, `Date`= date WHERE `class`.Id = Id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE DeleteClass( 
		IN Id VARCHAR(36),
        IN IsActive BIT(1),
        IN date DATETIME)
BEGIN
	UPDATE `class` SET `IsActive` = IsActive, `Date`= date WHERE `class`.Id = Id;
END //
DELIMITER ;

DELIMITER //
CREATE PROCEDURE AssignClass( 
		IN Id VARCHAR(36),
        IN User_Id VARCHAR(36),
		IN Class_Id VARCHAR(36))
BEGIN
	INSERT INTO `assignment` (`Id`, `User_Id`, `Class_Id`) VALUES 
    (Id, User_Id, Class_Id);
END //
DELIMITER ;


