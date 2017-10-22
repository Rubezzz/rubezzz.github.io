//Реализация падения снежинок с использованием рандомных чисел

//функция, вызвваемая после загрузки страницы
window.onload = function () {
	var click = false;
	//обработчик нажатия кнопки "снег"
	$("#blue").click(function () {
		//создаем объект с рандомными значениями при каждом нажатии. Эти рандомные значения используются для всех экземпляров снежинок.
		randomSnow = {
			//префикс для id изображения
			id: 0,
			//метод возврящяет префикс + 1
			nextID: function () {
				return this.id++;
			},
			//рандомное значения для адреса изображения снежинки
			url: function () {
				return Math.floor(Math.random() * 3);
			},
			//рандомная позиция снежинки
			posX: function () {
				return Math.floor(Math.random() * (($("#content").width()) + 400));
			},
			//рандомный угол для всех снежинок
			koefUgla: Math.floor(Math.random() * (1100 + 500)) - 500,
		};
		//присваиваем переменным ссылки на функции и обнуляем значение счетчика i
		var makeSnow = makeOrDeleteSnow("make", 0);
		var deleteSnow = makeOrDeleteSnow("delete");
		var deleteAll = makeOrDeleteSnow("deleteAll");
		//если кнопка уже была нажата и нажата еще раз
		if (click) {
			//вызываем функцию для удаления объектов снежинок и удаление их из DOM
			deleteAll();
		} else {
			//устанавливаем вызов функций появления снежинок и удаления уже упавших ненужных через интервал времени
			var interval1 = setInterval(makeSnow, 500);
			var interval2 = setInterval(deleteSnow, 4000);
			//меняем фон блока контенкта
			$("#content").css("background-color", "black");
		}
		click = true;
	});
}
//используем замыкание, чтобы не создавать глобальне переменные
function makeOrDeleteSnow(flag, I) {
	var i = I;
	var snow = new Array();
	//функция создания обектов для снежинок и вызов их методов для респауна снежинок и их падения
	function sneg() {
		var j = i + 15;
		for (i; i < j; i++) {
			snow[i] = new Snow(randomSnow.url(), randomSnow.posX(), randomSnow.nextID(), randomSnow.koefUgla);
			snow[i].createSnow();
			snow[i].fall();
		}
	}
	//функция удаления старых снежинок
	function deleteSnow() {
		var parent = document.querySelector("section");
		var elem = document.querySelectorAll("section img");
		for (var i = 0; i < (snow.length - 75); i++) {
			delete snow[i];
		}
		for (var i = 0; i < (elem.length - 75); i++) {
			parent.removeChild(elem[i]);
		}
	}
	//функция для полного удаления снежинок, используемя при многократном нажатии одной погоды
	function deleteAll() {
		for (var i = 0; i < snow.length; i++) {
			delete snow[i];
		}
		$("#content").empty();
	}
	//возврящаем нужную функцию при передаче нужного аргумента
	if (flag == "make") {
		return sneg;
	}
	if (flag == "delete") {
		return deleteSnow;
	}
	if (flag == "deleteAll") {
		return deleteAll;
	}

}
//конструктор для создания объектов снежинок
function Snow(imgUrl, posX, id, koefUgla) {
	this.imgUrl = imgUrl;
	this.posX = posX;
	this.id = id;
	this.koefUgla = koefUgla;
	//А эти рандомные значения использоются для каждого отдельного экземпляра снежинки
	this.width = Math.floor(Math.random() * (50 - 25)) + 25;
	this.smeschenieUgla = Math.floor(Math.random() * 200);
	this.speed = Math.floor(Math.random() * (3000 - 1800)) + 1800;
}
//используем наследование через прототипы для методов, потому что они одинаковые для всех экземпляров
//метод для респауна снежики на странице с рандомными координатами по Х и рандомными размерами
Snow.prototype.createSnow = function () {
	$("#content").append("<img id='image" + this.id + "' src='img/sneg" + this.imgUrl + ".png'>");
	$("#image" + this.id).css("left", this.posX).css("width", this.width);
};
//метод, реализующий падение снежинок так же с рандомными значениями
Snow.prototype.fall = function () {
	$("#image" + this.id).animate({
		top: ($("#content").height() + 50),
		left: this.posX - this.koefUgla + this.smeschenieUgla
	}, this.speed);
};
