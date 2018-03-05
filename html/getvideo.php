<?php
	session_start();
	$video=$_GET["video"];
	$title=$_GET["titlev"]; 


	if($video=="already"){
		$video=$_SESSION['saved'];
		$title=$_SESSION['savedt'];
	}
	if ($video!="already"){
		$_SESSION['saved']=$video;
		$_SESSION['savedt']=$title;
	}  
	$obj1 = (object)array("title"=> $title,"video"=> $video);
	echo  json_encode($obj1); 


?>
