<div
	x-data="{
		content: '<?= trim($editorValue); ?>'
	}"
	init="$watch('content', (val) => { console.log(val) })"
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

	<alpine-editor x-model="content" x-ref="editor">
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
			@keydown="(event) => $refs.editor._x_model.set(event.target.innerHTML)"
		>
		</div>
	</alpine-editor>
</div>