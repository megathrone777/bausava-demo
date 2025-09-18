<?php
	require_once "helpers/getString.php";
	require_once "theme/spinner.php";

	$limit = 4;
	$houses = R::findAll("houses", "ORDER BY id DESC LIMIT " . $limit);
	$housesTotal = R::count("houses");
?>

<div
	class="mb-8"
	data-js-data="{
		isLoading: false,
		houses: [],
		housesLoaded: 0,

		async loadMoreHouses() {
			const body = new FormData()
			
			this.isLoading = true
			body.append('limit', +'<?= $limit; ?>')
			body.append('offset', this.houses.length + +'<?= $limit; ?>')
			
			try {
				const response = await fetch('/src/web/helpers/loadMoreHouses.php', {
					body,
					method: 'POST',
				})
				const data = await response.json()
				
				this.housesLoaded = this.housesLoaded + data.count
				this.houses = [...this.houses, ...[data.items]]
			} catch (error) {
				console.error('Cannot get houses: ', error)
			} finally {
				this.isLoading = false
			}
		}
	}"
>
	<h2
		class="
			font-bold
			mb-5
			text-xl
		"
	>
		<?= getString("housesTitle"); ?>
	</h2>
	
	<div
		class="
			gap-6
			grid
			mb-6
			md:grid-cols-4
		"
	>
		<?php
			include_once "initialItems.php";
			include_once "virtualItems.php";
		?>
	</div>

	<?php if ($housesTotal > $limit): ?>
		<template data-js-if="housesLoaded < +'<?= $housesTotal - $limit; ?>'">
			<div
				class="
					flex
					justify-center
					min-h-9
					md:min-h-10
				"
			>
				<template data-js-if="!isLoading">
					<div class="text-center">
						<?=
							button(
								onClick: "loadMoreHouses",
								template: "primary",
								text: getString("loadMore"),
								type: "button"
							);
						?>
					</div>
				</template>

				<template data-js-if="isLoading">
					<?= spinner("h-9 w-9 md:h-10 md:w-10"); ?>
				</template>
			</div>
		</template>
	<?php endif; ?>
</div>