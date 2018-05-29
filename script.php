<?php

  include 'script/connect.php';

  $datapost = file_get_contents("php://input"); // gets the posted data from the angular script

  if (isset($datapost) || !empty($datapost)) { // checks if there is a value in the posted script

    $request = json_decode($datapost);
    $all = $request->all;
    $food = $request->food;
    $fruit = $request->fruit;

    if ($all) {
      $retrieve = $conn->prepare("SELECT * FROM category");
      $retrieve->execute();

      $result = $retrieve->fetchAll(PDO::FETCH_OBJ);
      echo json_encode($result);

    } elseif ($food) {
      $food = 'food';
      $retrieve = $conn->prepare("SELECT * FROM `category` WHERE `group`=:group");
      $retrieve->bindParam(":group", $food);
      $retrieve->execute();

      $result = $retrieve->fetchAll(PDO::FETCH_OBJ);
      echo json_encode($result);

    } elseif ($fruit) {
      $fruit = 'fruit';
      $retrieve = $conn->prepare("SELECT * FROM `category` WHERE `group`=:group");
      $retrieve->bindParam(":group", $fruit);
      $retrieve->execute();

      $result = $retrieve->fetchAll(PDO::FETCH_OBJ);
      echo json_encode($result);

    }

  }

 ?>
