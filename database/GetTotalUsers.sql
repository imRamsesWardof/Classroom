DELIMITER $$
CREATE PROCEDURE `GetTotalUser` (
)
BEGIN
SELECT 
    `role`.`Type` as Role,
    COUNT(`user`.`Id`)
FROM `user`
INNER JOIN role on `role`.`Id` = `user`.`Rol_Id`
GROUP BY `role`.`Id`;
END

DELIMITER $$