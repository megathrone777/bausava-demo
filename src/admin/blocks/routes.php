<div class="col-10 pt-3">
	<?php
		switch ($pathname) {
			case "/admin":
				include_once "pages/index.php";
				break;
			case "/admin/menu":
				include_once "pages/menu.php";
				break;
			case "/admin/advantages":
				include_once "pages/advantages.php";
				break;
			case "/admin/calculate":
				include_once "pages/calculate.php";
				break;
			case "/admin/calculator":
				include_once "pages/calculator.php";
				break;
			case "/admin/houses":
				include_once "pages/houses.php";
				break;
			case "/admin/offers":
				include_once "pages/offers.php";
				break;
			case "/admin/projects":
				include_once "pages/projects.php";
				break;
			case "/admin/hero":
				include_once "pages/hero.php";
				break;
			case "/admin/services":
				include_once "pages/services.php";
				break;
			case "/admin/how-it-works":
				include_once "pages/how.php";
				break;
			case "/admin/reviews":
				include_once "pages/reviews.php";
				break;
			case "/admin/strings":
				include_once "pages/strings.php";
				break;
			case "/admin/terms":
				include_once "pages/terms.php";
				break;
			case "/admin/contacts":
				include_once "pages/contacts.php";
				break;
			case "/admin/settings":
				include_once "pages/settings.php";
				break;
			default:
				include_once "pages/404.php";
				break;
		}
	?>
</div>