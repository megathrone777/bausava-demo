<?php require_once "helpers/includeWith.php"; ?>

<div
	class="
		gradient
		pb-12
		pt-10
		md:pb-16
	"
>
	<div class="container">
		<div
			class="
				flex flex-col
				gap-y-6
			"
		>
			<?php
				if ($service->layout == "primary") {
					include_once "hero/primary.php";
					include_once "features.php";
				}

				if ($service->help) {
					include_once "help.php";
				}

				if ($service->start) {
					include_once "start.php";
				}

				if ($service->layout == "secondary") {
					include_once "hero/secondary.php";

					if ($service->packages && count(json_decode($service->packages, false)) > 0) {
						include_once "packages.php";
					}
				}

				if ($service->catalog) {
					include_once "houses/index.php";
				}

				if ($service->steps && count(json_decode($service->steps, false)) > 0) {
					include_once "steps.php";
				}
				
				$faqs = json_decode($service->faqs, false);
				
				if (count($faqs) > 0) {
					$sections = array_map(function($faq, $index) {
						return array(
							"id" => "section-" . $index + 1,
							"title" => $faq->question,
							"text" => $faq->answer
						);
					}, $faqs, array_keys($faqs));

					includeWith(
						"theme/accordion.php",
						array(
							"id" => "#faqs",
							"sections" => $sections,
							"title" => getString("faqsTitle")
						)
					);
				}

				if ($service->has_form) {
					include_once "request.php";
				}
			?>
		</div>
	</div>
</div>