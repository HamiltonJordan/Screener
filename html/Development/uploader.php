<?php
	$tmp_file = $_FILES['image']['tmp_name'];
	$filename = $_FILES['image']['name'];


	// Directory for uploads should be as follows:
	//		-UploadFolder/TeacherUserName/ClassCode/$filename
	// This will ensure that we keep all files organized on server while uploading.
	move_uploaded_file($tmp_file, 'upload_folder/'. $filename);
/*
	$name=$_POST['name'];
	$duedate=$_POST['duedate'];
	$runtime=$_POST['runtime'];

 // Connect to the database
    require("DBConnect.php");
   $conn = db_connect();

	$sql = "INSERT INTO Video(Title,URL,Active)VALUES ('$name', 'upload_folder/$filename',1);";

if ($conn->query($sql) === TRUE) {
$sql = "SELECT id FROM Video WHERE Title=$name and URL= upload_folder/$filename";
$result = $conn->query($sql);
$value = mysql_fetch_object($result);
$videoid =$value->id;
foreach($_POST['checkopt'] as $selected){
$sql = "SELECT id FROM Class  WHERE classnumber=$selected";
$result = $conn->query($sql);
$value = mysql_fetch_object($result);
$classid =$value->id;
$sql=" INSERT INTO ClassVideo(ClassId,VideoId) VALUES('$classid','videoid');";
if($conn->query($sql)===TRUE){
echo "completed";

}
}
}
*/?>

