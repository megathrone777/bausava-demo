<?php
	set_include_path("src/admin/");
	include_once "blocks/head.php";
?>

<body class="antialiased font-display">
	<?php if (!isset($_SESSION["user_logged_in"])): ?>
		<?php include_once "pages/login.php"; ?>
	<?php else: ?>
		<?php include_once "blocks/header.php"; ?>

		<main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-2">
            <?php include_once "blocks/sidebar.php"; ?>
          </div>
			
					<?php include_once "blocks/routes.php"; ?>
				</div>
			</div>
		</main>
	<?php endif; ?>
</body>