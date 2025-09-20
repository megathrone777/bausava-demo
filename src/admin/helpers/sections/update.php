<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	try {
		if ($_SERVER["REQUEST_METHOD"] !== "POST") {
			http_response_code(405);
			echo json_encode([
				"error"=>"Method not allowed",
				"success" => false,
			]);
			exit;
		}

		$raw = file_get_contents("php://input");
		$json = json_decode($raw, true);

		if (!is_array($json) || !isset($json["order"]) || !is_array($json["order"])) {
			http_response_code(400);
			echo json_encode([
				"error" => "Invalid payload",
				"success" => false, 
			]);
			exit;
		}

		R::begin();

		foreach ($json["order"] as $row) {
			if (!isset($row["id"], $row["position"])) {
				throw new RuntimeException("Invalid row");
			}

			$id = (int)$row["id"];
			$position = (int)$row["position"];
			$section = R::load("sections", $id);

			if (!$section->id) throw new RuntimeException("Block $id not found");
			$section->position = $position;
			R::store($section);
		}

		R::commit();

		echo json_encode([
			"success" => true
		]);

	} catch (Throwable $error) {
		R::rollback();
		http_response_code(500);
		
		echo json_encode([
			"error" => $error->getMessage(),
			"success" => false
		]);
	}
?>
