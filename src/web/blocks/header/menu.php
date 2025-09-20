<?php
	$menuItems = [];

	foreach (R::findAll("menu") as $menuItem) {
		if ($menuItem->section_id) {
			$section = R::findOne("sections", "id = " . $menuItem->section_id);

			if (!empty($section)) {
				$newMenuItem = $menuItem;
				$newMenuItem["position"] = $section->position;
				$menuItems[] = $newMenuItem;
				continue;
 			}
		}

		$menuItems[] = $menuItem;
	}

	usort($menuItems, function($a, $b) {
		return $a["position"] <=> $b["position"];
	});
?>

<div
	class="
		absolute
		flex
		gap-x-6
		gradient
		h-[calc(100dvh-64px)]
		items-center
		justify-center
		p-4
		left-0
		opacity-0
		right-0
		transition-[opacity,transform,visibility]
		top-16
		[transform:translate3d(0,-20px,0)]
		lg:h-auto
		lg:visible lg:opacity-100 lg:pointer-events-auto lg:transition-none
		lg:static lg:bg-none lg:backdrop-blur-none lg:p-0 lg:transform-none
	"
	data-js-class="
		isOpened
			? 'opacity-100 visible [transform:translate3d(0,0,0)] pointer-events-auto'
			: 'opacity-0 invisible [transform:translate3d(0,-20px,0)] pointer-events-none lg:pointer-events-auto lg:opacity-100 lg:visible lg:transform-none'
	"
	data-js-trap.noscroll="isOpened"
>
	<?php if (count($menuItems) > 0): ?>
		<ul
			class="
				flex flex-col
				gap-x-6
				items-center
				gap-y-6
				lg:flex-row lg:w-auto
			"
		>
			<?php foreach ($menuItems as $menuItem): ?>
				<li>
					<a
						class="
							font-semibold
							text-xl text-black
							hover:opacity-70
							lg:font-normal lg:text-base lg:text-inherit
						"
						data-js-click="closeMenu"
						href="<?= $menuItem->url !== '/' ? '/' . $menuItem->url : '/' ?>"
					>
						<?= $menuItem->title; ?>
					</a>
				</li>
			<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</div>