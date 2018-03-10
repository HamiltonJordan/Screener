<?php
    //This code does not work yet!
	error_reporting(E_ALL); 
	ini_set('display_errors',1);

    // Connect to the database
    require("DBConnect.php");
    $conn = db_connect();	
    
    class ReturnObject {
        public $success = false;
        public $classes = "";
    }
    class ClassObject {
        public $FirstName = "";
        public $LastName = "";
        public $Title = "";
        public $Number = "";
    }

	$userId=$_GET["userId"];
	$class_array = array();

	if ($result = $conn->query("
        SELECT User.FirstName, User.LastName, Class.ClassName, ClassNumber 
        FROM Class
        INNER JOIN Teaches on Class.Id = Teaches.ClassId
        INNER JOIN User on Teaches.UserId = User.Id
        WHERE User.Faculty = '$userId'")) 
	{
		while ($row = mysqli_fetch_assoc($result)) {
            $newClassList =new ClassObject();
            $newClassList['FirstName'] = $row['FirstName'];
            $newClassList['LastName'] = $row['LastName'];
			$newClassList['Title'] = $row['ClassName'];
			$newClassList['Number'] = $row['ClassNumber'];
			array_push($class_array, $newClassList);
			
        }
        
        if (count($class_array) > 0) {
            $returnObj = new ReturnObject();
            $returnObj->success = True;
            $returnObj->classes = $class_array;
            echo json_encode($returnObj);
        }
        else {
            $returnObj = new ReturnObject();
            $returnObj->success = False;
            $returnObj->error = "Videos found in database, but fetch/push failed";
            echo json_encode($returnObj);
        }
    } 
    else {
        $returnObj = new ReturnObject();
        $returnObj->success = False;
        $returnObj->error = "No classes found in database";
        echo json_encode($returnObj);
    }
    $conn->close();
    $result->close();
		/* free result set */
	


	mysqli_close($conn);
	echo json_encode($return_arr);
	//$returnObj = new ReturnObject();
	//echo json_encode($returnObj);


?>