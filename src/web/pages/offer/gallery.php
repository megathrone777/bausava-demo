<?php $galleryItems = json_decode($offer->images, false); ?>

<?php if (count($galleryItems) > 0): ?>
	<div
		class="overflow-hidden"
		data-js-data="{}"
		data-js-init="
			if (Arrows && Carousel && Fancybox && Thumbs) {
				Carousel($refs['offer-gallery'], {}, {
					Arrows,
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
			data-js-ref="offer-gallery"
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
						alt="Offer gallery image <?= $index; ?>"
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
<?php endif; ?>