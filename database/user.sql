INSERT INTO `classroom`.`role`
(`Id`,
`Type`,
`IsActive`,
`Date`)
VALUES
('e8140b40-abe4-11ed-82cc-ace2d36b47fa', 'Teacher', 1, NOW());


INSERT INTO `classroom`.`role`
(`Id`,
`Type`,
`IsActive`,
`Date`)
VALUES
('dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 'Student', 1, NOW());

DELIMITER $$
CREATE PROCEDURE `GetUser` (
IN Rol_Id_ VARCHAR(36)
)
BEGIN
SELECT 
	`user`.`Id`,
    `user`.`Name`,
    `user`.`Username`,
    `user`.`Password`,
    `user`.`Rol_Id`,
    `role`.`Type` as Rol,
    `user`.`IsActive`,
    `user`.`Date`
FROM `classroom`.`user`
INNER JOIN role on `role`.`Id` = `user`.`Rol_Id`
WHERE `user`.`Rol_Id` = Rol_Id_;
END
$$


DELIMITER $$
CREATE PROCEDURE `PostUser` (
IN Id_ VARCHAR(36),
IN Name_ VARCHAR(100),
IN Username_ VARCHAR(100),
IN Password_ LONGTEXT,
IN Rol_Id_ VARCHAR(36),
IN IsActive_ BIT,
IN Date_ DATETIME
)
BEGIN
INSERT INTO `classroom`.`user`
(`Id`,
`Name`,
`Username`,
`Password`,
`Rol_Id`,
`IsActive`,
`Date`)
VALUES
(Id_, Name_, Username_, Password_, Rol_Id_, IsActive_, Date_);
END
$$

CALL PostUser(UUID(), 'Garcia Romo Quetzaly Emileth', 'A@gmail.com', '12345', 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());
CALL PostUser(UUID(), 'Carlos Roman Alexa Nicole', 'Bgmail.com', '12345', 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());
CALL PostUser(UUID(), 'Cisneros Garcia Danna Elizabeth', 'C@gmail.com', '12345', 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());
CALL PostUser(UUID(), 'Cortes Almaguer Leonardo Ezau', 'D@gmail.com', '12345', 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());
CALL PostUser(UUID(), 'Cruz Lopez Jorge Angel', 'E@gmail.com', '12345', 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());
CALL PostUser(UUID(), 'De Lira Delgado Dibanhi', 'G@gmail.com', '12345', 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());
CALL PostUser(UUID(), 'De Luna Roldan Elliot Fernando', 'H@gmail.com',  '12345','dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());
CALL PostUser(UUID(), 'Diaz Garza Alan Ezequiel', 'I@gmail.com', '12345', 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());
CALL PostUser(UUID(), 'Esparza Legaspi Regina Nicole', 'J@gmail.com', '12345', 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());
CALL PostUser(UUID(), 'Flores Romo Ana Lucia', 'K@gmail.com', '12345', 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa', 1, NOW());


DELIMITER $$
CREATE PROCEDURE `PutUser` (
IN Id_ VARCHAR(36),
IN Name_ VARCHAR(100),
IN Username_ VARCHAR(100),
IN Password_ LONGTEXT,
IN Rol_Id_ VARCHAR(36),
IN IsActive_ BIT,
IN Date_ DATETIME
)
BEGIN
UPDATE `classroom`.`user`
SET
`Name` = IFNULL(Name_, Name),
`Username` = IFNULL(Username_, Username),
`Password` = IFNULL(Password_, Password),
`Rol_Id` = IFNULL(Rol_Id_, Rol_Id),
`IsActive` = IFNULL(IsActive_, IsActive),
`Date` = IFNULL(Date_, Date)
WHERE `Id` = Id_;
END
$$


DELIMITER $$
CREATE PROCEDURE `DeleteUser` (
IN Id_ VARCHAR(36),
IN IsActive_ BIT,
IN Date_ DATETIME
)
BEGIN
UPDATE `classroom`.`user`
SET
`IsActive` = IFNULL(IsActive_, IsActive),
`Date` = IFNULL(Date_, Date)
WHERE `Id` = Id_;
END
$$


--CLASS DETAILS     
DELIMITER $$
CREATE PROCEDURE `GetClassDetails` (
IN Class_Id VARCHAR(36)
)
BEGIN
SELECT 
U.Id,
U.Name,
U.Username
FROM class as C
INNER JOIN assignment as A on A.Class_Id = C.Id
INNER JOIN user as U on U.Id = A.User_Id
WHERE C.Id = Class_Id
ORDER BY U.Name;
END
$$