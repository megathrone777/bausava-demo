<?php
	require_once "theme/icon.php";
	require_once "theme/spinner.php";

	$categoryItems = R::findAll("projects_categories");
?>

<div
	class="
		gap-4
		grid
		mb-10
		sm:grid-cols-2
		lg:grid-cols-4
	"
>
	<?php foreach($categoryItems as $index => $categoryItem): ?>
		<div
			class="
				bg-white
				border border-secondary
				cursor-pointer
				flex flex-col
				group
				items-stretch
				overflow-hidden
				relative
				rounded-3xl
				shadow
			"
			data-js-click="loadCategoryProjects(
				'<?= $categoryItem->id; ?>',
				'<?= $categoryItem->slug; ?>',
				'<?= $categoryItem->title; ?>',
			)"
		>
			<div
				class="
					h-22
					min-h-22
					overflow-hidden
					relative
				"
			>
				<img
					alt="<?= $categoryItem->title; ?>"
					class="
						h-full
						object-cover
						group-hover:scale-105
						opacity-50
						transition-transform
						w-full
					"
					data-js-class="{
						'opacity-100': categoryId === '<?= $categoryItem->id; ?>'
					}"
					src="<?= $categoryItem->image; ?>"
				>

				<template data-js-if="isLoading && categoryId === '<?= $categoryItem->id; ?>'">
					<span
						class="
							absolute
							bg-white/50
							bottom-0
							flex
							h-full
							items-center
							justify-center
							left-0
							right-0
							top-0
							w-full
							z-10
						"
					>
						<?= spinner("h-9 w-9"); ?>
					</span>
				</template>
			</div>

			<div
				class="
					flex
					gap-x-2
					grow
					items-center
					justify-between
					px-3
					py-2
				"
			>
				<p
					class="
						font-semibold
						leading-5
						select-none
					"
				>
					<?= $categoryItem->title; ?>
				</p>

				<i
					class="
						block
						h-6
						min-w-6
						w-6
						transition-transform
						group-hover:scale-105
					"
				>
					<?php icon("link"); ?>
				</i>
			</div>
		</div>
	<?php endforeach; ?>
</div>