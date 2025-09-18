<div
	class="
		flex flex-col
		items-start
		gap-y-3
		mb-3
	"
>
	<p
		class="
			bg-black
			h-[23px]
			inline-block
			leading-6
			px-3
			rounded-full
			text-xs text-amber-50
			uppercase
		"
	>
		<?= $service->name; ?>
	</p>

	<h1
		class="
			font-bold
			text-2xl text-black
			tracking-tight
			sm:text-4xl
		"
	>
		<?= $service->title; ?>
	</h1>

	<div>
		<p><?= $service->text; ?></p>
	</div>
</div>