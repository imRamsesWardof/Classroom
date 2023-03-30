SELECT Student_HW.StudentName, Homeworks_Done, Student_Grade 
FROM (
    SELECT user.Name AS StudentName, COUNT(homework.Id) AS Homeworks_Done, HomeworkAvailable.Homework_Assigned 
    FROM homework 
    INNER JOIN assignment 
        ON assignment.Id = homework.Assignment_Id 
    INNER JOIN user 
        ON assignment.User_id = user.Id 
    INNER JOIN (
        SELECT COUNT(section.Id) AS Homework_Assigned, assignment.User_Id 
        FROM assignment 
        INNER JOIN class 
            ON assignment.Class_Id = class.Id 
        INNER JOIN section 
            ON section.Class_Id = assignment.Class_Id 
        WHERE section.Type_Id='6177daa5-c6c7-11ed-a6a7-0c54a51ac93f' 
        GROUP BY assignment.User_Id
    ) AS HomeworkAvailable 
        ON assignment.User_Id = HomeworkAvailable.User_Id 
    WHERE homework.Assignment_Id = assignment.Id 
    GROUP BY assignment.User_Id
) AS Student_HW 
INNER JOIN (
    SELECT StudentName, AVG(AVG_Grade) AS Student_Grade 
    FROM (
        SELECT user.Name AS StudentName, SUM(homework.Score) AS TotalScore, HWAvailable, SUM(homework.Score)/HWAvailable AS AVG_Grade, class.Title 
        FROM homework 
        INNER JOIN assignment 
            ON assignment.Id = homework.Assignment_Id 
        INNER JOIN user 
            ON assignment.User_id = user.Id 
        INNER JOIN class 
            ON class.Id = assignment.Class_Id 
        INNER JOIN (
            SELECT class.title, COUNT(section.Id) AS HWAvailable, class.Id AS CLASSID 
            FROM class 
            INNER JOIN section 
                ON class.Id = section.Class_Id 
            WHERE section.Type_Id='6177daa5-c6c7-11ed-a6a7-0c54a51ac93f' 
            GROUP BY class.Id
        ) AS TotalHW 
            ON class.Id = TotalHW.CLASSID 
        GROUP BY assignment.Id
    ) AS StudentGrade 
    GROUP BY StudentName
) AS Students_Grades 
    ON Student_HW.StudentName = Students_Grades.StudentName 
ORDER BY Homeworks_Done DESC LIMIT 5;