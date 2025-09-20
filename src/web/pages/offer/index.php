<?php
	require_once "theme/button.php";
	require_once "helpers/getString.php";
?>

<div
	class="
		gradient
		pb-12
		pt-10
		md:pb-16
	"
>
	<div class="container">
		<div
			class="
				flex flex-col
				gap-y-6
				items-start
				lg:flex-row lg:gap-x-4
				xl:gap-x-6
			"
		>
			<div
				class="
					flex flex-col
					gap-y-5
					grow
				"
			>
				<div
					class="
						flex
						items-center
						justify-between
					"
				>
					<h1
						class="
							font-bold
							text-2xl text-black
							tracking-tight
							sm:text-4xl
						"
					>
						<?= $offer->title; ?>
					</h1>

					<a
						class="
							bg-primary
							font-semibold
							h-8
							inline-flex
							gap-x-1.5
							hover:brightness-95
							leading-8
							min-h-8
							px-2.5
							ring ring-primary
							rounded-2xl
							text-sm	text-white
							transition-shadow
							whitespace-nowrap
							focus:outline-none focus:ring-2 focus:ring-primary
						"
						href="/offers"
					>
						<i><</i>
						<span>
							<?= getString("backButton"); ?>
						</span>
					</a>
				</div>

				<?php
					include_once "gallery.php";

					if (count(json_decode($offer->features)) > 0) {
						include_once "features.php";
					}
					
					if (strlen($offer->description) > 0) {
						include_once "description.php";
					}
					
					include_once "details.php";
				?>
			</div>

			<div
				class="
					box
					min-w-80
					w-full
					lg:sticky lg:top-40 lg:min-w-[420px] lg:w-auto
				"
			>
				<h3
					class="
						font-bold
						mb-4
						text-center text-xl
						tracking-tight
						sm:text-2xl
						xl:mb-6
					"
				>
					<?= getString("consultButton"); ?>
				</h3>

				<?php include_once "blocks/forms/contact.php"; ?>
			</div>
		</div>
	</div>
</div>