<?php
    error_reporting(E_ALL); 
    ini_set('display_errors',1);

    // Connect to the database
    require("DBConnect.php");
    $conn = db_connect();

    class ReturnObject {
        public $success = false;
        public $rowCount = 0;
    }


    $userId = 1;//$_GET["UserId"];
    $classId = 9;
    $returnObj = new ReturnObject();

    if($userId != '') {
        $query1 = mysqli_real_escape_string($conn, $userId);
        $query ="DELETE FROM EnrolledIn WHERE EnrolledIn.UserId = '$userId' AND EnrolledIn.ClassId = '$classId'";
        mysqli_query($conn, $query);

      	if (mysqli_query($conn, $query))
  		{	
  			$returnObj->rowCount = 1;
  			$returnObj->success = true;
  		}
  	}
    echo json_encode($returnObj);
?>