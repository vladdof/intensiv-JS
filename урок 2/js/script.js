let chooseBtn = document.getElementById('choose'),
	receiveBtn = document.getElementById('receive'),
	heading = document.getElementsByTagName('h2')[0], //[0]первый тег из всего документа
	nameInput = document.getElementsByClassName("contactform_name")[0],
	phoneInput = document.querySelector('.contactform_phono'), //querySelector выбир.первый подходящий
	mailInput = document.querySelectorAll('.contactform_mail')[0],
	modal = document.querySelector('.modal'),
	close = document.querySelector('.close'),
	text = document.getElementsByName('message')[0];

function hover() {
	heading.textContent = "Действительно Все!";
};

function out() {
	heading.textContent = "Все включено!";
};

//heading.onmouseenter = hover; //без () у функц.потому что она готова выше.

//но самый правильный вариант 
heading.addEventListener("mouseenter", hover);//удобно что в будущем можно его убрать. и добавлять в будущем другие функции
heading.addEventListener("mouseleave", out);

receiveBtn.addEventListener('click', function() {
	modal.style.display = "block"
});

close.addEventListener('click', function() {
	modal.style.display = "none"
});

nameInput.addEventListener('input', function() {
	text.value = "Меня зовут " + nameInput.value + ". И я хочу спросить:";

	if (nameInput.value == "") { //сравниваем
		text.value = "" //присваеваем
	}
});
