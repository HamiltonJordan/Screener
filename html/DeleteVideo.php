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
	echo "Video Deleted: "+$videoId+"\n";

	if($videoId != '') {
		//$query0 = "SELECT URL FROM Video WHERE Id = '$videoId';";
		$query0 = $conn->query("SELECT URL FROM Video WHERE Id = '$videoId';");
		if ($row = mysqli_fetch_assoc($query0)){
			$url = $row['URL'];
		}
		if(unlink($url)){
			echo "succ";
		}

		/*
		//$query1 = mysqli_real_escape_string($conn, $videoId);
		$query1 = "DELETE FROM Video WHERE Id = '$videoId';";
		$query2 = "DELETE FROM ClassVideo WHERE VideoId = '$videoId';";
		//mysqli_query($conn, $query);
		if (mysqli_query($conn, $query1) && mysqli_query($conn, $query2))
		{	
			$returnObj->rowCount = 1;
			$returnObj->success = true;
			echo "Delete Successful";
		}
		else
		{
			echo "Delete Failed...";
		}
		*/
	}
	echo json_encode($returnObj);
?>