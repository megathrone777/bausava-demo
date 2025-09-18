<?php
	function input(
		string $name,
		string $placeholder,
		string $type,
		string $id = null,
		string $model = null,
		bool $required = false,
	) {
		$isRequired = $required ? "required" : ""; 
		$placeholderText = $required ? $placeholder . " *" : $placeholder;
		$inputId = $id ? "id=" . $id : "";
		$model = $model ? "data-js-model=" . $model : "";

		return <<<HTML
			<div>
				<input
					autocomplete="off"
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