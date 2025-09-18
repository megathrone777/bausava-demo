<?php
	function button(
		string $template,
		string $text,
		string $href = null,
		string $onClick = null,
		string $type = null
	) {
		$defaultClasses = "
			cursor-pointer
			font-semibold
			h-9
			leading-[34px]
			min-h-9
			px-2.5
			rounded-2xl
			text-sm
			transition-shadow
			whitespace-nowrap
			focus:outline-none focus:ring-2
			md:px-4 md:h-10 md:min-h-10 md:leading-[38px]
		";

		$templateClasses = $template == "primary"
			? "bg-primary hover:brightness-95 ring ring-primary text-white focus:ring-primary"
			: "bg-white/50 border border-primary ring text-black hover:bg-secondary";
		$click = $onClick ? "data-js-click=" . $onClick : "";

		if ($href) {
			return <<<HTML
				<a
					class="
						$defaultClasses
						$templateClasses
						inline-block
						no-underline
					"
					href="$href"
				>
					$text
				</a>
			HTML;
		}

		return <<<HTML
			<button
				class="
					$defaultClasses
					$templateClasses
				"
				type="$type"
				$click
			>
				$text
			</button>
		HTML;
	};
?>