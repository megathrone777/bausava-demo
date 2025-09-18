import Alpine from "alpinejs";

const startingWith =
  (subject, replacement) =>
  ({ name, value }) => {
    if (name.startsWith(subject)) {
      name = name.replace(subject, replacement);
    }

    return { name, value };
  };

const initOverrides = () => {
  Alpine.prefix("data-js-");

  Alpine.mapAttributes(
    startingWith("data-js-alt", Alpine.prefixed("bind:alt"))
  );

  Alpine.mapAttributes(
    startingWith("data-js-fancybox", Alpine.prefixed("bind:data-fancybox"))
  );

  Alpine.mapAttributes(
    startingWith("data-js-href", Alpine.prefixed("bind:href"))
  );

  Alpine.mapAttributes(
    startingWith("data-js-key", Alpine.prefixed("bind:key"))
  );

  // Alpine.mapAttributes(
  //   startingWith("data-js-model", Alpine.prefixed("bind:model"))
  // );

  Alpine.mapAttributes(
    startingWith("data-js-style", Alpine.prefixed("bind:style"))
  );

  Alpine.mapAttributes(
    startingWith("data-js-src", Alpine.prefixed("bind:src"))
  );

  Alpine.mapAttributes(
    startingWith("data-js-class", Alpine.prefixed("bind:class"))
  );

  Alpine.mapAttributes(
    startingWith("data-js-click", Alpine.prefixed("on:click"))
  );

  Alpine.mapAttributes(
    startingWith("data-js-swipe-left", Alpine.prefixed("swipe:left"))
  );

  Alpine.mapAttributes(
    startingWith("data-js-submit", Alpine.prefixed("on:submit"))
  );
};

export { initOverrides };
