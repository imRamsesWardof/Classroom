DELIMITER $$
CREATE PROCEDURE `GetRole` (
)
BEGIN
SELECT 
	`role`.`Id`,
    `role`.`Type`,
    `role`.`IsActive`,
    `role`.`Date`
FROM `classroom`.`role`;
END
$$


DELIMITER $$
CREATE PROCEDURE `PostRole` (
IN Id_ VARCHAR(36),
IN Type_ VARCHAR(50),
IN IsActive_ BIT,
IN Date_ DATETIME
)
BEGIN
INSERT INTO `classroom`.`role`
(`Id`,
`Type`,
`IsActive`,
`Date`)
VALUES
(Id_, Type_, IsActive_, Date_);
END
$$


DELIMITER $$
CREATE PROCEDURE `PutRole` (
IN Id_ VARCHAR(36),
IN Type_ VARCHAR(50),
IN IsActive_ BIT,
IN Date_ DATETIME
)
BEGIN
UPDATE `classroom`.`role`
SET
`Type` = IFNULL(Type_, Type),
`IsActive` = IFNULL(IsActive_, IsActive),
`Date` = IFNULL(Date_, Date)
WHERE `Id` = Id_;
END
$$

DELIMITER $$
CREATE PROCEDURE `DeleteRole` (
IN Id_ VARCHAR(36),
IN IsActive_ BIT,
IN Date_ DATETIME
)
BEGIN
UPDATE `classroom`.`role`
SET
`IsActive` = IFNULL(IsActive_, IsActive),
`Date` = IFNULL(Date_, Date)
WHERE `Id` = Id_;
END
$$