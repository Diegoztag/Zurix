// Script desplazamiento del nav principal-----------------
$(document).ready(function () {
	$('.caract').on('click',function () {
		$('html,body').animate({scrollTop: $(".caracter").offset().top}, 1000);
	});

	$('.acerca').on('click',function () {
		$('html,body').animate({scrollTop: $(".about").offset().top}, 1000);
	});

	$('.init').on('click',function () {
		$('html,body').animate({scrollTop: $(".iniciando").offset().top}, 1000);
	});

	$('.grid').on('click',function () {
		$('html,body').animate({scrollTop: $(".rejilla").offset().top}, 1000);
	});
});


//Script desplazamiento boton abajo-----------------------
$(document).ready(function () {
	$('.banner__abajo').on('click',function () {
		$('html,body').animate({scrollTop: $(".main").offset().top}, 700);
	});
});
	