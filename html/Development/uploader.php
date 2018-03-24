<?php
	$tmp_file = $_FILES['image']['tmp_name'];
	$filename = $_FILES['image']['name'];


	// Directory for uploads should be as follows:
	//		-UploadFolder/TeacherUserName/ClassCode/$filename
	// This will ensure that we keep all files organized on server while uploading.
	move_uploaded_file($tmp_file, 'upload_folder/'. $filename);

	$name=$_POST['name'];
	$duedate=$_POST['duedate'];
	$runtime=$_POST['runtime'];

 // Connect to the database
    require("DBConnect.php");
    $conn = db_connect();

	$sql = "INSERT INTO Video(Title,URL)
	VALUES ('upload_folder/$filename', '$name')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
?>
