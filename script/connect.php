<?php

  // declare variables neccessary for connection to database
  $host = 'localhost';
  $user = 'root';
  $password = '';
  $database = 'angularjs_php';
  // create the connection to datase using PDO
  $conn = new PDO("mysql:dbname=$database; host=$host", $user, $password);


 ?>
