<?php require_once "theme/product.php"; ?>

<?php foreach($offers as $offer): ?>
	<?=
		product(
			badges: json_decode($offer->badges),
			image: json_decode($offer->images)[0] ?? "",
			price: $offer->price,
			title: $offer->title,
			type: $offer->type,
			url: "/offer/" . $offer->slug
		);
	?>
<?php endforeach; ?>