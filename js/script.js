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

//menu fixed------------------------------

$(document).ready(function() {

	$(window).on('scroll',function(){

		var altoHeader = $('.head-main').height();

		if ($(window).scrollTop() < (altoHeader)) {
			$('.menu__fix2').slideUp(300);
		}else{
			$('.menu__fix2').slideDown(300);
			$('.menu__fix2').css({'visibility':'visible'});

		}		
	});
});
	
//boton ir arriba------------------------------

$(document).ready(function() {

	var altoHeader = $('.head-main').height();

	$('.btn-subir').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 1000);
	});
 
	$(window).scroll(function(){
		if( $(window).scrollTop() > (altoHeader)){
			$('.btn-subir').fadeIn(500);
		} else {
			$('.btn-subir').fadeOut(500);
		}
	});
});