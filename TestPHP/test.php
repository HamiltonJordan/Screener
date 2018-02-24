 <?php
$servername = "localhost";
$username = "root";
$password = "jthklo123";
$dbname = 'websitedb';

class User {
  public $Id = 0;
  public $FirstName = "";
  public $LastName = "";
  public $Active = 0;
}

class ReturnObject {
  public $success = false;
  public $users = "";
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM Student";
$result = $conn->query($sql);


$userArray = [];

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    	$user = new User();
    	$user->Id = $row["Id"];
     	$user->FirstName = $row["FirstName"];
 		$user->LastName = $row["LastName"];
		$user->Active = $row["Active"];
		array_push($userArray, $user);
    }
    if (count($userArray) > 0) {
    $returnObj = new ReturnObject();
    $returnObj->success = True;
    $returnObj->users = $userArray;
    echo json_encode($returnObj);
  }
  else {
    $returnObj = new ReturnObject();
    echo json_encode($returnObj);
  }
} 
else {
    $returnObj = new ReturnObject();
    echo json_encode($returnObj);
}
$conn->close();
?>
