<?php require_once "theme/product.php"; ?>

<?php foreach ($houses as $house): ?>
	<?=
		product(
			badges: json_decode($house->badges),
			image: json_decode($house->images)[0] ?? "",
			price: $house->price,
			title: $house->title,
			type: $house->type,
			url: "/house/" . $house->slug
		);
	?>
<?php endforeach; ?>