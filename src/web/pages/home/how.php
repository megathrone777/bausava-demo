<?php
	require_once "helpers/getString.php";

	$items = R::findAll("how_it_works");
?>

<div
	class="
		bg-secondary
		py-12
		md:py-16
	"
	id="how-it-works"
>
	<div class="container">
		<h2 class="box-title">
			<?= getString("howTitle"); ?>
		</h2>

		<div
			class="
				gap-4
				grid
				mt-8
				md:grid-cols-4
			"
		>
			<?php foreach($items as $index => $item): ?>
				<div
					class="
						bg-white
						border border-secondary
						p-6
						rounded-3xl
						shadow
					"
				>
					<div
						class="
							font-extrabold
							text-3xl
							text-primary
						"
					>
						0<?= $index; ?>
					</div>

					<div
						class="
							mt-3
							font-semibold
						"
					>
						<?= $item->title; ?>
					</div>
					
					<p
						class="
							mt-1
							opacity-80
							text-sm
						"
					>
						<?= $item->text; ?>
					</p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</div>