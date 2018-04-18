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


	$videoId = $_GET["videoId"];
	$returnObj = new ReturnObject();

	if($videoId != '') {
		$query1 = mysqli_real_escape_string($conn, $videoId);
		$query = "
			DELETE FROM Video WHERE Id = '$videoId';
			DELETE FROM ClassVideo WHERE VideoId = '$videoId';
		";
		if (mysqli_query($conn, $query))
		{	
			$returnObj->rowCount = 1;
			$returnObj->success = true;
			echo "Delete Successful";
		}
		else
		{
			echo "Delete Failed...";
		}
	}
	echo json_encode($returnObj);
?>