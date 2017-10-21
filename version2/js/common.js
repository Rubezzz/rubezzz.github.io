$(document).ready(function () {
	slider();
	table_popup();
	tabs();
	popup_login();
});

//СЛАЙДЕР
function slider() {
	$("#content-slider").lightSlider({
		loop: true,
		keyPress: true,
		slideMargin: 30
	});
}

//сплывающие окна в блоке Квартиры в продаже
function table_popup() {
	var arr = [
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "34.40", "1 200 000"],
				 ["Двухкомнаятная", "Свободна", "img/plan_hover.png", "44.40", "1 500 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "55.40", "1 300 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "35.40", "1 200 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "45.40", "1 100 000"],
				 ["Двухкомнаятная", "Свободна", "img/plan_hover.png", "85.40", "1 600 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "68.40", "1 700 000"],
				 ["Двухкомнаятная", "Свободна", "img/plan_hover.png", "78.40", "1 900 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "78.40", "1 700 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "45.40", "1 100 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "65.40", "1 000 000"],
				 ["Двухкомнаятная", "Свободна", "img/plan_hover.png", "34.40", "1 500 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "55.40", "1 600 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "34.40", "1 700 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "38.40", "1 800 000"],
				 ["Однокомнатная", "Свободна", "img/plan_hover.png", "38.40", "1 800 000"]
				];

	var td = $('.table__td');

	td.hover(function () {
		for (var i = 0; i < td.length; i++) {
			if (td[i] == this) var arr_i = i;
		}

		$(this).
		children('.popup-for-table').
		html('<h1 class="popup-for-table_h1">' + arr[arr_i][0] + ' квартира</h1>' +
			'<h2 class="popup-for-table_h2">' + arr[arr_i][1] + '</h2>' +
			'<img class="popup-for-table__img" src="' + arr[arr_i][2] + '" alt="img">' +
			'<span>' + arr[arr_i][3] + ' м2</span>' +
			'<span class="popup-for-table__text-r">' + arr[arr_i][4] + ' Р</span>');

		$('.popup-for-table_h1').css({
			'font-size': '16px'
		});
		$('.popup-for-table_h2').css({
			'font-size': '14px'
		});
	});
}


//табы
function tabs(){
	
	var section = $('.docs-section');
	var elem = $('#navigation-docs .navigation__elem');
	
	section.hide();
	section.eq(0).show();
	
	elem.click(function(){
		for (var i = 0; i < elem.length; i++) {
			if (elem[i] == this) var arr_i = i;
		}
		elem.removeClass('navigation__elem_selected_orange');
		elem.eq(arr_i).addClass('navigation__elem_selected_orange');
		section.hide();
		section.eq(arr_i).show();
	});
}

//всплывающее окно авторизации
function popup_login(){
	$(".footer-main__login").magnificPopup();
}
