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

INSERT INTO `classroom`.`role`
(`Id`,
`Type`,
`IsActive`,
`Date`)
VALUES
(UUID(), 'Admin', 1, NOW());


DELIMITER $$
CREATE PROCEDURE `GetUser` (
IN Rol_Id_ VARCHAR(50)
)
BEGIN
DECLARE Id_Role VARCHAR(36);
SET Id_Role = (SELECT Id FROM role WHERE Type = Rol_Id_);
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
WHERE `user`.`Rol_Id` = Id_Role ;
END

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

DELIMITER $$
CREATE PROCEDURE `PutUser` (
IN Id_ VARCHAR(36),
IN Name_ VARCHAR(100),
IN Username_ VARCHAR(100),
IN Password_ LONGTEXT,
IN IsActive_ BIT,
IN Date_ DATETIME
)
BEGIN
UPDATE `classroom`.`user`
SET
`Name` = IFNULL(Name_, Name),
`Username` = IFNULL(Username_, Username),
`Password` = IFNULL(Password_, Password),
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