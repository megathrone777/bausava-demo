<div class="row">
  <div class="col-6">
    <h1 class="page-header">Administrator</h1>
  </div>
</div>

<hr>

<?php
  $sections = R::findAll("sections", "ORDER BY position ASC");
  $blocks = [];
  
  foreach ($sections as $section) {
    $blocks[] = array(
			"id" => $section->id,
			"name" => $section->name,
      "title" => $section->title
		);
  }
  $initial = str_replace('"', "'", json_encode($blocks));
?>

<div class="row">
  <div class="col">
    <h3>Main page sections order:</h3>
  </div>
</div>

<div class="row">
  <div class="col-12">
    <div
      x-data="{
        items: JSON.parse(JSON.stringify(<?= $initial; ?> || [])),
        lastSaved: JSON.parse(JSON.stringify(<?= $initial; ?> || [])),

        drag: null,
        over: null,
        pointerActive: false,
        saving: false,
        statusClass: '', // '', 'saving', 'saved', 'error'
        statusText: 'Idle',

        debounceTimer: null,

        debounce(ms, fn) {
          clearTimeout(this.debounceTimer);
          this.debounceTimer = setTimeout(() => fn.call(this), ms);
        },

        setStatus(cls, text) {
          this.statusClass = cls;
          this.statusText = text;
        },

        // Native DnD (mouse)
        onDragStart(e, block, index) {
          this.drag = { id: block.id, fromIndex: index };
          e.dataTransfer.effectAllowed = 'move';
          e.target.classList.add('ghost');
        },

        onDragOver(e, block, overIndex) {
          if (!this.drag) return;
          if (this.over?.id !== block.id) this.over = { id: block.id, overIndex };
        },

        onDrop(e, block, overIndex) {
          if (!this.drag) return;
          this.reorder(this.drag.fromIndex, overIndex);
          this.drag = null; this.over = null;
          this.autoSave();
        },

        onDragEnd(e) {
          e.target.classList.remove('ghost');
          this.drag = null; this.over = null;
        },

        // Pointer (touch) support
        pointerDown(e, block, index) {
          this.pointerActive = true;
          this.drag = { id: block.id, fromIndex: index };
        },

        pointerMove(e, block, index) {
          if (!this.pointerActive || !this.drag) return;
          const el = document.elementFromPoint(e.clientX, e.clientY);
          const row = el?.closest?.('.item');
          if (!row) return;
          const all = Array.from(row.parentElement.querySelectorAll('.item'));
          const overIndex = all.indexOf(row);
          if (overIndex >= 0 && overIndex !== this.over?.overIndex) {
            this.over = { id: this.items[overIndex]?.id, overIndex };
          }
        },

        pointerUp() {
          if (this.pointerActive && this.over && this.drag) {
            this.reorder(this.drag.fromIndex, this.over.overIndex);
            this.autoSave();
          }
          this.pointerActive = false;
          this.drag = null; this.over = null;
        },

        reorder(from, to) {
          if (from === to || from < 0 || to < 0) return;
          const [moved] = this.items.splice(from, 1);
          this.items.splice(to, 0, moved);
          this.setStatus('', 'Reordered (pending save)');
        },

        autoSave() {
          this.debounce(300, this.saveNow);
        },

        async saveNow() {
          const payload = this.items.map((b, pos) => ({ id: b.id, position: pos }));

          this.saving = true;
          this.setStatus('saving', 'Saving...');

          try {
            const response = await fetch('/src/admin/helpers/sections/update.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                order: payload
              })
            });
            const data = await response.json();
            if (!response.ok || !data.success) throw new Error(data.error || 'Save failed');
            this.lastSaved = JSON.parse(JSON.stringify(this.items));
            this.setStatus('saved', 'Saved');
          } catch (error) {
            this.items = JSON.parse(JSON.stringify(this.lastSaved));
            this.setStatus('error', error.message || 'Save error (reverted)');
          } finally {
            this.saving = false;
          }
        }
      }"
      class="list"
    >
      <template x-for="(b, idx) in items" :key="b.id">
        <div
          class="item"
          :class="{'dragging': drag?.id===b.id, 'drop-target': over?.id===b.id}"
          draggable="true"
          @dragstart="onDragStart($event,b,idx)"
          @dragover.prevent="onDragOver($event,b,idx)"
          @dragend="onDragEnd"
          @drop.prevent="onDrop($event,b,idx)"
          @pointerdown.passive="pointerDown($event,b,idx)"
          @pointermove.prevent="pointerMove($event,b,idx)"
          @pointerup="pointerUp"
        >
          <div class="handle" aria-label="Drag handle">☰</div>

          <div style="flex:1">
            <div>
              <strong x-text="b.title"></strong>
            </div>

            <div class="text-muted">
              Position: <span x-text="idx"></span>
            </div>
          </div>
        </div>
      </template>

      <div
        class="status"
        :class="statusClass"
        style="margin-top: 8px;"
      >
        <div class="dot"></div>
        <span x-text="statusText"></span>
      </div>
    </div>
  </div>
</div>