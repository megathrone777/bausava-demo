<div
	x-data="{
		content: '<?= trim($editorValue); ?>'
	}"
	class="
		bg-gray-300
		border border-gray-900
		col
		mb-3
		p-3
		rounded
	"
>
	<input
		name="<?= $editorName; ?>"
		type="hidden"
		:value="content"
	>

	<alpine-editor
		@focusout="
			const newValue = $event.currentTarget.view.dom.innerHTML

			content = newValue
		"
		x-model="content"
	>
		<div class="d-flex gap-2" data-type="menu">
			<button
				class="btn btn-sm btn-light"
				data-active-class="btn-dark"
				data-command="strong"
				type="button"
			>
				Bold
			</button>

			<button
				class="btn btn-sm btn-light"
				data-active-class="btn-dark"
				data-command="em"
				type="button"
			>
				Italic
			</button>
		</div>

		<div
			class="pt-3 px-3"
			data-type="editor"
		></div>
	</alpine-editor>
</div>