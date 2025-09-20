<?php
  $sidebarGroups = [
    [
      array("label" => "Menu", "url" => "/menu"),
      array("label" => "Intro", "url" => "/hero"),
      array("label" => "S čím vám pomůžeme", "url" => "/services"),
      array("label" => "Jak to funguje", "url" => "/how-it-works"),
      array("label" => "Naše projekty", "url" => "/projects"),
      array("label" => "Nabídka nemovitostí", "url" => "/offers"),
      array("label" => "Katalog rodinných domů", "url" => "/houses"),
      array("label" => "Proč s námi", "url" => "/advantages"),
      array("label" => "Recenze", "url" => "/reviews")
    ],

    [
      array("label" => "Rychlá kalkulace zhodnocení (form)", "url" => "/calculate"),
      array("label" => "Kalkulátor odhadu (form)", "url" => "/calculator"),
      array("label" => "Kontakt (form)", "url" => "/contacts")
    ],

    [
      array("label" => "Ostatni tlacitka", "url" => "/strings"),
      array("label" => "Nastaveni", "url" => "/settings"),
      array("label" => "Zásady ochrany", "url" => "/terms")
    ]
  ];
?>

<nav
  class="
    border-end
    h-100
    pt-1
  "
>
  <?php foreach($sidebarGroups as $index => $sidebarGroup): ?>
    <ul
      class="
        flex-column
        gap-1
        nav nav-underline
      "
    >
      <?php foreach($sidebarGroup as $sidebarItem): ?>
        <li class="nav-item">
          <a
            class="nav-link <?= $pathname === '/admin' . $sidebarItem['url'] ? 'active' : '' ?>"
            href="/admin<?= $sidebarItem['url']; ?>"
          >
            <?= $sidebarItem["label"]; ?>
          </a>
        </li>
      <?php endforeach; ?>
    </ul>

    <?php if ($index != array_key_last($sidebarGroups)): ?>
      <hr class="mb-1 mt-1">
    <?php endif; ?>
  <?php endforeach; ?>
</nav>