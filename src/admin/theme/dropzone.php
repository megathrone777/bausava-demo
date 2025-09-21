<div
  x-data="{
    dataTransfer: new DataTransfer(),
		isLoading: false,
		success: '',
    allowed: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
    dragOver: false,
    error: '',
    locals: [],
    maxFiles: <?= $maxFiles; ?>,
    maxSize: 2 * 1024 * 1024,

    handleSelect(event) {
      this.addFiles(event.target.files);
    },

    handleDrop(event) {
      this.dragOver = false;
      this.addFiles(event.dataTransfer.files);
    },

    addFiles(list) {
      const incoming = Array.from(list || []);

      this.error = '';
      this.success = '';

      for (const file of incoming) {
        if (!this.allowed.includes(file.type)) {
					this.error = `Неподдерживаемый формат: ${file.name}`;
					continue;
				}

        if (file.size > this.maxSize) {
					this.error = `Размер превышает 2МБ: ${file.name}`;
					continue;
				}

        if (this.locals.length >= this.maxFiles) {
          this.error = `Максимум ${this.maxFiles} файл(ов)`;
          break;
        }

        this.locals.push({
          _id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()+Math.random()),
          file,
          preview: URL.createObjectURL(file)
        });
        this.dataTransfer.items.add(file);
      }
      this.$refs.file.files = this.dataTransfer.files;
    },

    removeLocal(index) {
      const file = this.locals[index];
      
      if (file?.preview) {
				URL.revokeObjectURL(file.preview);
			}
      this.locals.splice(index, 1);
    },

    truncate(s, n) { return s.length > n ? s.slice(0, n-1) + '…' : s; },
  }"
>
	<label
		class="dropzone"
		@dragover.prevent="dragOver = true"
		@dragleave.prevent="dragOver = false"
		@drop.prevent="handleDrop($event)"
    :class="dragOver ? 'dropzone--dragover' : 'dropzone'"
	>
		<span><strong>Переместите картинки сюда</strong> или кликните для выбора</span>
		<span class="dropzone__hint">JPEG, JPG, PNG, AVIF • до 2MB каждая • максимум <span x-text="maxFiles"></span> файл(ов)</span>

		<input
			@change="handleSelect"
			accept="image/jpeg,image/png,image/webp,image/avif"
			multiple
      name="images[]"
			style="display:none"
			type="file"
      x-ref="file"
		>
	</label>

	<template x-if="locals.length">
		<div
      class="
        d-flex
        flex-wrap
        gap-2
        mb-3
      "
    >
			<template x-for="(f, index) in locals" :key="f._id">
				<div class="thumb">
					<button
            @click="removeLocal(index)"
            class="thumb__remove"
            title="Удалить"
            type="button"
					>
            ✕
          </button>

					<img
            class="thumb__image"
            :alt="f.file.name"
            :src="f.preview"
          >

					<p
            class="dropzone__hint"
            x-text="truncate(f.file.name, 15)"
          ></p>

					<p
            class="dropzone__hint"
            x-text="`${(f.file.size / 1024 / 1024).toFixed(2)} MB`"
          ></p>
				</div>
			</template>
		</div>
	</template>

	<p
    class="dropzone__error"
    x-text="error"
    x-show="error"
  ></p>

	<p
    class="dropzone__success"
    x-text="success"
    x-show="success"
  ></p>
</div>