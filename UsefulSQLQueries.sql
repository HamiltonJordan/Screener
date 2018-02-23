-- ===================================================
-- These are some useful queries we can use as we 
-- develop out our database and need to test out
-- functionality
--							- Danny
-- ===================================================

-- Gets all students and what classes they are in
SELECT e.StudentId, s.FirtName, s.LastName, c.ClassName
FROM EnrolledIn e
INNER JOIN Student s ON e.StudentId = s.StudentId
INNER JOIN Class c ON e.ClassId = c.ClassId
WHERE s.Active = 1
AND   c.Active = 1
-- AND e.ClassId = 1  --This filters it to a specific class

-- Gets all professor and what classes they teach
SELECT t.ProfessorId, p.FirtName, p.LastName, c.ClassName
FROM Teaches t
INNER JOIN Professor p ON t.StudentId = p.ProfessorId
INNER JOIN Class c ON t.ClassId = c.ClassId
WHERE p.Active = 1
AND   c.Active = 1
-- AND t.ClassId = 1  --This filters it to a specific class

-- Gets all videos and what classes they are for
SELECT cv.VideoId, v.Title, v.URL, c.ClassName
FROM ClassVideo cv
INNER JOIN Video v ON cv.VideoId = v.VideoId
INNER JOIN Class c ON cv.ClassId = c.ClassId
WHERE p.Active = 1
AND   c.Active = 1
-- AND cv.ClassId = 1  --This filters it to a specific class
