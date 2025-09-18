<?php
  require_once $_SERVER["DOCUMENT_ROOT"] . "/lib/rb-mysql.php";

  if (file_exists($_SERVER["DOCUMENT_ROOT"] . "/.env")) {
    $_ENV = parse_ini_file($_SERVER["DOCUMENT_ROOT"] . "/.env");
  }

  $dbHost = $_ENV["DB_HOST"];
  $dbName = $_ENV["DB_NAME"];
  $dbUser = $_ENV["DB_USERNAME"];
  $dbPassword = $_ENV["DB_PASSWORD"];
  $dbPort = $_ENV["DB_PORT"];

  R::setup(
    "mysql:host=" . $dbHost . ";dbname=" . $dbName . ";port=" . $dbPort,
    $dbUser,
    $dbPassword
  );

  $strings = R::findAll("strings");
  set_include_path("src/");

  if (isset($strings) && count($strings) > 0) {
    $stringsSet = array();

    foreach ($strings as $string) {
      $stringsSet[$string->name] = $string->value;
    }

    $GLOBALS["strings"] = $stringsSet;
  }
?>