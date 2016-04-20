//Script para mostrar el menu en moviles------------------
$(document).ready(function () {
	var flag = 1;
	var menuWidth = $('.nav').width();
	var abrirMenu = $('.nav');
	var wrap = $('.wrap');

	$('.menu__abrir').on('click',function () {
		if (flag == 1) {
			abrirMenu.animate({left: 0},300);
			wrap.animate({opacity: 0.9},200);
			flag = flag + 1;
		}else{
			abrirMenu.animate({left: - menuWidth},300);
			wrap.animate({opacity: 1},200);
			flag = 1;
		}
	});

});

//Script desplazamiento del nav principal-----------------
$(document).ready(function () {
	$('.caract').on('click',function () {
		$('html,body').animate({scrollTop: $(".main").offset().top}, 1000);
	});

	$('.acerca').on('click',function () {
		$('html,body').animate({scrollTop: $(".about").offset().top}, 1000);
	});

	$('.desc').on('click',function () {
		$('html,body').animate({scrollTop: $(".descarga").offset().top}, 1000);
	});

	$('.estruc').on('click',function () {
		$('html,body').animate({scrollTop: $(".estructura").offset().top}, 1000);
	});

	$('.grid').on('click',function () {
		$('html,body').animate({scrollTop: $(".rejilla").offset().top}, 1000);
	});

	$('.desplazamiento').on('click',function () {
		$('html,body').animate({scrollTop: $(".desplaza").offset().top}, 1000);
	});

	$('.responsive').on('click',function () {
		$('html,body').animate({scrollTop: $(".respon").offset().top}, 1000);
	});
});

//Script desplazamiento boton abajo-----------------------
$(document).ready(function () {
	$('.banner__abajo').on('click',function () {
		$('html,body').animate({scrollTop: $(".main").offset().top}, 700);
	});
});
	