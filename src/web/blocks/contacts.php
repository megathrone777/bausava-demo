<?php
	require_once "helpers/getString.php";

	$contactItems = R::findAll("contacts");
	$contactsTitle = getString("contactsTitle");
	$contactsText = getString("contactsText");
?>

<div
	class="
		py-12
		md:py-16
	"
	id="contacts"
>
	<div
		class="
			container
			flex flex-col
			gap-x-6
			gap-y-10
			justify-between
			md:flex-row
		"
	>
		<div>
			<h2
				class="
					font-bold
					text-2xl
					tracking-tight
					sm:text-4xl
				"
			>
				<?= $contactsTitle; ?>
			</h2>
			
			<p
				class="
					mt-3
					max-w-xl
					opacity-80
				"
			>
				<?= $contactsText; ?>
			</p>
			
			<ul class="mt-6 space-y-3">
				<?php foreach ($contactItems as $contactItem): ?>
					<li>
						<a
							class="
								font-medium
								inline-flex
								gap-x-2.5
								items-center
								leading-5
								transition-colors
								hover:text-primary
							"
							href="<?= $contactItem->href; ?>"
						>
							<i
								class="
									h-5
									inline-block
									w-5
									text-primary
								"
							>
								<?= $contactItem->icon; ?>
							</i>

							<?= $contactItem->title; ?>
						</a>
					</li>
				<?php endforeach; ?>
			</ul>
		</div>

		<div
			class="
				bg-white
				border border-secondary
				grow
				min-w-80
				p-6
				rounded-3xl
				shadow
				lg:max-w-[560px]
			"
		>
			<?php include_once "forms/contact.php"; ?>
		</div>
	</div>
</div>