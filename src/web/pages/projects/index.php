<?php
	require_once "theme/spinner.php";
	require_once "helpers/getString.php";
?>

<div class="gradient pt-10">
	<div class="pb-12	md:pb-16">
		<div class="container">
			<h1
				class="
					font-bold
					mb-4
					text-2xl text-black
					tracking-tight
					sm:text-4xl
				"
			>
				<?= getString("projectsTitle"); ?>
			</h1>

			<?php include_once "list/index.php"; ?>
		</div>
	</div>

	<div class="bg-white">
		<?php include_once "blocks/contacts.php"; ?>
	</div>
</div>