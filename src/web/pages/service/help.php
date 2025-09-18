<?php $helpData = json_decode($service->help, false); ?>

<div
	class="
		rounded-2xl
		bg-stone-900
		text-amber-50
		p-6
		md:p-8
	"
>
	<h3
		class="
			font-bold
			mb-3
			text-lg
		"
	>
		<?= $helpData->title; ?>
	</h3>
	
	<ul
		class="
			mb-4
			space-y-3
			text-amber-100/90
		"
	>
		<?php foreach($helpData->items as $helpItem): ?>
			<li><?= $helpItem; ?><li>
		<?php endforeach; ?>
	</ul>
	
	<p class="opacity-80 text-xs">
		<?= $helpData->text; ?>
	</p>
</div>