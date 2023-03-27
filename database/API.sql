DELIMITER $$
CREATE PROCEDURE `APIGetClasses`(IN Id varchar(36))
BEGIN
SELECT
	c.Id as ClassId, Title as ClassName,
	Description, Name as TeacherName
FROM class c
	INNER JOIN user u ON c.Teacher_Id = u.Id
	INNER JOIN assignment a ON a.Class_Id = c.Id
WHERE a.User_Id = Id
	AND c.StartDate <= curdate() 
	AND c.IsActive = 1 AND a.IsActive = 1;
END
$$ DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `APIUploadHW`(
    IN User_Id_ VARCHAR(36),
    IN Class_Id_ VARCHAR(36),
    IN Homework_Id VARCHAR(36),
    IN Section_Id VARCHAR(36),
    IN File_Id VARCHAR(36),
    IN Route TEXT,
    IN FileName VARCHAR(100),
    IN IsCompleted BIT(1),
    IN Type BIT(1)
)
BEGIN
    DECLARE Assignment_Id VARCHAR(36); 
    
    INSERT INTO file (Id, Route, FileName, Type, Section_Id)
    VALUES (File_Id, Route, FileName, Type, Section_Id);
        
    SELECT Id INTO Assignment_Id FROM assignment WHERE User_Id = User_Id_ AND Class_Id = Class_Id; -- Asignar el resultado de la consulta a la variable
    
    INSERT INTO homework (Id, IsCompleted, Assignment_Id, File_Id, Section_Id)
    VALUES (Homework_Id, IsCompleted, Assignment_Id, File_Id, Section_Id);
    
END$$

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `APIDeleteSection` (
IN Section_Id_ VARCHAR(36)
)
BEGIN 
UPDATE section SET IsActive = 0 WHERE Id = Section_Id_;
UPDATE homework SET IsActive = 0 WHERE Section_Id = Section_Id_;
END
$$ DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `APIGetNotifications`(
IN Id_ VARCHAR(36)
)
BEGIN 
SELECT
h.Section_Id,
s.Name AS SectionName,
c.Title AS ClassName,
c.EndDate
FROM homework h
INNER JOIN assignment a ON h.Assignment_Id = a.Id
INNER JOIN section s ON h.Section_Id = s.Id
INNER JOIN class c ON a.Class_Id = c.Id
WHERE a.User_Id = Id_ AND c.IsActive = 1 AND s.IsActive = 1;
END$$

DELIMITER ;


