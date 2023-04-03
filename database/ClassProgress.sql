CREATE PROCEDURE `GetClassProgress`()
BEGIN
SELECT Title, DATE_FORMAT(Startdate, '%d') as Startdate, DATE_FORMAT(Enddate, '%d') as Enddate
FROM class 
WHERE MONTH(CURDATE()) = MONTH(Startdate) OR MONTH(CURDATE()) = MONTH(Enddate) 
ORDER BY Startdate;
END