<?php
	error_reporting(E_ALL); 
	ini_set('display_errors',1);

//working with sessions
session_start();
if ($_SESSION['auth'] == true) {
    // Connect to the database
    require("DBConnect.php");
    $conn = db_connect();	
	//$teacherId=$_SESSION['id'];
	//DELETE ME
	$teacherId=$_SESSION['id'];
	//$userId=$_GET["userId"];
	$return_arr = array();

	if ($result = $conn->query("
		SELECT Class.ClassName, Video.Title, Video.URL FROM User
		INNER JOIN Teaches ON
		User.Id = Teaches.UserId
		INNER JOIN ClassVideo ON
		Teaches.ClassId = ClassVideo.ClassId
		INNER JOIN Video ON
		ClassVideo.VideoId = Video.Id
		INNER JOIN Class ON
		Teaches.ClassId = Class.Id
		WHERE User.Id = '$teacherId'
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
