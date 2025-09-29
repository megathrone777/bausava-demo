<?php
	require_once "theme/button.php";
	require_once "theme/product.php";
	require_once "helpers/getString.php";
	
	$limit = 4;
	$offers = R::findAll("offers", "ORDER BY id DESC LIMIT " . $limit);
	$offersTotal = R::count("offers");
?>

<div
	class="
		gap-4
		grid
		mb-10
		sm:grid-cols-2
		lg:grid-cols-4
	"
>
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
</div>

<?php if ($offersTotal > $limit): ?>
	<div class="text-center">
		<?=
			button(
				href: "/offers",
				template: "primary",
				text: getString("showMore")
			);
		?>
	</div>
<?php endif; ?>
