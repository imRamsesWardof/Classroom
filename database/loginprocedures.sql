--* Las validaciones se hacen en los controladores 

DELIMITER $$
	CREATE PROCEDURE `Login` (
	IN Username_ VARCHAR(100)
	)
	BEGIN
		SELECT 
        user.Id,
        user.Name,
        user.Username as 'Username',
        user.Password as 'Password',
        role.Type as 'Role'
        FROM user 
		INNER JOIN role ON role.Id = user.Rol_Id
		WHERE Username = Username_ LIMIT 1;
	END
$$
