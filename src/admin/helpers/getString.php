<?php
	function getString($name) {
		$string = R::findOne("strings", "name = ?", [$name]);

		if (isset($string)) {
			return $string;
		}

		return array("name" => null, "value" => null);
	}
?>