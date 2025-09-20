<?php
	require_once "helpers/getString.php";

	$reviews = R::findAll("reviews");
?>

<div
	class="
	bg-secondary
		py-12
		md:py-16
	"
>
	<div class="container">
		<h2 class="box-title">
			<?= getString("reviewsTitle"); ?>
		</h2>

		<div
			class="
				flex flex-col
				gap-y-4
				items-center
				mt-8
				md:flex-row md:justify-around md:gap-x-4
				xl:gap-x-12
			"
		>
			<?php foreach($reviews as $review): ?>
				<div
					class="
						bg-white
						border-2 border-white
						flex flex-col
						gap-y-3
						items-center
						max-w-96
						rounded-2xl
						p-4
						text-center
						w-full
						lg:p-8
						xl:p-10
					"
				>
					<div class="h-25 min-h-25">
						<img
							alt="<?= $review['title']; ?>"
							class="h-full"
							src="<?= $review['image']; ?>"
						>
					</div>

					<p class="font-semibold text-lg">
						<?= $review["title"]; ?>
					</p>

					<p class="opacity-90 text-sm">
						<?= $review["text"]; ?>
					</p>

					<p>
						<a
							class="font-semibold text-primary"
							href="<?= $review['url']; ?>"
						>
							<?= getString("more"); ?>
						</a>
					</p>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</div>