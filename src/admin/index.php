<?php
	set_include_path("src/admin/");
	include_once "blocks/head.php";
	session_start();
?>

<body class="antialiased font-display">
	<?php if (!isset($_SESSION["user_logged_in"])): ?>
		<?php include_once "pages/login.php"; ?>
	<?php else: ?>
		<?php include_once "blocks/header.php"; ?>

		<main>
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="col-2 h-100">
            <?php include_once "blocks/sidebar.php"; ?>
          </div>
			
					<?php include_once "blocks/routes.php"; ?>
				</div>
			</div>
		</main>
	<?php endif; ?>
</body>