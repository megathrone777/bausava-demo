<?php
	$packages = json_decode($service->packages, false);
	$packagesTitle = $service->packagesTitle;
?>

<div class="mb-4">
	<h2
		class="
			font-bold
			mb-5
			text-xl
		"
	>
		<?= $packagesTitle; ?>
	</h2>

	<div
		class="
			grid
			gap-6
			mb-2
			md:grid-cols-3
		"
	>
		<?php foreach ($packages as $index => $package): ?>
			<div
				class="
					bg-white
					p-6
					rounded-2xl
					shadow-sm
					<?= $package->featured ? "ring-2 ring-stone-900" : "ring-1 ring-stone-200"; ?>
				"
			>
				<h3
					class="
						font-semibold
						text-black
						uppercase
					"
				>
					<?= $package->badge; ?>
				</h3>

				<?php if (strlen($package->label) > 0): ?>
					<p
						class="
							mt-2
							text-primary text-sm
						"
					>
						<?= $package->label; ?>
					</p>
				<?php endif; ?>

				<div
					class="
						mt-4
						text-2xl
						font-extrabold
						text-black
					"
				>
					<?= $package->value; ?>
				</div>

				<p class="text-xs text-primary">
					<?= $package->text; ?>
				</p>
			</div>
		<?php endforeach; ?>
	</div>

	<p class="text-xs text-primary">
		Ceny jsou orientační bez DPH; přesná nabídka po prohlídce a technickém auditu.
	</p>
</div>