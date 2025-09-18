<?php	require_once "theme/icon.php"; ?>

<div
	class="box py-3"
	data-js-data="{
		expandedId: null,

		handleSectionClick({ currentTarget }) {
			const id = `${currentTarget.id}`

			if (this.expandedId === id) {
				this.expandedId = null
				return
			}

			this.expandedId = id
		},
	}"
	id="faqs"
>
	<?php if (isset($title) && strlen($title) > 0): ?>
		<div
			class="
				border-b border-gray-300
				flex
				items-center
				min-h-12
			"
		>
			<h3 class="font-bold text-xl">
				<?= $title; ?>
			</h3>
		</div>
	<?php endif; ?>
	
	<?php foreach($sections as $index => $item): ?>
		<div
			class="
				align-center
				flex flex-col
				<?php if($index + 1 < count($sections)): ?>
				border-b border-gray-300
				<?php endif; ?>
			"
		>
			<div
				class="
					cursor-pointer
					flex
					items-center
					justify-between
					pr-1
					py-4
					select-none
				"
				data-js-click="handleSectionClick"
				id="<?= $item['id']; ?>"
			>
				<h3
					class="
						font-bold
						inline-block
						pr-2
						text-base text-black
					"
				>
					<?= $item["title"]; ?>
				</h3>

				<template data-js-if="expandedId === '<?= $item['id']; ?>'">
					<i
						class="
							block
							h-3
							min-w-3
							w-3
							text-primary
						"
					>
						<?php icon("decrement"); ?>
					</i>
				</template>

				<template data-js-if="expandedId !== '<?= $item['id']; ?>'">
					<i
						class="
							block
							h-3
							min-w-3
							w-3
							text-primary
						"
					>
						<?php icon("increment"); ?>
					</i>
				</template>
			</div>

			<div
				class="
					grid
					transition-[grid-template-rows]
					will-change-contents
				"
				data-js-class="
					expandedId === '<?= $item['id']; ?>'
						? 'grid-rows-[1fr]'
						: 'grid-rows-[0fr]'
				"
				data-js-cloak
			>
				<div class="overflow-hidden">
					<div
						class="
							editor
							font-normal
							pb-[18px]
						"
					>
						<?= $item['text']; ?>
					</div>
				</div>
			</div>
		</div>
	<?php endforeach; ?>
</div>