<?php
    $video=$_GET["video"];
  

    session_start();


    $_SESSION['video']=$video;
    

    echo json_encode($video); 
}

?>