

-- Gets all students and what classes they are in
SELECT EnrolledIn.StudentId, Student.FirstName, Student.LastName, Class.ClassName
FROM EnrolledIn
INNER JOIN Student ON EnrolledIn.StudentId = Student.Id
INNER JOIN Class ON EnrolledIn.ClassId = Class.Id
WHERE Student.Active = 1
AND   Class.Active = 1;
-- AND e.ClassId = 1  --This filters it to a specific class

-- Gets all professor and what classes they teach
SELECT Teaches.ProfessorId, Professor.FirtName, Professor.LastName, Class.ClassName
FROM Teaches
INNER JOIN Professor ON Teaches.ProfessorId = Professor.Id
INNER JOIN Class ON Teaches.ClassId = Class.Id
WHERE Professor.Active = 1
AND   Class.Active = 1;
-- AND t.ClassId = 1  --This filters it to a specific class

-- Gets all videos and what classes they are for
SELECT ClassVideo.VideoId, Video.Title, Video.URL, Class.ClassName
FROM ClassVideo
INNER JOIN Video ON ClassVideo.VideoId = Video.Id
INNER JOIN Class ON ClassVideo.ClassId = Class.Id
WHERE Video.Active = 1
AND   Class.Active = 1
-- AND cv.ClassId = 1  --This filters it to a specific class
