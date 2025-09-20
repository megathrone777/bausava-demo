<?php
	function input(
		string $name,
		string $placeholder,
		string $type,
		string $label = null,
		string $min = null,
		string $id = null,
		string $model = null,
		bool $required = false,
	) {
		$isRequired = $required ? "required" : "";
		$placeholderText = $required ? $placeholder . " *" : $placeholder;
		$inputId = $id ? "id=" . $id : "";
		$model = $model ? "data-js-model=" . $model : "";
		$inputMin = isset($min) && $min > -1 ? "min=" . $min : "";

		$labelHtml = "";

		if (isset($label) && strlen($label) > 0) {
			$star = $required ? " *" : "";

			$labelHtml = "
				<label
					class='
						cursor-pointer
						font-semibold
						inline-block
						mb-2
						text-xs
					'
					for=" . $id . "
				>" . $label . $star . "</label>";
		}
		
		return <<<HTML
			<div>
				$labelHtml

				<input
					autocomplete="on"
					class="
						bg-transparent
						block
						border-none
						font-medium
						h-[39px]
						px-3
						placeholder:text-gray placeholder:font-medium
						rounded-xl
						ring ring-secondary
						text-black text-base
						w-full
						transition-shadow
						focus:ring-2 focus:ring-primary
					"
					$inputId
					$inputMin
					$model
					maxlength="50"
					name="$name"
					placeholder="$placeholderText"
					$isRequired
					type="$type"
				>
			</div>
		HTML;
	};
?>