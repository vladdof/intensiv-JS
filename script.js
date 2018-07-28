

function myFirstApp(name, age) {

	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills() {
		let skills = [
			"HTML",
			"CSS",
			"GIT",
			"Пайка BGA"
		]; //то чем владеешь html/css/js 

		for (let i = 0; i < skills.length; i++) {
			//Я владею html <br> три раза
			document.write(skills[i] + "<br>")
		}
	}

	

	function checkAge() {
		let age = prompt("Сколько тебе лет?", "")
		if (age > 18) {
			//вывести сообщение
			//alert("Пенсия не загорами, парниша!")
			showSkills();
		} else {
			//какое то действие
			alert("Не ной!");
			document.write("Приходи смотреть программу, когда будет больше 18 лет!");
		}
	}
	checkAge();

	function calcPow(num) {
		//квадрат в консоль. написать функционал
		console.log(num*num)
	}
	calcPow(4);

}

myFirstApp("Vlad");