<?php

move_uploaded_file($_FILES["file"]["tmp_name"],"/upload_folder/" . $_FILES["file"]["name"]) or die ("Failed to upload");

?>
