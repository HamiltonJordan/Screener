<?php
session_start();
  //  error_reporting(E_ALL); 
  //  ini_set('display_errors',1);

    // Connect to the database
    require("DBConnect.php");
	$conn = db_connect();

    class ReturnObject {
        public $success = false;
        public $loginCheck = false;
        public $id = 0;
	public $professor=0;
    }
    $email = $_GET["email"];
    $pword = $_GET["password"];

    $returnObj = new ReturnObject();
    if ($result = $conn->query("SELECT * FROM User WHERE Email = '$email' AND Password = '$pword'")) {
        while ($row = mysqli_fetch_assoc($result)) {
            $returnObj->loginCheck = true;
            $returnObj->success = true;
            $returnObj->id = $row["Id"];
	$returnObj->professor = $row["Falculty"];
	$_SESSION["professor"]=$row["Faculty"];
	$_SESSION["id"]=$row["Id"];
	   $_SESSION["auth"] = true;
        }
    
        /* free result set */
        $result->close();
    }

    mysqli_close($conn);
    echo json_encode($returnObj);

?>
