// var || let 
//let number = 5;

//console.log("number");

//alert("Держать хвост к верху");

//да или нет?
//let answer = confirm("Есть ли вам 18 лет?");
//let answer = prompt("Есть ли вам 18 лет?");

/*let answers = []; //поместили массив в переменную

answers[0] = prompt("Как ваше имя?", ""); //вторые "" для норм работы в эксплоере
answers[1] = prompt("Как ваша фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

document.write(answers); //используется редко,заменяет все на экране*/

//циклы 

/*let answers = [],
	questions = [
	"Как ваше имя?",
	"Как ваша фамилия?",
	"Сколько вам лет?"
	];

for (let i = 0; i < questions.length; i++) {
	answers[i] = prompt(questions[i])
}

document.write(answers)*/

//УСЛОВИЯ 
/*let age = prompt("Сколько вам лет?", "");

if (age > 18) {
	alert("Вы можете войти!")
} else {
	alert("Рановато еще!")
}*/


//function

/*function humanSayHello(obj) { //obj - аргумент
	document.write("Hello " + obj + "!")
}; //так просто написали функцию, теперь ее надо вызвать

humanSayHello("Vlad"); //здесь передается аргумент в скобках*/

/*function calc(a,b) {
	console.log(a + b)
};

calc(4,5);
calc(6,3);*/


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