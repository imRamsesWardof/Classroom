CREATE DEFINER=`root`@`localhost` PROCEDURE `GetAC_HW`()
BEGIN
SELECT QAssigned.Title, QCompleted.Completed, QAssigned.Assigned FROM
(SELECT a.Class_Id, COUNT(DISTINCT h.Id) Completed
FROM homework h
INNER JOIN assignment a ON h.Assignment_Id = a.Id
WHERE h.IsCompleted = 1
GROUP BY a.Class_Id) AS QCompleted
INNER JOIN 
(SELECT a.Class_Id, c.Title, COUNT(a.User_Id) Assigned
FROM assignment a
INNER JOIN class c ON c.Id = a.Class_Id
INNER JOIN section s ON s.Class_Id = c.Id
WHERE s.Type_Id = '6177daa5-c6c7-11ed-a6a7-0c54a51ac93f'
GROUP BY Class_Id) AS QAssigned
ON QCompleted.Class_Id = QAssigned.Class_Id;
END