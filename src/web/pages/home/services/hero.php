<?php
	require_once "helpers/getString.php";

	$servicesTitle = getString("servicesTitle");
	$servicesText = getString("servicesText");
?>

<h2 class="box-title">
	<?= $servicesTitle; ?>
</h2>

<p
	class="
		mt-3
		max-w-3xl
		opacity-80
	"
>
	<?= $servicesText; ?>
</p>