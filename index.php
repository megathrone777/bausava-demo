<?php
	require_once "./config.php";

	$pathname = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
?>
<!doctype html>
<html lang="cs">
	<?php
		if (str_contains($pathname, "/admin")) {
   session_start();
			include_once "admin/index.php";
		} else {
			include_once "web/index.php";
		}
	?>
</html>