<?php
	require_once "theme/button.php";
	require_once "theme/icon.php";

	$services = R::findAll("services");
?>

<div
	class="
		gap-6
		grid
		mt-8
		sm:grid-cols-2
		lg:grid-cols-4
	"
>
	<?php foreach($services as $service): ?>
		<div class="box flex flex-col">
			<div class="text-4xl">
				<?= $service->icon; ?>
			</div>

			<p
				class="
					flex-1
					font-semibold
					mt-4
					text-lg
				"
			>
				<?= $service->name; ?>
			</p>

			<ul
				class="
					flex-1
					mb-5
					mt-3
					opacity-80
					space-y-1
					text-sm
				"
			>
				<?php
					$features = json_decode($service->features, FALSE, 512, JSON_OBJECT_AS_ARRAY);

					foreach($features as $feature):
				?>
					<li
						class="
							flex
							gap-2
							items-center
						"
					>
						<i
							class="
								inline-block
								h-5
								text-primary
								w-5
							"
						>
							<?php icon("check"); ?>
						</i>

						<?= $feature->title; ?>
					</li>
				<?php endforeach; ?>
			</ul>

			<?=
				button(
					href: "/services/" . $service->slug,
					template: "secondary",
					text: $service->button,
				);
			?>
		</div>
	<?php endforeach; ?>
</div>