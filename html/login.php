<?php
    error_reporting(E_ALL); 
    ini_set('display_errors',1);

    $servername = "127.0.0.1";
    $username = "root";
    $password = "jthklo123";
    $dbname = 'websitedb';

    class ReturnObject {
        public $success = false;
        public $loginCheck = false;
    }

    $email = $_GET["email"];
    $pword = $_GET["password"];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $returnObj = new ReturnObject();
    if ($result = $conn->query("SELECT * FROM Student WHERE Email = '$email' AND Password = '$pword'")) {
        while ($row = mysqli_fetch_assoc($result)) {
            $returnObj->loginCheck = true;
            $returnObj->success = true;
        }
    
        /* free result set */
        $result->close();
    }

    mysqli_close($conn);
    echo json_encode($returnObj);

?>