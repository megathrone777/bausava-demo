<?php
	require_once "helpers/getString.php";

	$termsContent = R::findOne("terms", "id = 1");
	$termsTitle = getString("termsTitle");
?>

<div class="gradient pt-10">
	<div class="pb-12 md:pb-16">
		<div class="container">
			<div
				class="
					flex flex-col
					gap-y-6
				"
			>
				<div
					class="
						flex flex-col
						items-start
						gap-y-3
						mb-3
					"
				>
					<h1
						class="
							font-bold
							text-2xl text-black
							tracking-tight
							sm:text-4xl
						"
					>
						<?= $termsTitle; ?>
					</h1>

					<div
						class="
							flex flex-col
							gap-y-3
						"
					>
						<?= trim($termsContent->text); ?>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-white">
		<?php include_once "blocks/contacts.php"; ?>
	</div>
</div>