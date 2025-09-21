<?php
  require_once "helpers/getString.php";
  require_once "theme/button.php";
  require_once "theme/input.php";
  require_once "theme/select.php";

  $requestFields = R::findAll("request_fields");

  function getField(
    string $label,
    string $name,
    string $type,
    string $placeholder,
    bool $required,
    array $options = null,
    int $min = null
  ) {
    $id = "request-field-" . $name;
    $star = $required ? " *" : "";
    $isRequired = $required ? "required" : "";

    $fields = array(
      "checkbox" => <<<HTML
        <label
          class="
            inline-flex
            items-center
            gap-2
            pt-1
            text-sm text-stone-700
          "
        >
          <input
            class="-mt-px"
            id="$id"
            $isRequired
            type="checkbox"
          >

          <span>
            $label $star
          </span>
        </label>
      HTML,

      "email" => input(
        id: $id,
        label: $label,
        name: $name,
        placeholder: $placeholder,
        required: $required > 0,
        type: $type
      ),

      "select" => select(
        id: $id,
        label: $label,
        name: $name,
        options: $options,
        placeholder: $placeholder,
        required: $required > 0
      ),

      "month" => input(
        id: $id,
        label: $label,
        name: $name,
        placeholder: $placeholder,
        required: $required > 0,
        type: $type
      ),

      "number" => input(
        id: $id,
        label: $label,
        min: $min,
        name: $name,
        placeholder: $placeholder,
        required: $required > 0,
        type: $type
      ),

      "tel" => input(
        id: $id,
        label: $label,
        name: $name,
        placeholder: $placeholder,
        required: $required > 0,
        type: $type
      ),

      "text" => input(
        id: $id,
        label: $label,
        name: $name,
        placeholder: $placeholder,
        required: $required > 0,
        type: $type
      )
    );

    echo $fields[$type];
  }
?>

<div
  class="contents"
	data-js-data="{
		isLoading: false,
		isSuccess: false,

		async handleSubmit({ target }) {
			const body = new FormData(target)

			body.append('title', 'Nezávazná poptávka – rodinný dům')
			body.append('template', 'request')

			try {
				this.isLoading = true

				const response = await fetch(target.action, {
					body,
					method: target.method
				})

				if (response.ok) {
					const data = await response.json()

					if (data && data.success) {
						this.isSuccess = true
						target.reset()
					}
				}
			} catch(error) {
				console.error('Cannot send contact data', error)
			} finally {
				this.isLoading = false
			}
		},

		handleSuccessReset() {
			if (this.isSuccess) {
				this.isSuccess = false
			}
		}
	}"
