window.addEventListener('DOMContentLoaded', function() { //вешаем обработчик событий на виндов.глобальный обработчик
	//получаем инфу для работы
	let products = document.querySelectorAll('.product'),
	    buttons = document.getElementsByTagName('button'),
	    open = document.getElementsByClassName('open')[0];
	//функция для создания корзины
	function createCart() { 
		//создаем элементы для корзины
		let cart = document.createElement('div'),
			field = document.createElement('div'),
			heading = document.createElement('h2'),
			close = document.createElement('button');

		//добавили классы нашим элементам
		cart.classList.add('cart');
		field.classList.add('cart-field');
		close.classList.add('close');

		//добавили текст
		close.textContent = "Закрыть";
		heading.textContent = "В нашей корзине: ";

		//вставляет наш элемент в конец body
		document.body.appendChild(cart); 
		cart.appendChild(heading);
		cart.appendChild(field);
		cart.appendChild(close);
	} 

	createCart();

	let field = document.querySelector('.cart-field'),
		cart = document.querySelector('.cart'),
		close = document.querySelector('.close');

	//перебираем все кнопки
	for ( let i = 0; i < buttons.length; i++) {

		//вешаем обработчик клик на каждую из кнопок
		buttons[i].addEventListener('click', function() {

			//создали копию
			let item = products[i].cloneNode(true), //глубокое клонирование
				btn = item.querySelector('button');

			//btn.remove();
			field.appendChild(item);
			//products[i].remove();
			products[i].style.display = 'none';
			btn.textContent = "Удалить!";

			btn.addEventListener('click', function() {
				item.remove();
				products[i].style.display = 'block';
			});
		});
	}

	function openCart() {
		cart.style.display = 'block';
	};
	function closeCart() {
		cart.style.display = 'none';
	};

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);
});