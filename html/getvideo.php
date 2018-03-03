<?php
    $video=$_GET["video"];
  

    session_start();


    if($userN=="already"){
    $video=$_SESSION['savedv'];
}
    if ($userN!="already"){
    $_SESSION['savedv']=$video;
}
    

    echo json_encode($video); 
}

?>