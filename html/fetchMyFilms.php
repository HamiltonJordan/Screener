<?php
	//This code does not work yet!
	error_reporting(E_ALL); 
	ini_set('display_errors',1);

//working with sessions
session_start();
if ($_SESSION['auth'] == true) {
    // Connect to the database
    require("DBConnect.php");
    $conn = db_connect();	
	$userId=$_SESSION['id'];
	//$userId=$_GET["userId"];
	$return_arr = array();

	if ($result = $conn->query("
		SELECT Class.ClassName, Video.Title, Video.URL FROM User
		INNER JOIN EnrolledIn ON
		User.Id = EnrolledIn.UserId
		INNER JOIN ClassVideo ON
		EnrolledIn.ClassId = ClassVideo.ClassId
		INNER JOIN Video ON
		ClassVideo.VideoId = Video.Id
		INNER JOIN Class ON
		EnrolledIn.ClassId = Class.Id
		WHERE User.Id = '$userId'
		ORDER BY Class.ClassName;
		")) 
	{

		while ($row = mysqli_fetch_assoc($result)) {
			$row_data['ClassName'] = $row['ClassName'];
			$row_data['Title'] = $row['Title'];
			$row_data['URL'] = $row['URL'];
			array_push($return_arr, $row_data);
		}
		/* free result set */
		$result->close();
	}

	mysqli_close($conn);
	echo json_encode($return_arr);
}
?>
