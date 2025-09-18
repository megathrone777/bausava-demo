<?php
	function spinner($classes = "") {
		$layerId = uniqid();
		$gradientId = uniqid();

		return <<<HTML
			<svg class="animate-spin $classes" viewBox="0 0 25 25">
				<defs>
					<clipPath id="$layerId">
						<rect
							height="25"
							width="25"
							x="0"
							y="12.5"
						></rect>
					</clipPath>

					<linearGradient id="$gradientId">
						<stop offset="0" stop-color="red"></stop>
						<stop
							offset="100%"
							stop-color="red"
							stop-opacity="0"
						></stop>
					</linearGradient>
				</defs>

				<circle
					cx="12.5"
					cy="12.5"
					fill="none"
					opacity="1"
					r="10"
					stroke="white"
					stroke-width="4"
				></circle>
				
				<circle
					clip-path="url(#$layerId)"
					cx="12.5"
					cy="12.5"
					fill="none"
					r="10"
					stroke="url(#$gradientId)"
					stroke-width="4"
				></circle>
			</svg>
		HTML;
	};
?>


