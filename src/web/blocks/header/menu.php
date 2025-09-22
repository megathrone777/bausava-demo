<?php
	require_once "helpers/getString.php";

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
		overflow-y-auto
		right-0
		transition-[opacity,transform,visibility]
		top-16
		[transform:translate3d(0,-20px,0)]
		z-20
		lg:h-auto
		lg:visible lg:opacity-100 lg:transition-none lg:overflow-y-visible
		lg:static lg:bg-none lg:backdrop-blur-none lg:p-0 lg:transform-none
	"
	data-js-class="
		isOpened
			? 'opacity-100 visible [transform:translate3d(0,0,0)]'
			: 'opacity-0 invisible [transform:translate3d(0,-20px,0)] lg:opacity-100 lg:visible lg:transform-none'
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
				<?php if ($menuItem->submenu): ?>
					<li
						class="group lg:relative"
						data-js-data="{
							subMenuIsOpened: false,

							toggleSubMenu() {
								this.subMenuIsOpened = !this.subMenuIsOpened
							}
						}"
					>
						<span
							class="
								cursor-default
								font-semibold
								text-black text-xl
								group-hover:opacity-70
								lg:font-normal lg:text-base

								<?php	if ($menuItem->submenu && str_contains($_SERVER['REQUEST_URI'], "/" . $menuItem->submenu)): ?>
									opacity-70
								<?php endif; ?>
							"
							data-js-click="subMenuIsOpened = true"
						>
							<?= $menuItem->title; ?>
						</span>

						<?php if ($menuItem->submenu): ?>
							<?php	$subMenuItems = R::findAll($menuItem->submenu); ?>

							<ul
								class="
									bottom-0
									absolute
									flex flex-col
									gap-y-5
									gradient
									h-[calc(100dvh-64px)]
									items-center
									justify-center
									left-0
									max-w-full
									overflow-hidden
									pb-6
									right-0
									text-center text-white
									transition-transform
									top-0
									w-full
									z-50
									[transform:translate3d(-100%,0,0)]
									lg:border lg:border-secondary
									lg:-translate-x-1/2 lg:absolute lg:overflow-visible
									lg:group-hover:animate-fade-in-down lg:group-hover:pointer-events-auto
									lg:left-1/2 lg:min-w-55 lg:gap-y-3.5 lg:transform-none
									lg:opacity-0 lg:pointer-events-none lg:rounded-xl lg:transition-none
									lg:top-[calc(100%+30px)] lg:z-[51] lg:p-4 lg:text-black
									lg:bottom-auto lg:h-auto lg:w-fit lg:max-w-none
									lg:before:content-[''] lg:before:bottom-full lg:before:min-h-8
									lg:before:absolute lg:before:w-full
								"
								data-js-class="
									subMenuIsOpened
										? '[transform:translate3d(0,0,0)]'
										: '[transform:translate3d(-100%,0,0)]'
								"
							>
								<li
									class="
										absolute
										cursor-default
										font-semibold
										left-4
										text-lg text-primary
										top-10
										lg:hidden
									"
									data-js-click="toggleSubMenu"
								>
									&lt; <?= getString("backButton"); ?>
								</li>

								<?php foreach ($subMenuItems as $subMenuItem): ?>
									<li>
										<a
											class="
												block
												font-medium
												text-xl text-black
												transition-colors
												hover:text-primary
												lg:text-base lg:whitespace-nowrap
												<?php if ('/' . str_replace('_', '-', $menuItem->submenu) . '/' . $subMenuItem->slug == $_SERVER['REQUEST_URI']): ?>
												text-primary
												<?php endif; ?>
											"
											href="/services/<?= $subMenuItem->slug; ?>"
										>
											<?= $subMenuItem->name; ?>
										</a>
									</li>
								<?php endforeach; ?>
							</ul>
						<?php endif; ?>
					</li>
				<?php else: ?>
					<li>
						<a
							class="
								cursor-pointer
								font-semibold
								text-black text-xl
								hover:opacity-70
								lg:font-normal lg:text-base
							"
							href="<?= $menuItem->url !== '/' ? '/' . $menuItem->url : '/' ?>"
							data-js-click="closeMenu"
						>
							<?= $menuItem->title; ?>
						</a>
					</li>
				<?php endif; ?>
			<?php endforeach; ?>
		</ul>
	<?php endif; ?>
</div>