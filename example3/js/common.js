$(document).ready(function () {
	checkImg();
	showRate();
	pushRate();
	progress();
});

//вывод текущей оценки
function showRate() {
	$('.rating').each(function (index) {
		var rating = $(this).attr('data-rating');

		for (var i = 4; i > 4 - rating; i--) {
			$(this).children('.rating__item').eq(i).addClass('rating__item_active');
		}
	});
}

//выставление оценки
function pushRate() {
	$('.rating').click(function (event) {
		$(this).children().removeClass('rating__item_active');
		$(event.target).nextAll('i').addClass('rating__item_active');
		$(event.target).addClass('rating__item_active');
		$(this).children('.rating__text').html("Ваша оценка: ");
		$(this).off();

		var newRating = $(event.target).attr('data-rate');
		//Передаем новую оценку на сервер аяксом
		$.ajax({
			url: 'файл.php',
			type: 'POST',
			cache: false,
			data: {
				'newRating': newRating
			},
			dataType: 'html',
		});
	});
}

//если какое-либо изображение не загрузилось, показываем стилизованный альтернативный текст
function checkImg() {

	$('.twit__img').each(function (index, img) {
		
		if (!img.isLoaded()) {
			$('.twit__img').hide();
			$('.twit__content-brow div').css({'display':'inline-block'});
			console.log('Не загрузилось изображение: ' + img.getAttribute('alt'));
		}
	});
}

//метод для проверки загружено изображение или нет
HTMLImageElement.prototype.isLoaded = function () {

	if (typeof this.naturalWidth == 'number' && typeof this.naturalHeight == 'number')
		return !(this.naturalWidth == 0 && this.naturalHeight == 0);

	else if (typeof this.complete == 'boolean')
		return this.complete;

	else
		return true;
};

//прописываем текущее состояние прогресс бара в процентах
function progress(){
	var progressProc = ($('.progress__line').width() / $('.progress__line').parent().width() * 100).toFixed();
	
	$('.progress__text').html(progressProc + '%');
}
