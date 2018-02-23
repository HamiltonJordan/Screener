-- ===================================================
-- This is a prebuilt script that we can use to build
-- out our database.  We can always re-use this just
-- in case we need to rebuild our database.
--							- Danny
-- ===================================================



-- ===================================================
-- ================  CREATE TABLES ===================
-- ===================================================

CREATE TABLE Student(
   Id        INT NOT NULL AUTO_INCREMENT,
   FirtName  VARCHAR(30) NOT NULL,
   LastName  VARCHAR(30) NOT NULL,
   WheatonId VARCHAR(30) NOT NULL,
   Active    BIT(1) NOT NULL,
   PRIMARY KEY ( Id )
);

CREATE TABLE Professor(
   Id        INT NOT NULL AUTO_INCREMENT,
   FirtName  VARCHAR(30) NOT NULL,
   LastName  VARCHAR(30) NOT NULL,
   WheatonId VARCHAR(30) NOT NULL,
   Active    BIT(1) NOT NULL,
   PRIMARY KEY ( Id )
);

CREATE TABLE Video(
   Id     INT NOT NULL AUTO_INCREMENT,
   Title  VARCHAR(30) NOT NULL,
   URL    VARCHAR(30) NOT NULL,
   Active BIT(1) NOT NULL,
   PRIMARY KEY ( Id )
);

CREATE TABLE Class(
   Id        INT NOT NULL AUTO_INCREMENT,
   ClassName VARCHAR(30) NOT NULL,
   CRN       VARCHAR(20) NOT NULL,
   Active    BIT(1) NOT NULL,
   PRIMARY KEY ( Id )
);

CREATE TABLE EnrolledIn(
   StudentId INT NOT NULL,
   ClassId   INT NOT NULL,
);

CREATE TABLE Teaches(
   ProfessorId INT NOT NULL,
   ClassId     INT NOT NULL,
);

CREATE TABLE ClassVideo(
   ClassId     INT NOT NULL,
   VideoId     INT NOT NULL,
);

-- ===================================================
-- ============= END CREATE TABLES ===================
-- ===================================================


-- ===================================================
-- ================  INSERT TABLES ===================
-- ===================================================

INSERT INTO Student (FirtName,LastName,WheatonId,Active) VALUES("Daniel", "Barber", "w00328546", "1");
INSERT INTO Student (FirtName,LastName,WheatonId,Active) VALUES("Jordan", "Hamilton", "w00320000", "1");
INSERT INTO Student (FirtName,LastName,WheatonId,Active) VALUES("Kathleen", "Orechia", "w00320000", "1");

INSERT INTO Professor (FirtName,LastName,WheatonId,Active) VALUES("Mark", "LeBlanc", "w00320000", "1");
INSERT INTO Professor (FirtName,LastName,WheatonId,Active) VALUES("Michael", "Gousie", "w00320000", "1");
INSERT INTO Professor (FirtName,LastName,WheatonId,Active) VALUES("Tom", "Armstrong", "w00320000", "1");

INSERT INTO Video (Title,URL,Active) VALUES("Video Title for Comp401", "URL" "1");
INSERT INTO Video (Title,URL,Active) VALUES("Video Title for Comp115", "URL" "1");
INSERT INTO Video (Title,URL,Active) VALUES("Video Title for Comp116", "URL" "1");

INSERT INTO Class (ClassName,Active) VALUES("Comp401", "1");
INSERT INTO Class (ClassName,Active) VALUES("Comp115", "1");
INSERT INTO Class (ClassName,Active) VALUES("Comp116", "1");

INSERT INTO EnrolledIn (StudentId,ClassId) VALUES(1, 1); -- Danny is enrolled in 401
INSERT INTO EnrolledIn (StudentId,ClassId) VALUES(1, 2); -- Danny is enrolled in 115
INSERT INTO EnrolledIn (StudentId,ClassId) VALUES(2, 1); -- Jordan is enrolled in 401
INSERT INTO EnrolledIn (StudentId,ClassId) VALUES(2, 3); -- Jordan is enrolled in 116
INSERT INTO EnrolledIn (StudentId,ClassId) VALUES(3, 1); -- Kathleen is enrolled in 401
INSERT INTO EnrolledIn (StudentId,ClassId) VALUES(3, 3); -- Kathleen is enrolled in 116

INSERT INTO Teaches (ProfessorId,ClassId) VALUES(1, 1); -- Mark teaches 401
INSERT INTO Teaches (ProfessorId,ClassId) VALUES(2, 2); -- Gousie teaches 115
INSERT INTO Teaches (ProfessorId,ClassId) VALUES(3, 3); -- Armstrong teaches 116

INSERT INTO ClassVideo (ClassId,VideoId) VALUES(1, 1); 
INSERT INTO ClassVideo (ClassId,VideoId) VALUES(2, 2);
INSERT INTO ClassVideo (ClassId,VideoId) VALUES(3, 3);

-- ===================================================
-- ============= END INSERT TABLES ===================
-- ===================================================

