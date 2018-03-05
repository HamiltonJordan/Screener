<?php
	//This code does not work yet!
	error_reporting(E_ALL); 
	ini_set('display_errors',1);

	$servername = "127.0.0.1";
	$username = "root";
	$password = "jthklo123";
	$dbname = 'websitedb';

	$classID=$_GET["classID"];

	class ReturnObject {
		public $success = false;
		public $loginCheck = false;
	}
	
	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	//Psuedo-Code
	$classID = $_SESSION($classID);

	$returnObj = new ReturnObject();
	if ($result = $conn->query("SELECT * FROM Video WHERE ClassID = '$classID'")) {
		while ($row = mysqli_fetch_assoc($result)) {
		}
	
		/* free result set */
		$result->close();
	}

	mysqli_close($conn);
	echo json_encode($returnObj);

?>