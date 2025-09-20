<?php	$steps = json_decode($service->steps, false); ?>

<div class="box">
	<h3
		class="
			font-bold
			mb-5
			text-xl
		"
	>
		Jak postupujeme – <?= count($steps); ?> jasných kroků
	</h3>
	
	<ul
		class="
			gap-6
			grid
			md:grid-cols-2
		"
	>
		<?php foreach($steps as $index => $step): ?>
			<li class="flex gap-3">
				<span
					class="
						bg-amber-200
						flex
						flex-none
						font-bold
						h-8
						indent-px
						items-center
						justify-center
						leading-[33px]
						rounded-full
						w-8
					"
				>
					<?= $index + 1; ?>
				</span>
				
				<div>
					<p
						class="
							font-semibold
							leading-7
							min-h-8
						"
					>
						<?= $step->label; ?>
					</p>
				
					<p class="text-stone-700">
						<?= $step->value; ?>
					</p>
				</div>
			</li>
		<?php endforeach; ?>
	</ul>
</div>