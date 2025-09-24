<?php
  require_once $_SERVER["DOCUMENT_ROOT"] . "/lib/rb-mysql.php";

  // if (file_exists($_SERVER["DOCUMENT_ROOT"] . "/.env")) {
  //   $_ENV = parse_ini_file($_SERVER["DOCUMENT_ROOT"] . "/.env");
  // }

  $_ENV["MAIL_HOST"] = "smtp.websupport.cz";
  $_ENV["MAIL_PORT"] = 465;

  R::setup(
    "mysql:host=" . "dbadmin.bausava.eu" . ";dbname=" . "okYuqdiS" . ";port=" . "3306",
    "newbs",
    'Qmo]~VWz$zIzXAK15[Lj'
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