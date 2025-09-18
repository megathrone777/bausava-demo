<?php
	require_once "theme/icon.php";

	$categories = R::findAll("projects_categories");
?>

<div
	class="
		gap-4
		grid
		mt-8
		sm:grid-cols-2
		lg:grid-cols-4
	"
>
	<?php foreach($categories as $category): ?>
		<div
			class="
				bg-white
				border border-secondary
				flex flex-col
				group
				items-stretch
				overflow-hidden
				relative
				rounded-3xl
				shadow
			"
		>
			<div
				class="
					h-44
					min-h-44
					overflow-hidden
				"
			>
				<img
					alt="<?= $category->title; ?>"
					class="
						h-full
						object-cover
						w-full
						group-hover:scale-105
						transition-transform
					"
					src="<?= $category->image; ?>"
				>
			</div>

			<div
				class="
					flex
					gap-x-2
					grow
					items-center
					justify-between
					p-3
				"
			>
				<p class="font-semibold leading-5">
					<?= $category->title; ?>
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

			<a
				class="
					absolute
					block
					bottom-0
					h-full
					left-0
					right-0
					top-0
					w-full
					z-10
				"
				href="/projects/<?= $category->slug; ?>"
			></a>
		</div>
	<?php endforeach; ?>
</div>