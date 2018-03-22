<?php
	//This code does not work yet!
	error_reporting(E_ALL); 
	ini_set('display_errors',1);

    require("DBConnect.php");
    $conn = db_connect();

	$userId=$_GET["userId"];
	$return_arr = array();

	if ($result = $conn->query("
		SELECT User.FirstName, User.LastName, Class.Id, Class.ClassName, Class.ClassNumber 
		FROM Class
		INNER JOIN Teaches on Class.Id = Teaches.ClassId
		INNER JOIN User ON Teaches.UserId = User.Id")) 
	{

		while ($row = mysqli_fetch_assoc($result)) {
			$row_data['FirstName']   = $row['FirstName'];
			$row_data['LastName']    = $row['LastName'];
			$row_data['ClassId']     = $row['Id'];
			$row_data['ClassName'] 	 = $row['ClassName'];
			$row_data['ClassNumber'] = $row['ClassNumber'];
			
			array_push($return_arr, $row_data);
		}
		/* free result set */
		$result->close();
	}

	mysqli_close($conn);
	echo json_encode($return_arr);
//}
?>
