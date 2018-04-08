<?php
 session_start();
if (isset ($_SESSION['auth']))x{
echo json_encode($_SESSION['auth']);
}else{
echo json_encode(FALSE);
}
?>
