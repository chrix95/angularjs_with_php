<?php

  require 'connect.php'; // requires the connect file

  // SQL statement for querying the database
  $get = $conn->prepare("SELECT * FROM category");
  $get->execute();
  // gets the response and sends as json
  $result = $get->fetchALL(PDO::FETCH_OBJ);
  echo json_encode($result);

 ?>
