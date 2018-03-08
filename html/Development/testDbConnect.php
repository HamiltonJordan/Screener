<?php

    require("DBConnect.php");

    // Connect to the database
$conn = db_connect();

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

    $sql = "SELECT *  FROM Video";
    $result = $conn->query($sql);

    echo $result;
?>