>
  <form
    action="/src/web/helpers/sendEmail.php"
    class="
      grid grid-cols-1
      gap-6
    "
    data-js-submit.prevent="handleSubmit"
    enctype="multipart/form-data"
    method="POST"
  >
    <div
      class="
        grid
        gap-4
        md:grid-cols-3
      "
      data-js-click="handleSuccessReset"
    >
      <?php
        foreach(array_slice($requestFields, 0, 3) as $requestField) {
          getField(
            label: $requestField->label,
            min: $requestField->min,
            name: $requestField->name,
            options: json_decode($requestField->options) ?? [],
            placeholder: $requestField->placeholder,
            required: $requestField->required > 0,
            type: $requestField->type,
          );
        }
      ?>
    </div>

    <div
      class="
        grid
        gap-4
        md:grid-cols-4
      "
      data-js-click="handleSuccessReset"
    >
      <?php
        foreach(array_slice($requestFields, 3, 4) as $requestField) {
          getField(
            label: $requestField->label,
            min: $requestField->min,
            name: $requestField->name,
            options: json_decode($requestField->options) ?? [],
            placeholder: $requestField->placeholder,
            required: $requestField->required > 0,
            type: $requestField->type,
          );
        }
      ?>
    </div>

    <div
      class="
        grid
        gap-4
        md:grid-cols-4
      "
      data-js-click="handleSuccessReset"
    >
      <?php
        foreach(array_slice($requestFields, 7, 3) as $requestField) {
          getField(
            label: $requestField->label,
            min: $requestField->min,
            name: $requestField->name,
            options: json_decode($requestField->options) ?? [],
            placeholder: $requestField->placeholder,
            required: $requestField->required > 0,
            type: $requestField->type,
          );
        }
      ?>
    </div>

    <div
      class="
        grid
        gap-4
        md:grid-cols-3
      "
      data-js-click="handleSuccessReset"
    >
      <?php
        foreach(array_slice($requestFields, 10, 2) as $requestField) {
          getField(
            label: $requestField->label,
            min: $requestField->min,
            name: $requestField->name,
            options: json_decode($requestField->options) ?? [],
            placeholder: $requestField->placeholder,
            required: $requestField->required > 0,
            type: $requestField->type,
          );
        }
      ?>
    </div>

    <div
      class="
        grid
        gap-4
        md:grid-cols-2
      "
      data-js-click="handleSuccessReset"
    >
      <?php include_once "theme/dropzone.php"; ?>

      <div
        class="
          grid grid-cols-1
          gap-4
        "
      >
        <?php
          foreach(array_slice($requestFields, 12, 3) as $requestField) {
            getField(
              label: $requestField->label,
              min: $requestField->min,
              name: $requestField->name,
              options: json_decode($requestField->options) ?? [],
              placeholder: $requestField->placeholder,
              required: $requestField->required > 0,
              type: $requestField->type,
            );
          }
        ?>
      </div>
    </div>

    <?php
      $filteredFields = array_filter($requestFields, function($key) {
        return $key->type === "textarea";
      }, ARRAY_FILTER_USE_BOTH);

      $textareaField = $filteredFields[array_key_first($filteredFields)];
    ?>

    <div data-js-click="handleSuccessReset">
      <label
        class="
          cursor-pointer
          font-semibold
          inline-block
          mb-2
          text-xs
        "
        for="request-textarea-<?= $textareaField->name; ?>"
      >
        <?= $textareaField->label; ?>
      </label>

      <textarea
        class="
          border-none
          font-display font-medium
          h-28
          placeholder:font-medium placeholder:text-gray
          px-3
          py-2
          resize-none
          ring ring-secondary
          rounded-xl
          text-black text-base
          transition-shadow
          w-full
          focus:ring-2 focus:ring-primary
        "
        id="request-textarea-<?= $textareaField->name; ?>"
        name="<?= $textareaField->name; ?>"
        placeholder="<?= $textareaField->placeholder; ?>"
      ></textarea>
    </div>

    <div
      class="
        flex flex-col
        gap-2
      "
      data-js-click="handleSuccessReset"
    >
      <?php
        $filteredFields = array_filter($requestFields, function($key) {
          return $key->type === "checkbox";
        }, ARRAY_FILTER_USE_BOTH);
      ?>
      
      <?php
        foreach($filteredFields as $requestField) {
          getField(
            label: $requestField->label,
            min: $requestField->min,
            name: $requestField->name,
            options: json_decode($requestField->options) ?? [],
            placeholder: $requestField->placeholder,
            required: $requestField->required > 0,
            type: $requestField->type,
          );
        }
      ?>
    </div>

    <div
      class="
        flex flex-col
        items-stretch
        gap-3
        w-full
        md:flex-row md:items-center
      "
    >
      <div
        class="
          flex flex-col
          min-h-9
          relative
          min-w-[150px]
          w-full
          md:w-[150px] md:basis-[150px] md:min-h-10 md:items-stretch
        "
      >
        <template data-js-if="isLoading">
          <?=
            button(
              template: "loading",
              text: "",
              type: "button"
            );
          ?>
        </template>

        <template data-js-if="isSuccess && !isLoading">
          <?=
            button(
              template: "success",
              text: getString("success"),
              type: "button"
            );
          ?>
        </template>

        <?php
          $filteredFields = array_filter($requestFields, function($key) {
            return $key->type === "submit";
          }, ARRAY_FILTER_USE_BOTH);

          $submitField = $filteredFields[array_key_first($filteredFields)];
        ?>

        <template data-js-if="!isSuccess && !isLoading">
          <?=
            button(
              template: "primary",
              text: $submitField->label,
              type: "submit"
            );
          ?>
        </template>
      </div>

      <span class="text-xs text-stone-600">
        * Odeslání přes API (pokud nastavíte) nebo fallback přes e-mail.
        Není třeba upravovat kód — e-mail si nastavíte při prvním odeslání.
      </span>
    </div>
  </form>
</div>