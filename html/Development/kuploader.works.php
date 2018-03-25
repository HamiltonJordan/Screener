<?php
echo "hello";
error_reporting(-1);
$tmp_file = $_FILES['image'][ 'tmp_name'];
$uploaddir = "/home/screener/Screener/html/test_upload/"
 $uploadfile= $uploaddir . basename($_FILES["image"]["name"]);
   move_uploaded_file($tmp_file,$uploadfile);
?>
