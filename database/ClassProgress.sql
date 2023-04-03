CREATE DEFINER=`root`@`localhost` PROCEDURE `GetClassProgress`()
BEGIN
SELECT Title, DATE_FORMAT(Startdate, '%d') as Startdate, DATE_FORMAT(Enddate, '%d') as Enddate
FROM class 
WHERE startdate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY) order by Startdate;
END