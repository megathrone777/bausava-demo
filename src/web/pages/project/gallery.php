<?php $galleryItems = json_decode($project->images, false); ?>

<div
	class="overflow-hidden"
	data-js-data="{}"
	data-js-init="
		if (Arrows && Carousel && Fancybox && Lazyload && Thumbs) {
			Carousel($refs['project-gallery'], { }, {
        Arrows,
        Lazyload,
        Thumbs,
      }).init();

      Fancybox.bind('[data-fancybox]', {
				Carousel: {
    			Toolbar: {
						display: {
							right: ['fullscreen', 'close'],
						},
					},
				},
			})
		}
	"
>
	<div
		class="
			f-carousel
			h-72
			overflow-hidden
			rounded-3xl
			sm:h-96
			md:h-125
		"
		data-js-ref="project-gallery"
	>
		<?php foreach($galleryItems as $index => $galleryItem): ?>
			<div
				class="
					f-carousel__slide
					flex
					items-center
					justify-center
				"
				data-fancybox="gallery"
				data-src="<?= $galleryItem; ?>"
				data-thumb-src="<?= $galleryItem; ?>"
			>
				<img
					alt="Project gallery image <?= $index; ?>"
					class="
						h-full
						max-w-full
						object-cover
						w-full
        		max-h-full
					"
					src="<?= $galleryItem; ?>"
				>
			</div>
		<?php endforeach; ?>
	</div>
</div>