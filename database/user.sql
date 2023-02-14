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
CREATE PROCEDURE `GetStudent` ()
BEGIN
SELECT 
	`user`.`Id`,
    `user`.`Name`,
    `user`.`Username`,
    `user`.`Password`,
    `user`.`Rol_Id`,
    `user`.`IsActive`,
    `user`.`Date`
FROM `classroom`.`user`
WHERE `user`.`Rol_Id` = 'dc3c2a78-abe4-11ed-82cc-ace2d36b47fa'
END
DELIMITER $$