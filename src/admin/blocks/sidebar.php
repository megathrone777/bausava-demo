<?php
  $sidebarItems = [
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
      array("label" => "Rychlá kalkulace zhodnocení", "url" => "/calculate"),
      array("label" => "Kalkulátor odhadu", "url" => "/calculator"),
      array("label" => "Kontakt", "url" => "/contacts")
    ],

    [
      array("label" => "Ostatni tlacitka", "url" => "/strings"),
      array("label" => "Nastaveni", "url" => "/settings")
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
  <ul
    class="
      flex-column
      gap-1
      nav nav-underline
    "
  >
    <li class="nav-item">
      <a
        class="nav-link <?= $pathname === '/admin/menu' ? 'active' : '' ?>"
        href="/admin/menu"
      >

      </a>
		</li>
  </ul>

  <hr class="mb-1 mt-1">

  <ul
    class="
      flex-column
      gap-1
      nav nav-underline
    "
  >
    <li class="nav-item">
      <a
        class="nav-link <?= $pathname === '/admin/calculate' ? 'active' : '' ?>"
        href="/admin"
      >
        
      </a>
		</li>
  </ul>

  <hr class="mb-1 mt-1">

  <ul
    class="
      flex-column
      gap-1
      nav nav-underline
    "
  >
    <li class="nav-item">
      <a
        class="nav-link <?= $pathname === '/admin/strings' ? 'active' : '' ?>"
        href="/admin"
      >
        
      </a>
    </li>
  </ul>
</nav>