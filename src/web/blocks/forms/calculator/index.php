<?php
	$conditions = R::findAll("conditions");
	$locations = R::findAll("locations");
	$standards = R::findAll("standards");

	$conditionsFactors = array_reduce($conditions, function($carry, $condition) {
		$carry .= "'" . $condition->name . "':'" . $condition->factor . "',";

		return $carry;
	});
	$conditionsMap = "{" . $conditionsFactors . "}";

	$locationsFactors = array_reduce($locations, function($carry, $location) {
		$carry .= "'" . $location->name . "':'" . $location->factor . "',";

		return $carry;
	});
	$locationsMap = "{" . $locationsFactors . "}";

	$standardsFactors = array_reduce($standards, function($carry, $standard) {
		$carry .= "'" . $standard->name . "':'" . $standard->factor . "',";

		return $carry;
	});
	$standardsMap = "{" . $standardsFactors . "}";
?>

<div
	class="
		container
		gap-10
		grid
		items-start
		lg:grid-cols-2
	"
	data-js-data="{
		area: 60,
		condition: '<?= array_values($conditions)[0]['name']; ?>',
		location: 'Praha 10',
		standard: 'Standard',
		type: 'flat',

		formatCurrency(amount) {
			return amount.toLocaleString(
				'cs-CZ',
				{
					currency: 'CZK',
					maximumFractionDigits: 0,
					style: 'currency',
				}
			)
		},

		handleTypeClick({ currentTarget }) {
			this.type = currentTarget.value
		},

		getLocationData() {
			const factors = <?= $locationsMap; ?>

    	return {
				localityFactor: +factors[this.location] ?? 1.0,
				pricePerM2: this.type === 'house' ? 60000 : 90000,
			}
		},

		getConditionData() {
			return +<?= $conditionsMap; ?>[this.condition]
		},

		getStandardData() {
			return +<?= $standardsMap; ?>[this.standard]
		},
		
		getTotalPrice() {
			const { localityFactor, pricePerM2 } = this.getLocationData()
			const conditionFactor = this.getConditionData()
			const standardFactor = this.getStandardData()

			const raw = this.area * pricePerM2 * localityFactor * conditionFactor * standardFactor

    	return Math.round(raw / 1000) * 1000;
		}
	}"
>
	<?php include_once "form.php"; ?>
	<?php include_once "results.php"; ?>
</div>