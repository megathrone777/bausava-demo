<?php
	require_once "helpers/getString.php";

	function product(
		array $badges,
		string $image,
		string $title,
		string $price,
		string $type,
		string $url,
	) {
		$badgesList = implode("", array_map(function($badge) {
			return '
				<li
					class="
						flex
						gap-2
						items-center
						min-h-5
					"
				>	
					<i
						class="
							bg-primary
							h-2
							inline-block
							rounded-full
							w-2
						"
					></i><span>' . $badge .	'</span></li>';
		}, $badges));
		$btnText = getString("detailButton");

		$typeBadge = isset($type) && strlen($type) > 0 ? '<p
			class="
				absolute
				bg-white/95
				border border-secondary
				font-semibold
				left-3
				px-2
				py-1
				rounded-full
				text-xs
				top-3
			"
		>' . $type . '</p>' : '';

		return <<<HTML
			<div
				class="
					bg-white
					border border-secondary
					flex flex-col
					group
					items-stretch
					overflow-hidden
					rounded-3xl
					shadow
				"
			>
				<div
					class="
						h-44
						overflow-hidden
						relative
					"
				>
					<img
						alt="$title"
						class="
							h-full
							object-cover
							w-full
							group-hover:scale-105
							transition-transform
						"
						src="$image"
					>

					$typeBadge
				</div>

				<div class="grow p-5">
					<p class="font-semibold mb-1">
						$title
					</p>

					<p
						class="
							font-bold
							mb-3
							text-lg
							text-primary
						"
					>
						$price
					</p>

					<ul
						class="
							opacity-90
							space-y-1
							text-sm
						"
					>
						$badgesList
					</ul>
				</div>

				<div
					class="
						flex
						gap-2
						pb-5
						px-5
					"
				>
					<a
						class="
							bg-white/50
							border border-primary
							font-semibold
							focus:outline-none focus:ring-2
							h-9
							hover:bg-secondary
							leading-[34px]
							min-h-9
							px-2.5
							ring
							rounded-2xl
							text-black text-sm
							transition-shadow
							whitespace-nowrap
							md:px-4 md:h-10 md:min-h-10 md:leading-[38px]
						"
						href="$url"
					>
						$btnText
					</a>
				</div>
			</div>
		HTML;
	};
?>