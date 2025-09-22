<?php
	function select(
		string $id,
		string $label,
		string $name,
		array $options,
		string $model = null,
		string $placeholder = null,
		bool $required = false,
	) {
		$isRequired = $required ? "required" : "";
		$labelText = $required ? $label . " *" : $label;
		$model = $model ? "data-js-model=" . $model : "";
		$placeholderText = $placeholder ? "<option value=''>" . $placeholder . "</option>" : "";
		
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
					$labelText
				</label>

				<select
					class="
						border-0
						font-medium
						h-10
						leading-none
						px-3
						ring ring-secondary
						rounded-xl
						transition-shadow
						w-full
						focus:ring-2 focus:ring-primary
					"
					$isRequired
					$model
					id="$id"
					name="$name"
				>
					$placeholderText
					$selectOptions
				</select>
			</div>
		HTML;
	};
?>