<?php require_once "helpers/getString.php"; ?>

<template
	data-js-key="`loaded-group-${groupIndex}`"
	data-js-for="(loadedGroup, groupIndex) in offers"
>
	<div class="contents">
		<template
			data-js-key="`offer-${offer.id}-${groupIndex}`"
			data-js-for="(offer, offerIndex) in loadedGroup"
		>
			<div
				class="
					animate-fade-in-down
					bg-white
					border border-secondary
					flex flex-col
					group
					items-stretch
					opacity-0
					overflow-hidden
					rounded-3xl
					shadow
				"
				data-js-style="{
					animationDelay: `0.${offerIndex}s`
				}"
			>
				<div
					class="
						h-44
						overflow-hidden
						relative
					"
				>
					<img
						class="
							h-full
							object-cover
							w-full
							group-hover:scale-105
							transition-transform
						"
						data-js-alt="offer.title"
						data-js-src="offer.image"
					>

					<p
						class="
							absolute
							bg-white/95
							border border-secondary
							font-semibold
							left-3
							px-2
							py-1
							rounded-full
							text-xs
							top-3
						"
						data-js-text="offer.type"
					></p>
				</div>

				<div class="grow p-5">
					<p
						class="font-semibold mb-1"
						data-js-html="offer.title"
					></p>

					<p
						class="
							font-bold
							mb-3
							text-lg
							text-primary
						"
						data-js-text="offer.price"
					></p>

					<ul
						class="
							opacity-90
							space-y-1
							text-sm
						"
					>
						<template
							data-js-key="`offer-badge-${offer.id}-${badgeIndex}`"
							data-js-for="(badge, badgeIndex) in offer.badges"
						>
							<li
								class="
									flex
									gap-2
									items-center
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

								<span data-js-html="badge"></span>
							</li>
						</template>
					</ul>
				</div>

				<div
					class="
						flex
						gap-2
						pb-5
						px-5
					"
				>
					<a
						class="
							bg-white/50
							border border-primary
							font-semibold
							focus:outline-none focus:ring-2
							h-9
							hover:bg-secondary
							leading-[34px]
							min-h-9
							px-2.5
							ring
							rounded-2xl
							text-black text-sm
							transition-shadow
							whitespace-nowrap
							md:px-4 md:h-10 md:min-h-10 md:leading-[38px]
						"
						data-js-href="`/offer/${offer.slug}`"
					>
						<?= getString("detailButton"); ?>
					</a>
				</div>
			</div>
		</template>
	</div>
</template>