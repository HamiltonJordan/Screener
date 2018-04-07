<?php
	$tmp_file = $_FILES['image']['tmp_name'];
	$filename = $_FILES['image']['name'];


	// Directory for uploads should be as follows:
	//		-UploadFolder/TeacherUserName/ClassCode/$filename
	// This will ensure that we keep all files organized on server while uploading.
	$t=time();
	print $t;
	move_uploaded_file($tmp_file,'video/'.$filename.$t);
	$name=$_POST['name'];
	$duedate=$_POST['duedate'];
	$runtime=$_POST['runtime'];ø

 // Connect to the database
	//require("DBConnect.php");
	$conn = db_connect();
	$sql = "INSERT INTO Video(Title,URL,Active)VALUES ('$name', 'video/$filename', 1);";

	if ($conn->query($sql) === TRUE) {
		$sql = "SELECT id FROM Video WHERE Title='$name' and URL= 'video/$filename$t'";
		$result = $conn->query($sql);
		$videoid=0;
		$classid=0;
		if ($row = $result->fetch_assoc()){
			$videoid= $row['id'];
			echo $videoid;
			foreach($_POST['classopt'] as $selected){
				$classid=(int)$selected;
				$sql=" INSERT INTO ClassVideo(ClassId,VideoId) VALUES($classid,$videoid);";
				if($conn->query($sql)){
					echo "success";
				}
			}
		}
	}

?>

