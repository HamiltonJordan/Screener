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



if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $show= " id: ". $row["id"]. " - Type: ". $row["usertype"].$show;
    }

} else {
    $show= "0 results";
}
echo $show;

?>
