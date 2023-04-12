function test() {
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top": itemPosNewAnimTop.top + "px",
		"left": itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click", "li", function (e) {
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top": itemPosNewAnimTop.top + "px",
			"left": itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function () {
	setTimeout(function () { test(); });
});
$(window).on('resize', function () {
	setTimeout(function () { test(); }, 500);
});
$(".navbar-toggler").click(function () {
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function () { test(); });
});


jQuery(document).ready(function ($) {
	var path = window.location.pathname.split("/").pop();
	if (path == '') {
		path = 'index.html';
	}
	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	target.parent().addClass('active');
});

$(function () {
	var shrinkHeader = 300;
	$(window).scroll(function () {
		var scroll = getCurrentScroll();
		if (scroll >= shrinkHeader) {
			$('.header').addClass('shrink');
		}
		else {
			$('.header').removeClass('shrink');
		}
	});
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});





var contadorIniciado = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador1').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado) {
		contadorIniciado = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador1 = 1;
		var contadorElemento = document.getElementById('contador1');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador1;
			contador1++;
			if (contador1 > 4379) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});


var contadorIniciado2 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador2').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado2) {
		contadorIniciado2 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador2 = 1;
		var contadorElemento = document.getElementById('contador2');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador2;
			contador2++;
			if (contador2 > 1193) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});


var contadorIniciado3 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador3').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado3) {
		contadorIniciado3 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador3 = 1;
		var contadorElemento = document.getElementById('contador3');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador3;
			contador3++;
			if (contador3 > 15826) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});

var contadorIniciado4 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador4').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado4) {
		contadorIniciado4 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador4 = 1;
		var contadorElemento = document.getElementById('contador4');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador4;
			contador4++;
			if (contador4 > 644) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});


var contadorIniciado5 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador5').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado5) {
		contadorIniciado5 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador5 = 1;
		var contadorElemento = document.getElementById('contador5');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador5;
			contador5++;
			if (contador5 > 2000) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});


var contadorIniciado6 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador6').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado6) {
		contadorIniciado6 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador6 = 1;
		var contadorElemento = document.getElementById('contador6');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador6;
			contador6++;
			if (contador6 > 3551) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});


var contadorIniciado7 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador7').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado7) {
		contadorIniciado7 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador7 = 1;
		var contadorElemento = document.getElementById('contador7');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador7;
			contador7++;
			if (contador7 > 4660) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});


//Croquetas



var contadorIniciado8 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador8').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado8) {
		contadorIniciado8 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador8 = 1;
		var contadorElemento = document.getElementById('contador8');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador8;
			contador8++;
			if (contador8 > 2) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});


//Platico 


var contadorIniciado9 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador9').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado9) {
		contadorIniciado9 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador9 = 1;
		var contadorElemento = document.getElementById('contador9');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador9;
			contador9++;
			if (contador9 > 96) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});

//Cartón 


var contadorIniciado10 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador10').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado10) {
		contadorIniciado10 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador10 = 1;
		var contadorElemento = document.getElementById('contador10');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador10;
			contador10++;
			if (contador10 > 625) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});

//Vidrio 

var contadorIniciado11 = false; // Variable para saber si el contador ya se inició

window.addEventListener('scroll', function () {
	// Obtenemos la posición del elemento en relación al viewport
	var posicionElemento = document.getElementById('contador11').getBoundingClientRect().top;

	// Si la posición del elemento es menor que la posición actual del scroll y el contador no se ha iniciado todavía, lo iniciamos
	if (posicionElemento < window.innerHeight && !contadorIniciado11) {
		contadorIniciado11 = true; // Actualizamos la variable para que no se vuelva a iniciar el contador
		var contador11 = 1;
		var contadorElemento = document.getElementById('contador11');
		var intervalo = setInterval(function () {
			contadorElemento.innerHTML = contador11;
			contador11++;
			if (contador11 > 172) {
				clearInterval(intervalo);
			}
		}, 2);
	}
});