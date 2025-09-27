<template data-js-if="!!loadedProjects.length">
	<div class="contents">
		<template
			data-js-key="`loaded-group-${groupIndex}`"
			data-js-for="(loadedGroup, groupIndex) in loadedProjects"
		>
			<div class="contents">
				<template
					data-js-key="`project-${project.id}-${groupIndex}`"
					data-js-for="(project, projectIndex) in loadedGroup"
				>
					<div
						class="
							animate-fade-in-down
							bg-white
							border border-secondary
							flex flex-col
							group
							items-stretch
							opacity-0
							overflow-hidden
							rounded-3xl
							shadow
						"
						data-js-style="{
							animationDelay: `0.${projectIndex}s`
						}"
					>
						<div
							class="
								h-44
								overflow-hidden
								relative
							"
						>
							<img
								class="
									h-full
									object-cover
									w-full
									group-hover:scale-105
									transition-transform
								"
								data-js-alt="project.title"
								data-js-src="project.image"
							>

							<template data-js-if="project.type && project.type.length > 0">
								<p
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
									data-js-text="project.type"
								></p>
							</template>
						</div>

						<div class="grow p-5">
							<p
								class="font-semibold mb-1"
								data-js-html="project.title"
							></p>

							<p
								class="
									font-bold
									mb-3
									text-lg
									text-primary
								"
								data-js-text="project.price"
							></p>

							<ul
								class="
									opacity-90
									space-y-1
									text-sm
								"
							>
								<template
									data-js-key="`project-badge-${project.id}-${badgeIndex}`"
									data-js-for="(badge, badgeIndex) in project.badges"
								>
									<template data-js-if="badge && badge.length > 0">
										<li
											class="
												flex
												gap-2
												items-center
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
											></i>

											<span data-js-html="badge"></span>
										</li>
									</template>
								</template>
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
								data-js-href="`/project/${project.slug}`"
							>
								<?= getString("detailButton"); ?>
							</a>
						</div>
					</div>
				</template>
			</div>
		</template>
	</div>
</template>