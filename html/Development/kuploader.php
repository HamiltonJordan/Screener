<?php
echo "hello";
error_reporting(-1);
 error_log(  "NNNNNNNNNNNNNNNNNNNhello\n",3,"/home/screener/log/php.log");
//       if ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_FILES['image'])){
	$tmp_file = $_FILES['image'][ 'tmp_name'];
 error_log( $_FILES['image']['error']."ERROR",3,"/home/screener/log/php.log");
	//$filename = $_FILES['image']['name'];
$uploaddir = "/home/screener/Screener/html/Development/upload_folder/";
      $uploadfile= $uploaddir . basename($_FILES["image"]["name"]);
  error_log( $_FILES['image']['error']."a",3,"/home/screener/log/php.log");
     if( move_uploaded_file($tmp_file,$uploadfile)){
error_log( "yesyes",3,"/home/screener/log/php.log");
 }else{
  error_log( $_FILES['image']['error']." After Move CommandT\n Tmp:".$tmp_file."Upload: \n".$uploadfile,3,"/home/screener/log/php.log");
  error_log(print_r(error_get_last()) ,3,"/home/screener/log/php.log");
}
//	$tmp_file = '/Users/kathleenorechia/test.txt';
//	$uploadfile= $uploaddir . 'test.txt';
	// Directory for uploads should be as follows:
	//		-UploadFolder/TeacherUserName/ClassCode/$filename
	// This will ensure that we keep all files organized on server while uploading.
//	if (move_uploaded_file($tmp_file, $uploadfile))
//	{ error_log("Oh no! We are out of FOOs!",3,"/home/screener/log/php.log");
//         error_log( $tmp_file." File uploaded. to ".$uploadfile,3,"/home/screener/log/php.log");	}
//	else{
//	  error_log( $tmp_file." File not  uploaded. to ".$uploadfile,1, "/home/screener/log/php.log");
//error_log("	 no!",3,"/home/screener/log/php.log");
//	}
//}
?>
