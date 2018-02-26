 <?php
$servername = "localhost";
$username = "root";
$password = "jthklo123";
$dbname = 'websitedb';

echo "Start videotest.php";
class Video {
  public $Title = "";
  public $URL = "";
}

class ReturnObject {
  public $success = false;
  public $videos = "";
  public $error = "";
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
$sql = "SELECT * FROM Video";
$result = $conn->query($sql);


$videoArray = [];

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$video = new Video();
    	$video->Title = $row["Title"];
     	$video->URL = $row["URL"];
	array_push($videoArray, $video);
    }
    if (count($videoArray) > 0) {
 	$returnObj = new ReturnObject();
    	$returnObj->success = True;
    	$returnObj->vidoes = $videoArray;
    	echo json_encode($returnObj);
    }
    else {
    	$returnObj = new ReturnObject();
    	$returnObj->success = False;
    	$returnObj->error = "Videos found in database, but fetch/push failed";
    	echo json_encode($returnObj);
    }
} 
else {
    $returnObj = new ReturnObject();
    $returnObj->success = False;
    $returnObj->error = "No videos found in database";
    echo json_encode($returnObj);
}
$conn->close();
?>
