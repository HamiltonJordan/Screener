<?php
    $video=$_GET["video"]; 

    session_start();


    if($video=="already"){
    $video=$_SESSION['savedv'];
}
    if ($video!="already"){
    $_SESSION['savedv']=$video;
}
    

    echo json_encode($video); 


?>
