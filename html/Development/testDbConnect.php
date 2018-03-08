<?php

    $conn = include("DBConnect.php");

    if ($result = $conn->query("
		SELECT Video.Title, Video.URL FROM User
		INNER JOIN EnrolledIn ON
		User.Id = EnrolledIn.UserId
		INNER JOIN ClassVideo ON
		EnrolledIn.ClassId = ClassVideo.ClassId
		INNER JOIN Video ON
		ClassVideo.VideoId = Video.Id
		WHERE User.Id = '$userId';
		")) 
	{
		while ($row = mysqli_fetch_assoc($result)) {
			$row_array['Title'] = $row['Title'];
			$row_array['URL'] = $row['URL'];
			array_push($return_arr, $row_array);
			/*
			echo "Title: ";
			echo $row['Title'];
			echo ", Location: ";
			echo $row['URL'];
			echo ".......";
			*/
		}
	
		/* free result set */
		$result->close();
	}

	mysqli_close($conn);
	echo json_encode($return_arr);
	//$returnObj = new ReturnObject();
	//echo json_encode($returnObj);

?>