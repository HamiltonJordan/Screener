<?php
    error_reporting(E_ALL); 
    ini_set('display_errors',1);

    $servername = "127.0.0.1";
    $username = "root";
    $password = "jthklo123";
    $dbname = 'websitedb';

    class ReturnObject {
        public $success = false;
    }

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $classObject = $_GET["classObject"];

    $classData = json_decode($classObject);

    $studentIds = $classData->studentList;

    $classId = 69;

    if(is_array($studentIds)) {
        foreach($studentIds as $Id) {
            echo $Id;
            //$query1 = mysql_real_escape_string($Id);
            //$query ="INSERT INTO EnrolledIn (ClassId, StudentId) VALUES ( '". $classId."','".$Id."' )";
            //mysqli_query($conn, $query);
        }
    }

   


?>
