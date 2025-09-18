<?php
	require_once $_SERVER["DOCUMENT_ROOT"] . "/config.php";

	try {
		if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
			http_response_code(405);
			echo json_encode(['success'=>false,'error'=>'Method not allowed']); exit;
		}

		$raw = file_get_contents('php://input');
		$json = json_decode($raw, true);
		if (!is_array($json) || !isset($json['order']) || !is_array($json['order'])) {
			http_response_code(400);
			echo json_encode(['success'=>false,'error'=>'Invalid payload']); exit;
		}

		R::begin();

		foreach ($json['order'] as $row) {
			if (!isset($row['id'], $row['position'])) {
				throw new RuntimeException('Invalid row');
			}
			$id  = (int)$row['id'];
			$pos = (int)$row['position'];

			$b = R::load('sections', $id);
			if (!$b->id) throw new RuntimeException("Block $id not found");
			$b->position = $pos;
			R::store($b);
		}

		R::commit();
		echo json_encode(['success'=>true]);

	} catch (Throwable $t) {
		R::rollback();
		http_response_code(500);
		echo json_encode(['success'=>false,'error'=>$t->getMessage()]);
	}
?>
