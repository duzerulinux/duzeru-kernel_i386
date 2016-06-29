/*
* @file translate.js 
* @brief This script translate this page.
* @author Anderson Araujo 
* @mail <anderson.araujoprog@gmail.com>
* @site <http://andersonfirmino.github.io>
*/
(function(){
	var _lang, 
	dict = {
		"data-1": {
			pt: "Info Kernel atual",
			en: "Info Current Kernel"
		},
		"data-2": {
			pt: "Remover kernel antigo",
			en: "Remove old kernel"
		},
		"data-3": {
			pt: "Instalar",
			en: "Install"
		}
	}

	_lang = null;

	setTimeout(function(){
		_lang = lang 
	}, 500);

	if (lang === 'pt') {
		$('body').translate({lang: "pt", t: dict});
	} else {
		$('body').translate({lang: "en", t: dict});
	}

}).call(this);