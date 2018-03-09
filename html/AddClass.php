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

    $classObject = $_GET["classObject"];

    $classData = json_decode($classObject);

    $studentIds = $classData->studentList;

    $classId = 69;

    $counter = 0;

    $returnObj = new ReturnObject();
    if(is_array($studentIds)) {
        foreach($studentIds as $Id) {

            $result = mysql_query("SELECT Id FROM Users WHERE WheatonId='$Id' LIMIT 1");
            $row = mysql_fetch_assoc($result);
            echo $row['Id'];


            // $query1 = mysqli_real_escape_string($conn, $Id);
            // $query ="INSERT INTO EnrolledIn (UserId, ClassId) VALUES ( '". $Id."','".$classId."' )";
            // mysqli_query($conn, $query);
            // $returnObj->rowCount = $returnObj->rowCount + 1;
        }
        $returnObj->success = true;
    }

    echo json_encode($returnObj);

?>
