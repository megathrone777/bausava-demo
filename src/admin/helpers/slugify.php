<?php
	function slugify($string) {
		$map = array(
			'а'=>'a','б'=>'b','в'=>'v','г'=>'g','д'=>'d',
			'е'=>'e','ё'=>'e','ж'=>'zh','з'=>'z','и'=>'i',
			'й'=>'y','к'=>'k','л'=>'l','м'=>'m','н'=>'n',
			'о'=>'o','п'=>'p','р'=>'r','с'=>'s','т'=>'t',
			'у'=>'u','ф'=>'f','х'=>'h','ц'=>'ts','ч'=>'ch',
			'ш'=>'sh','щ'=>'shch','ы'=>'y','э'=>'e','ю'=>'yu',
			'я'=>'ya','ь'=>'','ъ'=>'',
		);
		$string = mb_strtolower($string, "UTF-8");
		$string = strtr($string, $map);
		$string = preg_replace('/[^a-z0-9]+/u', '-', $string);
		$string = trim($string, '-');

		return $string;
	};
?>