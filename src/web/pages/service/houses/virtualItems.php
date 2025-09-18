<?php require_once "helpers/getString.php"; ?>

<template
	data-js-key="`loaded-group-${groupIndex}`"
	data-js-for="(loadedGroup, groupIndex) in houses"
>
	<div class="contents">
		<template
			data-js-key="`house-${house.id}-${groupIndex}`"
			data-js-for="(house, houseIndex) in loadedGroup"
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
					animationDelay: `0.${houseIndex}s`
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
						data-js-alt="house.title"
						data-js-src="house.image"
					>

					<template data-js-if="house.type && house.type.length > 0">
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
							data-js-text="house.type"
						></p>
					</template>
				</div>

				<div class="grow p-5">
					<p
						class="font-semibold mb-1"
						data-js-html="house.title"
					></p>

					<p
						class="
							font-bold
							mb-3
							text-lg
							text-primary
						"
						data-js-text="house.price"
					></p>

					<ul
						class="
							opacity-90
							space-y-1
							text-sm
						"
					>
						<template
							data-js-key="`house-badge-${house.id}-${badgeIndex}`"
							data-js-for="(badge, badgeIndex) in house.badges"
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
						data-js-href="`/house/${house.slug}`"
					>
						<?= getString("detailButton"); ?>
					</a>
				</div>
			</div>
		</template>
	</div>
</template>