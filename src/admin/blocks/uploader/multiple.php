<div
  x-data="{
		deleteUrl: '/src/admin/helpers/uploader/deleteMultiple.php',
		isLoading: false,
		itemId: <?= $itemId; ?>,
		success: '',
    allowed: ['image/jpeg', 'image/png', 'image/webp', 'image/avif'],
    dragOver: false,
    error: '',
    existingUrls: <?= str_replace('"', "'", $existingUrls); ?>,
    locals: [],
    maxFiles: <?= $maxFiles; ?>,
    maxSize: 2 * 1024 * 1024,
    uploadUrl: '/src/admin/helpers/uploader/uploadMultiple.php',

    handleSelect(event) {
      this.addFiles(event.target.files);
      event.target.value = '';
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
      }
    },

    removeLocal(index) {
      const file = this.locals[index];
      if (file?.preview) {
				URL.revokeObjectURL(file.preview);
			}
      this.locals.splice(index, 1);
    },

    clearLocals() {
      for (const file of this.locals) {
				if (file.preview) URL.revokeObjectURL(file.preview);
			}

      this.locals = [];
    },

    truncate(s, n) { return s.length > n ? s.slice(0, n-1) + '…' : s; },

    filenameFromUrl(u) {
      try { return decodeURIComponent((new URL(u)).pathname.split('/').pop() || ''); }
      catch { return u.split('/').pop() || ''; }
    },

    async upload() {
      if (!this.locals.length) return;
      this.isLoading = true;
			this.error = '';
			this.success = '';
			
      try {
        const formData = new FormData();
        this.locals.forEach((field) => formData.append('images[]', field.file));
        formData.append('tableName', '<?= $tableName ?>');
        formData.append('id', String(this.itemId));
        // To REPLACE instead of append:
        // fd.append('mode', 'replace');

        const response = await fetch(this.uploadUrl, {
					body: formData,
					method: 'POST'
				});
        const data = await response.json();
        if (!response.ok || !data.success) throw new Error(data.error || 'Upload failed');

        this.existingUrls = data.images || this.existingUrls;
        this.success = `Загружено ${data.uploaded?.length || 0} файл(ов).`;
        this.clearLocals();

        const successTimeout = setTimeout(() => {
          this.success = '';

          clearTimeout(successTimeout);
        }, 5000);
      } catch (error) {
        this.error = error.message || 'Upload error';
      } finally {
        this.isLoading = false;
      }
    },

    async removeServer(index, url) {
      this.isLoading = true;
			this.error = '';
			this.success = '';

      try {
        const formData = new FormData();
        formData.append('tableName', '<?= $tableName ?>');
        formData.append('id', String(this.itemId));
        formData.append('url', url);

        const response = await fetch(this.deleteUrl, {
					body: formData,
					method: 'POST',
				});
        const data = await response.json();
        if (!response.ok || !data.success) throw new Error(data.error || 'Delete failed');

        // Update local list
        this.existingUrls.splice(index, 1);
        this.success = 'Картинка удалена';

        const deleteTimeout = setTimeout(() => {
          this.success = ''

          clearTimeout(deleteTimeout);
        }, 5000);
      } catch (error) {
        this.error = error.message || 'Delete error';
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
		@drop.prevent="handleDrop($event)"
    :class="dragOver ? 'dropzone--dragover' : 'dropzone'"
	>
		<span><strong>Переместите картинки сюда</strong> или кликните для выбора</span>
		<span class="dropzone__hint">JPEG, JPG, PNG, AVIF • до 2MB каждая • максимум <span x-text="maxFiles"></span> файл(ов)</span>

		<input
			@change="handleSelect"
			accept="image/jpeg,image/png,image/webp,image/avif"
			multiple
			style="display:none"
			type="file"
		>
	</label>

	<template x-if="existingUrls.length">
		<div
      class="
        d-flex
        flex-wrap
        gap-2
        mb-3
      "
    >
			<template
        x-for="(url, index) in existingUrls"
        :key="`server-${index}-${url}`"
      >
				<div class="thumb">
					<button
            @click="removeServer(index, url)"
            class="thumb__remove"
            title="Удалить"
            type="button"
          >
            ✕
          </button>

					<img
            alt=""
            class="thumb__image"
            :src="url"
          >

					<p class="dropzone__hint">Сохранено</p>
				</div>
			</template>
		</div>
	</template>

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

	<div
    class="
      align-items-center
      d-flex
      gap-2
    "
  >
		<button
      @click="upload()"
			:disabled="!locals.length || isLoading"
			class="btn btn-primary btn-sm"
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