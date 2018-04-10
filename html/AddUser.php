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
    $wheatonId = $_GET["wheatonId"];
    $classId   = $_GET["classId"];
   
    $returnObj = new ReturnObject();
    
    if ($result = $conn->query("
                SELECT Id
                From User
                WHERE User.WheatonId = '$wheatonId'
                Limit 1;
                ")) 
    {
    	// Adding userId to enrolled in table.
        while ($row = mysqli_fetch_assoc($result)) {
        	$Id = $row['Id'];
            $query2 = mysqli_real_escape_string($conn, $Id);
            $query1 = mysqli_real_escape_string($conn, $classId);
            $query ="INSERT INTO EnrolledIn (UserId, ClassId) VALUES ( '". $Id."','".$classId."' )";
            if (mysqli_query($conn,$query)){
                $returnObj->success = true;
                $returnObj->rowCount = $returnObj->rowCount + 1; 
            }
                             
        }
    }

    echo json_encode($returnObj);
?>
