<?php
    error_reporting(E_ALL); 
    ini_set('display_errors',1);

    // Connect to the database
    require("DBConnect.php");
    $conn = db_connect();

    class ReturnObject {
        public $success = false;
        public $ClassList = 0;
    }
    class Classes {
    	public $classTitle = "";
    	public $studentList = "";
    }
    class Student {
    	public $FirstName = "";
    	public $LastName = "";
    	public $WheatonId = "";
    }

    $instructorId = 4;
    $classIdArray = [];
    $studentArray = [];
    $classArray = [];

    // Getting all the classes the professor teaches
    if ($result = $conn->query("
                SELECT Id 
                FROM Class
				INNER JOIN Teaches on Class.Id = Teaches.ClassId
				WHERE Teaches.UserId = '$instructorId'")) 
    {
       while ($row = mysqli_fetch_assoc($result)) {
            array_push($classIdArray, $row['Id']);
       } 
    }

    if(is_array($classIdArray)) {

    	$returnObj = new ReturnObject();

        foreach($classIdArray as $classId) {

            if ($result = $conn->query("
            	SELECT User.FirstName, User.LastName, User.WheatonId, Class.ClassNumber
				FROM EnrolledIn
				INNER JOIN User on User.Id = EnrolledIn.UserId
				INNER JOIN Class on Class.Id = EnrolledIn.ClassId
				WHERE Class.Id = '$classId';
                ")) 
            {
            	$newClass = new Classes();

                while ($row = mysqli_fetch_assoc($result)) {
                	$newStudent = new Student();
                	$newStudent->FirstName = $row['FirstName'];
                	$newStudent->LastName = $row['LastName'];
                	$newStudent->WheatonId = $row['WheatonId'];
                    $newClass->classNumber = $row['ClassNumber'];
                    $returnObj->rowCount = $returnObj->rowCount + 1;
                    array_push($studentArray, $newStudent);  
                }
                
                $newClass->studentList = $studentArray;
                array_push($classArray, $newClass);
            }  
    	}
       $returnObj->success = true;
    }
    echo json_encode($returnObj);
?>