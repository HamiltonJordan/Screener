<?php
	$tmp_file = $_FILES['image']['tmp_name'];
	$filename = $_FILES['image']['name'];

	// Directory for uploads should be as follows:
	//		-UploadFolder/TeacherUserName/ClassCode/$filename
	// This will ensure that we keep all files organized on server while uploading.
	move_uploaded_file($tmp_file, 'upload_folder/'. $filename);
?>