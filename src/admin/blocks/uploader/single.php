<div
  x-data="{
    dragOver: false,
    error: '',
    existingUrl: '<?= $existingUrl; ?>',
    file: null,
    itemId: <?= $itemId; ?>,
    isLoading: false,
    preview: '',
    success: '',
    uploadUrl: '/src/admin/helpers/uploader/uploadSingle.php',

    validate(file) {
      const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
      const max = 2 * 1024 * 1024;

      if (!allowed.includes(file.type)) {
        this.error = 'Неподдерживаемый тип файла';
        return false;
      }

      if (file.size > max) {
        this.error = 'Файл слишком большой (>5MB)';
        return false;
      }

      return true;
    },

    handleFile(event) {
      this.error = '';
      this.success = '';

      const file = event.target.files?.[0];
      if (!file) return;
      if (!this.validate(file)) return;
      this.setLocalFile(file);
      event.target.value = '';
    },

    handleDrop(event) {
      this.dragOver = false;
      this.error = '';
      this.success = '';

      const file = event.dataTransfer?.files?.[0];
      if (!file) return;
      if (!this.validate(file)) return;
      this.setLocalFile(file);
    },

    setLocalFile(file) {
      this.clearLocal();
      this.file = file;
      this.preview = URL.createObjectURL(file);
    },

    clearLocal() {
      if (this.preview) URL.revokeObjectURL(this.preview);
      this.file = null;
      this.preview = '';
    },

    async upload() {
      if (!this.file) return;
      this.isLoading = true;
      this.error = '';
      this.success = '';

      try {
        const formData = new FormData();

        formData.append('tableName', '<?= $tableName ?>');
        formData.append('id', String(this.itemId));
        formData.append('image', this.file);

        const response = await fetch(this.uploadUrl, {
          body: formData,
          method: 'POST',
        });
        const data = await response.json();
        if (!response.ok || !data.success) throw new Error(data.error || 'Save failed');

        // Show the new server URL, clear local preview
        this.existingUrl = data.image || null;
        this.success = 'Загружено';
        this.clearLocal();
      } catch (error) {
        this.error = error.message || 'Upload error';
      } finally {
        this.isLoading = false;
      }
    }
  }"
>
  <label
		class="dropzone"
    @dragover.prevent="dragOver = true"
    @dragleave.prevent="dragOver = false"
    @dragend.prevent="dragOver = false"
    @drop.prevent="handleDrop($event)"
    :class="dragOver ? 'dropzone--dragover' : 'dropzone'"
	>
		<span><strong>Переместите картинку сюда</strong> или кликните для выбора</span>
		<span class="dropzone__hint">JPEG, JPG, PNG, AVIF • до 2MB</span>

		<input
			@change="handleFile($event)"
			accept="image/jpeg,image/png,image/webp,image/avif"
			style="display:none"
			type="file"
		>
	</label>

  <template x-if="existingUrl && !file">
    <div class="thumb mb-2">
      <img :src="existingUrl" alt="" class="thumb__image">
      <p class="dropzone__hint">Сохранено</p>
    </div>
  </template>

  <template x-if="file">
    <div class="thumb mb-2">
      <img :src="preview" :alt="file?.name" class="thumb__image">
      <div class="dropzone__hint" x-text="file?.name"></div>
    </div>
  </template>

  <div class="mb-2">
    <button
      @click="upload()"
      class="btn btn-primary btn-sm"
      :disabled="!file || isLoading"
      type="button"
    >
      <span x-show="!isLoading">Загрузить</span>
      <span x-show="isLoading">Загрузка...</span>
    </button>
  </div>

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
