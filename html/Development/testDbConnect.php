<?php

    $conn = include("DBConnect.php");

    $sql = "SELECT *  FROM Video";
    $result = $conn->query($sql);

    echo $result;
?>