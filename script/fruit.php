<?php

  require 'connect.php'; // requires the connect file

  // SQL statement for querying the database
  $fruit = 'Fruit';
  $get = $conn->prepare("SELECT * FROM `category` WHERE `group` =:group");
  $get->bindParam(":group", $fruit);
  $get->execute();
  // gets the response and sends as json
  $result = $get->fetchALL(PDO::FETCH_OBJ);
  echo json_encode($result);

 ?>
