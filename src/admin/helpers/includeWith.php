<?php
	function includeWith($filePath, $variables = array(), $print = true) {
		extract($variables);
		ob_start();

		include $filePath;

		$output = ob_get_clean();

		if (!$print) {
			return $output;
		}

		echo $output;
	}
?>