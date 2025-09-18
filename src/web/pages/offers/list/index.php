<?php
	require_once "theme/button.php";
	require_once "theme/spinner.php";
	require_once "helpers/getString.php";

	$limit = 8;
	$offers = R::findAll("offers", "ORDER BY id DESC LIMIT " . $limit);
	$offersTotal = R::count("offers");
?>

<div
	class="contents"
	data-js-data="{
		isLoading: false,
		offers: [],
		offersLoaded: 0,

		async loadMoreOffers() {
			const body = new FormData()
			
			this.isLoading = true
			body.append('limit', +'<?= $limit; ?>')
			body.append('offset', this.offers.length + +'<?= $limit; ?>')
			
			try {
				const response = await fetch('/src/web/helpers/loadMoreOffers.php', {
					body,
					method: 'POST',
				})
				const data = await response.json()
				
				this.offersLoaded = this.offersLoaded + data.count
				this.offers = [...this.offers, ...[data.items]]
			} catch (error) {
				console.error('Cannot get offers: ', error)
			} finally {
				this.isLoading = false
			}
		}
	}"
>
	<div
		class="
			gap-4
			grid
			mb-6
			sm:grid-cols-2
			lg:grid-cols-4
		"
	>
		<?php
			include_once "initialItems.php";
			include_once "virtualItems.php";
		?>
	</div>

	<?php if ($offersTotal > $limit): ?>
		<template data-js-if="offersLoaded < +'<?= $offersTotal - $limit; ?>'">
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
								onClick: "loadMoreOffers",
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