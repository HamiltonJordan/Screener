<?php
$username = "root";
$password = "jthklo123";
$servername = "localhost"; 
$conn = new mysqli($servername, $username, $password,"websitedb");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
echo "Connected successfully";

$sql = "SELECT *  FROM Video";
$result = $conn->query($sql);

?>
