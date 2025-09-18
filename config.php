<?php
  require_once $_SERVER["DOCUMENT_ROOT"] . "/lib/rb-mysql.php";

	$env = parse_ini_file(".env");
  $dbHost = $env["DB_HOST"];
  $dbName = $env["DB_NAME"];
  $dbUser = $env["DB_USER"];
  $dbPassword = $env["DB_PASSWORD"];

  R::setup("mysql:host=db.fr-pari1.bengt.wasmernet.com;dbname=bausava", "c4618ff67a6880005d5ad3f72fd0", "068cc461-8ff6-7e0e-8000-b3263cbaf1bd");
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