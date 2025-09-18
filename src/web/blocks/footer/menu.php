<?php
	require_once "helpers/getString.php";

	$menuItems = R::findAll("menu");
?>

<p class="font-semibold mb-1">
	<?= getString("quickLinks"); ?>
</p>

<div>
	<?php if (count($menuItems) > 0): ?>
		<ul class="flex flex-col gap-y-0.5">
			<?php foreach ($menuItems as $menuItem): ?>
				<li>
					<a
						class="text-sm"
						href="<?= $menuItem->url; ?>"
					>
						<?= $menuItem->title; ?>
					</a>
				</li>
			<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</div>