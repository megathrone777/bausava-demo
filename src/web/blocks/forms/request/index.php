<?php
  require_once "theme/button.php";
  require_once "theme/input.php";
  require_once "theme/select.php";
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
      <?=
        select(
          id: "ground-select",
          label: "Pozemek",
          name: "ground",
          options: [
            "Mám stavební pozemek",
            "Potřebuji koupit pozemek",
            "Potřebuji upravit/zasíťovat pozemek"
          ],
          placeholder: "Vyberte",
          required: true
        );
      ?>

      <?=
        select(
          id: "project-select",
          label: "Projekt",
          name: "project",
          options: [
            "Mám hotový projekt",
            "Mám studii, potřebuji projekt",
            "Potřebuji kompletní projekt",
            "Chci upravit typový projekt"
          ],
          placeholder: "Vyberte",
          required: true
        );
      ?>
      
      <?=
        select(
          id: "permission-select",
          label: "Povolení",
          name: "permission",
          options: [
            "Mám stavební povolení/ohlášení",
            "Potřebuji vyřídit povolení",
            "V řízení / připravujeme"
          ],
          placeholder: "Vyberte",
          required: true
        );
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
      <?=
        select(
          id: "range-select",
          label: "Rozsah",
          name: "range",
          options: [
            "Hrubá stavba",
            "Dům na klíč",
            "Dům na klíč + interiér"
          ],
          placeholder: "Vyberte",
          required: true
        );
      ?>

      <?=
        select(
          id: "design-select",
          label: "Konstrukční systém",
          name: "design",
          options: [
            "Zděný",
            "Dřevostavba",
            "Jiný / poradit se"
          ],
          placeholder: "Nezvoleno"
        );
      ?>

      <?=
        input(
          id: "budget-input",
          label: "Rozpočet (Kč)",
          min: "0",
          name: "budget",
          placeholder: "např. 4 500 000",
          type: "number"
        );
      ?>

      <?=
        select(
          id: "energy-select",
          label: "Energetický standard",
          name: "energy",
          options: [
            "A0 (NZÚ)",
            "A",
            "B"
          ],
          placeholder: "Doporučit"
        );
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
      <?=
        input(
          id: "square-input",
          label: "Užitná plocha (m&sup2;)",
          min: "0",
          name: "square",
          placeholder: "např. 120",
          type: "number"
        );
      ?>

      <?=
        input(
          id: "rooms-input",
          label: "Počet pokojů",
          min: "1",
          name: "rooms",
          placeholder: "např. 4",
          type: "number"
        );
      ?>

      <?=
        input(
          id: "location-input",
          label: "Lokalita / parcela",
          name: "location",
          placeholder: "Obec, ulice / parc. č.",
          type: "text"
        );
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
      <?=
        input(
          id: "model-input",
          label: "Katalogový dům (volitelné)",
          name: "model",
          placeholder: "např. BAU 120",
          type: "text"
        );
      ?>

      <?=
        input(
          id: "date-input",
          label: "Preferovaný termín",
          name: "date",
          placeholder: "",
          type: "month"
        );
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
        <?=
          input(
            id: "name-input",
            label: "Jméno a příjmení",
            name: "name",
            placeholder: "Jan Novák",
            required: true,
            type: "text"
          );
        ?>

        <?=
          input(
            id: "phone-input",
            label: "Telefon",
            name: "phone",
            placeholder: "+420 6xx xxx xxx",
            required: true,
            type: "tel"
          );
        ?>

        <?=
          input(
            id: "email-input",
            label: "E-mail",
            name: "email",
            placeholder: "vas@email.cz",
            required: true,
            type: "email"
          );
        ?>
      </div>
    </div>

    <div data-js-click="handleSuccessReset">
      <label
        class="
          cursor-pointer
          font-semibold
          inline-block
          mb-2
          text-xs
        "
        for="message-input"
      >
        Poznámka
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
        id="message-input"
        name="message"
        placeholder="Speciální přání, rozpočet, technologie..."
      ></textarea>
    </div>

    <div
      class="
        flex flex-col
        gap-2
      "
      data-js-click="handleSuccessReset"
    >
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
          id="gdpr-input"
          required
          type="checkbox"
        >

        <span>
          Souhlasím se zpracováním osobních údajů pro vyřízení poptávky (GDPR). *
        </span>
      </label>

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
          id="marketing-input"
          type="checkbox"
        >

        <span>
          Souhlasím s informacemi o souvisejících službách (volitelné).
        </span>
      </label>
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
          md:inline-flex md:flex-row md:min-h-10 md:w-auto md:items-center
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
              text: "Hotovo",
              type: "button"
            );
          ?>
        </template>

        <template data-js-if="!isSuccess && !isLoading">
          <?=
            button(
              template: "primary",
              text: "Odeslat poptávku",
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