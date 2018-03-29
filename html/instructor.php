<?php

	/*
	EXAMPLE JSON RETURNED OBJECT	

	"success": true,
	"ClassList": [{
		"ClassNumber": "Comp 401",
		"studentList": [{
			"FirstName": "Daniel",
			"LastName": "Barber",
			"WheatonId": "w00328546"
		}, {
			"FirstName": "Jordan",
			"LastName": "Hamilton",
			"WheatonId": "w00320000"
		}, {
			"FirstName": "Kathleen",
			"LastName": "Orechia",
			"WheatonId": "w00320000"
		}]
	}]
	*/

    error_reporting(E_ALL); 
    ini_set('display_errors',1);

    // Connect to the database
    require("DBConnect.php");
    $conn = db_connect();

    class ReturnObject {
        public $success = false;
        public $ClassList = "";
    }
    class Classes {
        public $ClassId;
    	public $ClassNumber;
    	public $studentList =" ";
    }
    class Student {
        public $StudentId;
    	public $FirstName = "";
    	public $LastName = "";
    	public $WheatonId = "";
    }

    $instructorId = 4;//$_GET["instructorId"];

    // Arrays to be used in the return JSON object
    $classIdArray = [];
    $studentArray = [];
    $classArray = [];

    // Getting all the classes the professor teaches (by ClassIds)
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

    // If the Professor actually has classes
    if(is_array($classIdArray)) {

    	$returnObj = new ReturnObject();

        foreach($classIdArray as $classId) {
        	// Querying all students for each class in instructors list
            if ($result = $conn->query("
            	SELECT User.Id as StudentId, User.FirstName, User.LastName, User.WheatonId, Class.Id as ClassId Class.ClassNumber
				FROM EnrolledIn
				INNER JOIN User on User.Id = EnrolledIn.UserId
				INNER JOIN Class on Class.Id = EnrolledIn.ClassId
				WHERE Class.Id = '$classId';
                ")) 
            {
            	$newClass = new Classes();
                $studentArray = []; 

            	// Getting each students info for the current class
                while ($row = mysqli_fetch_assoc($result)) {

                	$newStudent = new Student();
                    $newStudent->StudentId = $row['StudentId']
                	$newStudent->FirstName = $row['FirstName'];
                	$newStudent->LastName  = $row['LastName'];
                	$newStudent->WheatonId = $row['WheatonId'];
                    if (!isset($newClass->ClassNumber)) {
                        $newClass->ClassNumber = $row['ClassNumber'];
                        $newClass->ClassId = $row['ClassId']
                    }

                    array_push($studentArray, $newStudent);  
                }
                
                $newClass->studentList = $studentArray;
                array_push($classArray, $newClass);
            }  
    	}

       $returnObj->ClassList = $classArray;
       $returnObj->success = true;
    }

    echo json_encode($returnObj);
?>