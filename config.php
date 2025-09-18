<?php
  require_once $_SERVER["DOCUMENT_ROOT"] . "/lib/rb-mysql.php";

	$env = parse_ini_file(".env");
  $dbHost = $env["DB_HOST"];
  $dbName = $env["DB_NAME"];
  $dbUser = $env["DB_USER"];
  $dbPassword = $env["DB_PASSWORD"];

  R::setup("mysql:host=" . $dbHost . ";dbname=" . $dbName, $dbUser, $dbPassword);
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