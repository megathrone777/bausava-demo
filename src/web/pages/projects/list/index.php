<?php
	require_once "theme/button.php";
	require_once "theme/spinner.php";
	require_once "helpers/getString.php";

	$projects = R::findAll("projects", "WHERE category = " . $category->id . " ORDER BY id DESC LIMIT 8");
	$projectsTotal = R::count("projects", "WHERE category = " . $category->id);
?>

<div
	class="contents"
	data-js-data="{
		categoryId: '<?= $category->id; ?>',
		categoryTitle: '<?= $category->title; ?>',
		isLoading: false,
		initialProjects: [],
		loadedProjects: [],
		loadedTotal: <?= count($projects); ?>,
		projectsTotal: <?= $projectsTotal ?>,

		async loadCategoryProjects(categoryId, categorySlug, categoryTitle) {
			if (this.categoryId === +categoryId) return
			this.categoryId = categoryId
			this.categoryTitle = categoryTitle
			this.isLoading = true

			try {
				const body = new FormData()

				body.append('category', categoryId)

				const response = await fetch('/src/web/helpers/loadCategoryProjects.php', {
					body,
					method: 'POST'
				})
				const data = await response.json()

				if (response.ok) {
					this.initialProjects = data.items
					this.projectsTotal = data.total
					this.loadedTotal = data.count
					history.replaceState(null, location.pathname, `/projects/${categorySlug}`)
				}
			} catch(error) {
				console.error('Cannot get projects list', error)
			} finally {
				this.isLoading = false
			}
		},

		async loadMoreProjects() {
			this.isLoading = true

			try {
				const body = new FormData()

				body.append('category', this.categoryId)
				body.append('limit', 8)
				body.append('offset', this.loadedTotal)

				const response = await fetch('/src/web/helpers/loadMoreProjects.php', {
					body,
					method: 'POST'
				})
				const data = await response.json()

				if (response.ok) {
					this.loadedProjects = [...this.loadedProjects, ...[data.items]]
					this.loadedTotal = this.loadedTotal + data.count
				}
			} catch(error) {
				console.error('Cannot get projects list', error)
			} finally {
				this.isLoading = false
			}
		}
	}"
>
	<?php include_once "categories.php"; ?>

	<h2
		class="
			font-bold
			mb-4
			text-2xl text-black
			tracking-tight
			sm:text-3xl
		"
		data-js-text="categoryTitle"
	>
		<?= $category->title; ?>
	</h2>

	<div
		class="
			gap-4
			grid
			mb-6
			min-h-96
			sm:grid-cols-2
			lg:grid-cols-4
		"
	>
		<?php
			include_once "initialItems.php";
			include_once "virtualItems.php";
		?>
	</div>

	<template data-js-if="loadedTotal < +projectsTotal">
		<div
			class="
				flex
				justify-center
				min-h-9
				md:min-h-10
			"
		>
			<template data-js-if="!isLoading">
				<?=
					button(
						onClick: "loadMoreProjects",
						template: "primary",
						text: getString("loadMore"),
						type: "button"
					);
				?>
			</template>

			<template data-js-if="isLoading">
				<?= spinner("h-9 w-9 md:h-10 md:w-10"); ?>
			</template>
		</div>
	</template>
</div>