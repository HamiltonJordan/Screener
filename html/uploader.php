<?php
 error_log("\nfirst\n", 3, "/home/screener/log/php.log");

	$tmp_file = $_FILES['image']['tmp_name'];
	$filename = $_FILES['image']['name'];


	// Directory for uploads should be as follows:
	//		-UploadFolder/TeacherUserName/ClassCode/$filename
	// This will ensure that we keep all files organized on server while uploading.
	$t=time();
	$target_address = 'video/'.$t.$filename;

	if(move_uploaded_file($tmp_file,$target_address)){
		error_log("successful file upload!", 3, "/home/screener/log/php.log");
	}
	else {
		error_log("failed upload", 3, "/home/screener/log/php.log");
	}

	$name=$_POST['name'];
	$duedate=$_POST['duedate'];
	echo $duedate;
	$runtime=$_POST['runtime'];

 // Connect to the database
	require("DBConnect.php");
	$conn = db_connect();
	
	$sql = "INSERT INTO Video(Title,URL,Active)VALUES ('$name', '$target_address', 1);";
 
	if (mysqli_query($conn,$sql) == TRUE) {
		$sql = "SELECT id FROM Video WHERE URL= '$target_address';";
		$result = $conn->query($sql);
			if ($row = $result->fetch_assoc()) {
				$videoid= $row['id'];
				error_log(" "."$videoid"." ", 3, "/home/screener/log/php.log");
				foreach( $_POST["classopt"] as $selected){
					error_log("here3 ", 3, "/home/screener/log/php.log");
					error_log("$selected"." ", 3, "/home/screener/log/php.log");
					$classid=(int)$selected;
					$sql="INSERT INTO ClassVideo(ClassId,VideoId) VALUES($classid,$videoid)";
					if($conn->query($sql)!= FALSE){
					
						error_log("Success", 3, "/home/screener/log/php.log");
					}
				}
			}
		
	}
?>

