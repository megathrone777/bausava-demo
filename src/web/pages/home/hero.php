<?php
	require_once "theme/button.php";

	$hero = R::findOne("hero", "id = 1");
?>

<div
	class="
		gradient
		py-12
		md:py-20
	"
>
	<div
		class="
			animate-fade-in-up
			[animation-duration:800ms]
			container
			flex flex-col
			gap-y-10
			justify-between
			items-center
			lg:flex-row lg:gap-x-10
		"
	>
		<div class="grow">
			<h1
				class="
					font-bold
					text-3xl
					sm:text-5xl
				"
			>
				<?= $hero->title; ?>
			</h1>

			<p
				class="
					mt-5
					opacity-80
					text-lg
				"
			>
				<?= $hero->text; ?>
			</p>
			
			<div
				class="
					flex flex-wrap
					gap-3
					mt-8
				"
			>
				<?=
					button(
						href: "#services",
						template: "primary",
						text: "Prohlédnout služby",
					);
				?>

				<?=
					button(
						href: "#calculator",
						template: "secondary",
						text: "Spočítat potenciál zhodnocení",
					);
				?>
			</div>

			<div class="mt-6 text-sm">
				<ul
					class="
						flex flex-wrap
						gap-4
					"
				>
					<?php foreach (json_decode($hero->badges) as $badge): ?>
						<li
							class="
								inline-flex
								items-center
								gap-x-2
							"
						>
							<i
								class="
									bg-primary
									h-2
									inline-block
									rounded-full
									w-2
								"
							></i>
							<?= $badge; ?>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>
		</div>

		<div
			class="
				grow
				px-4
				relative
				lg:px-0
			"
		>
			<div
				class="
					overflow-hidden
					rounded-3xl
					shadow-xl
					w-full
				"
			>
				<img
					alt="<?= $hero->title; ?>"
					class="aspect-[4/3] block"
					src="<?= $hero->image; ?>"
				>
			</div>
			
			<div
				class="
					-bottom-6
					left-2
					absolute
					bg-white
					border border-secondary
					p-4
					rounded-3xl
					shadow
					w-64
					lg:-left-6
				"
			>
				<p
					class="
						font-semibold
						text-sm
					"
				>
					<?= $hero->mediaTitle; ?>
				</p>

				<p
					class="
						text-2xl
						font-extrabold
						mt-1
						text-primary
					"
				>
					<?= $hero->mediaValue; ?>
				</p>

				<p
					class="
						mt-1
						opacity-80
						text-xs
					"
				>
					<?= $hero->mediaText; ?>
				</p>
			</div>
		</div>
	</div>
</div>