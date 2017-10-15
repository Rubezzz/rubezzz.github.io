$(document).ready(function () {
	//СЛАЙДЕР
	$("#content-slider").lightSlider({
		loop: true,
		keyPress: true,
		slideMargin: 30
	});

	//ТАБЫ
	var box1 = $("#dokumenti__box1");
	var box2 = $("#dokumenti__box2");
	var box3 = $("#dokumenti__box3");
	var box4 = $("#dokumenti__box4");
	var all = $(".dokumenti__docs");

	var section1 = $("#dokumenti__section__elem1");
	var section2 = $("#dokumenti__section__elem2");
	var section3 = $("#dokumenti__section__elem3");
	var section4 = $("#dokumenti__section__elem4");
	var allSection = $(".dokumenti__section__elem");

	box2.hide();
	box3.hide();
	box4.hide();

	section1.click(function () {
		all.hide();
		allSection.removeClass("section_selected");
		box1.show();
		section1.addClass("section_selected");
	});
	section2.click(function () {
		all.hide();
		allSection.removeClass("section_selected");
		box2.show();
		section2.addClass("section_selected");
	});
	section3.click(function () {
		all.hide();
		allSection.removeClass("section_selected");
		box3.show();
		section3.addClass("section_selected");
	});
	section4.click(function () {
		all.hide();
		allSection.removeClass("section_selected");
		box4.show();
		section4.addClass("section_selected");
	});
	
	//ВСПЛЫВАЮЩАЯ ФОРМА ДЛЯ РИЭЛТОРОВ
	$(".footer__login").magnificPopup();

});
