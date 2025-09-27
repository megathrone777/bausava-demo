<?php
	require_once "theme/button.php";
	require_once "theme/icon.php";
	require_once "helpers/getString.php";
	
	$advantages = R::findAll("advantages");
?>

<div class="py-12 md:py-16">
	<div
		class="
			container
			grid
			lg:grid-cols-3
			gap-6
			items-stretch
		"
	>
		<div
			class="
				bg-primary
				p-8
				rounded-3xl
				text-white
				lg:col-span-2
			"
		>
			<h3 class="font-bold text-2xl">
				<?= getString("advantagesTitle"); ?>
			</h3>

			<ul
				class="
					mb-6
					mt-4
					space-y-3
					text-sm
				"
			>
				<?php foreach($advantages as $advantage): ?>
					<li class="flex gap-2.5">
						<i class="h-5 inline-block">
							<?php	icon("check"); ?>
						</i>
						
						<?= $advantage->title; ?>
					</li>
				<?php endforeach; ?>
			</ul>

			<?=
				button(
					href: "#contacts",
					template: "secondary",
					text: getString("appointmentButton"),
				);
			?>
		</div>

		<div
			class="
				bg-white
				border border-secondary
				p-4
				rounded-3xl
				shadow
				xl:p-6
			"
		>
			<h3	class="font-bold text-xl">
				<?= getString("calculateTitle"); ?>
			</h3>

			<p
				class="
					opacity-90
					text-sm
					mt-1
				"
			>
				<?= getString("calculateText"); ?>
			</p>

			<?php include_once("blocks/forms/evaluation.php"); ?>
		</div>
	</div>
</div>