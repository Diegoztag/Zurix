//Script para mostrar el menu-----------------------
$(document).ready(function() {

	var flag = 1;

	$('.menu__abrir').on('click',function () {
	if (flag == 1) {
			$('.menu__ul').slideUp(250);
			flag = flag + 1;
		}else{
			$('.menu__ul').slideDown(250);
			flag = 1;
		}
	});		
});

//Script desplazamiento boton abajo-----------------------
$(document).ready(function () {
	$('.banner__abajo').on('click',function () {
		$('html,body').animate({scrollTop: $(".main").offset().top}, 700);
	});
});
	