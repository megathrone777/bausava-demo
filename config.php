<?php
  require_once $_SERVER["DOCUMENT_ROOT"] . "/lib/rb-mysql.php";

  if (file_exists($_SERVER["DOCUMENT_ROOT"] . "/.env")) {
    $vars = parse_ini_file($_SERVER["DOCUMENT_ROOT"] . "/.env");
    
    foreach ($vars as $key => $var) {
      $_ENV[$key] = $var;
    };
  }

  R::setup(
    "mysql:host=" . $_ENV["DB_HOST"] . ";dbname=" . $_ENV["DB_NAME"] . ";port=" . $_ENV["DB_PORT"],
    $_ENV["DB_USERNAME"],
    $_ENV["DB_PASSWORD"]
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