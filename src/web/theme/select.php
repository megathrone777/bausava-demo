<?php
	function select(
		string $id,
		string $label,
		string $name,
		array $options,
		string $model = null
	) {
		$model = $model ? "data-js-model=" . $model : "";
		
		$selectOptions = implode("", array_map(function($option) {
			return "<option>" . $option . "</option>";
		}, $options));

		return <<<HTML
			<div>
				<label
					class="
						cursor-pointer
						font-semibold
						inline-block
						mb-2
						text-xs
					"
					for="$id"
				>
					$label
				</label>

				<select
					class="
						border-0
						font-medium
						h-[39px]
						leading-[39px]
						px-3
						ring ring-secondary
						rounded-xl
						transition-shadow
						w-full
						focus:ring-2 focus:ring-primary
					"
					$model
					id="$id"
					name="$name"
				>
					$selectOptions
				</select>
			</div>
		HTML;
	};
?>