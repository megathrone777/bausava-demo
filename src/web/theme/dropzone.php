<?php require_once "button.php"; ?>

<div
	class="
		flex flex-col
		gap-y-2
	"
	data-js-data="{
		dragOver: false,

		handleDrop(event) {
			this.dragOver = false
			$refs['file-input'].files = event.dataTransfer.files
			this.updateFileList($refs['file-input'].files)
		},

		handleSelect(event) {
			this.updateFileList(event.target.files)
		},

		updateFileList(files) {
			if (!files || !files.length) {
				$refs['file-list'].innerHTML = ''
				
				return
			}

			const items = Array.from(files).map(
				file => `• ${file.name} (${Math.round(file.size/1024)} kB)`).join('<br/>'
			)
			$refs['file-list'].innerHTML = items
		}
	}"
>
	<p
		class="
			cursor-pointer
			font-semibold
			inline-block
			self-start
			text-xs
		"
	>
		Přiložte podklady (půdorysy/fotky – nepovinné)
	</p>

	<label
		class="
			border-2 border-dashed
			flex flex-col
			gap-2
			items-center
			justify-center
			p-4
			rounded-2xl
			text-black text-base
		"
		data-js-dragover.prevent="dragOver = true"
		data-js-dragleave.prevent="dragOver = false"
		data-js-drop.prevent="handleDrop($event)"
		data-js-class="dragOver ? 'bg-green/10 border-green' : 'bg-transparent border-secondary'"
	>
		<p>
			Přetáhněte sem soubory nebo klikněte pro výběr
		</p>

		<input
			data-js-change="handleSelect"
			class="hidden"
			data-js-ref="file-input"
			multiple
			name="files[]"
			type="file"
		>

		<?=
			button(
				onClick: '$refs["file-input"].click()',
				template: "secondary",
				text: "Vybrat soubory",
				type: "button"
			);
		?>

		<div
			class="w-full text-xs"
			data-js-ref="file-list"
		></div>
	</label>

	<p class="text-xs text-stone-600">
		Při odeslání přes API posíláme pouze seznam souborů (doporučeno nahrát přes vlastní úložiště).
		U mailto se přílohy neodesílají.
	</p>
</div>
