<?php
	require_once "theme/spinner.php";

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
			min-h-9
			px-2.5
			rounded-2xl
			text-sm
			transition-shadow
			whitespace-nowrap
			focus:outline-none focus:ring-2
			md:px-4 md:h-10 md:min-h-10
		";

		$templateClasses = "";
		
		if ($template == "secondary") {
			$templateClasses = "
				bg-white/50
				border border-primary
				ring
				text-black
				hover:bg-secondary
			";
		} elseif ($template == "success") {
			$templateClasses = "
				bg-green
				border border-green
				cursor-default
				gap-x-1.5
				inline-flex
				items-center
				justify-center
				pointer-events-none
				ring ring-green
				text-white
			";
		} elseif ($template == "loading") {
			$templateClasses = "
				bg-primary
				border border-transparent
				hover:brightness-95
				ring ring-primary
				text-white
				focus:ring-primary
			";
		} else {
			$templateClasses = "
				bg-primary
				border border-transparent
				hover:brightness-95
				ring ring-primary
				text-white
				focus:ring-primary
			";
		}

		$click = $onClick ? "data-js-click=" . $onClick : "";
		$textContent = $template == "success"
			? '
				<i
					class="
						h-6
						inline-block
						w-6
					"
				>
					<svg viewBox="0 0 24 24" fill="currentColor">
						<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365
							9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1
							0-1.22-.872l-3.236 4.528-1.57-1.57a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75
							0 0 0 1.14-.094l3.756-5.262Z" clipRule="evenodd"
						></path>
					</svg>
				</i>
				<span class="align-middle">' . $text . '</span>'
			: $text;

		if ($template == "loading") {
			$spinnerIcon = spinner("h-7 inline-block w-7");
			return <<<HTML
				<button
					class="
						$defaultClasses
						$templateClasses
					"
					type="$type"
				>
					$spinnerIcon
				</button>
			HTML;
		}

		if ($href) {
			return <<<HTML
				<a
					class="
						$defaultClasses
						$templateClasses
						inline-block
						leading-9
						no-underline
						md:leading-10
					"
					href="$href"
				>
					$textContent
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
				$textContent
			</button>
		HTML;
	};
?>