// Строгий режим
//"use strict"

// Основні методи рядків
// Довжина рядка length
/*
let someString = `Привіт! Як справи?`;
console.log(someString.length);
*/

// Рядок це масив []
/*
let someString = `Привіт! Як справи?`;
console.log(someString[0]);
*/

// Регістр toUpperCase(), toLowerCase()
/*
let someString = `Привіт! Як справи?`;
console.log(someString.toUpperCase());
console.log(someString.toLowerCase());
*/

// Пошук - методы includes, startsWith, endsWith
/*
let someString = `Привіт! Як справи?`;
let someStringLower = someString.toLowerCase();
// пошук в усьому рядку
console.log(someStringLower.includes('рив'));
// Починається з
console.log(someString.startsWith('Прив'));
// Закінчується на
console.log(someString.endsWith('?'));
*/

// Отримання частини рядка, метод slice(start, end)
/*
let someString = `Привіт! Як справи?`;
let someNewString = someString.slice(2, 6);
console.log(someNewString);
*/

// Пошук та заміна replace
/*
let someString = `#Привіт! Як справи?`;
someString = someString.replace('#', '');
console.log(someString);
Детальніше: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/

// Основні методи чисел

// Math.floor - Округлення в меньшу сторону
/*
let someNotRoundNum = 25.9;
console.log(Math.floor(someNotRoundNum));
*/

// Math.ceil - Округлення в більшу сторону
/*
let someNotRoundNum = 25.001;
console.log(Math.ceil(someNotRoundNum));
*/

// Math.round - Округлення до ближнього цілого
/*
let someNotRoundNum = 25.4;
console.log(Math.round(someNotRoundNum));
*/

// Math.abs - Модуль числа
/*
let someNotRoundNum = -25.9;
console.log(Math.abs(someNotRoundNum));
*/

// Math.random()
/*
console.log(Math.random());
*/

// Math.max(a, b, c...) / Math.min(a, b, c...)
/*
console.log(Math.max(1, 2, -3));
console.log(Math.min(1, 2, -3));

let numMax = Math.max(1, 2, -3);
console.log(numMax);
*/

// parseInt и parseFloat
/*
let someVar = `35.5px`;
let someNum = parseFloat(someVar);
console.log(someNum);
*/

// Основні оператори
// Майже всі оператори автоматично
// змінюють тип даних на number
/*
let varOne = "10";
let varTwo = "3";
*/
// Оператор мінус
/*
let varSumm = varOne - varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/
// Оператор ділення
/*
let varSumm = varOne / varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/
// Оператор множення
/*
let varSumm = varOne * varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Взяття залишку від ділення
/*
let varSumm = varOne % varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Оператор додавання (!!! Тільки цей оператор не змінює тип даних)
/*
let varOne = "10";
let varTwo = 3;
let varSumm = varOne + varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

// Унарний оператор додавання
// Використовується тільки з
// одним операндом (учасником обчислення)
/*
let someNum = "5";
let result = +someNum;
console.log(result);
*/
/*
let varOne = "10";
let varTwo = "3";
let varSumm = +varOne + +varTwo;
console.log(varSumm);
*/

// Інкремент / декремент
// Працює лише зі змінними
/*
let someNumOne = 5;
let someNumTwo = 3;
console.log(++someNumOne);
console.log(--someNumTwo);
*/

// Приорітетність операторів
/*
let results = 2 + 3 * 10 / +"5";
*/
/*
let num = 5;
let results = 2 + 3 * 10 / ++num;
*/
/*
console.log(results);
*/

// Оператори порівняння
// < > == !=
// Раджу === !==
/*
let result = 6 === "6";
console.log(result);
*/
/*
// Оператор присвоєння =
let someNum = 5;
*/

// Логічні оператори
// ! || &&
// Оператор "ні" !
/*
let result = !"";
console.log(Boolean(result));
*/

// Оператор "або" ||
/*
let result = "" || 0;
console.log(result);
*/

// Оператор "та" &&
/*
let result = 1 && 5;
console.log(Boolean(result));
console.log(result);
*/

// Умовне вітвлення
/*
// Синтаксис
if( умова ){
	// Код виконоється
	// тільки якщо умова вертає true
}else if( умова #2 ){
	// Код виконоється
	// тільки якщо умова #2 вертає true
}else{
	// Код виконоється
	// тільки якщо усі умови вертають false
}
*/
/*
let varOne = 10;
let varTwo = 10;

if (varOne > varTwo) {
	let result = varOne + varTwo;
	console.log(result);
} else if (varOne === 10) {
	console.log(`varOne = 10`);
} else {
	console.log('else');
}
console.log('..продовження коду');
// ...продовження коду
*/
/*
let varOne = "1";
let varTwo = 2;
let varThree = 3;
let varFour = 4;
*/
/*
if (varOne > 3 || varTwo === 2 && varThree < 4 || varFour > 6) {
	// Код виконоється
	// тільки якщо умова вертає true
	console.log('Умова is true');
}
*/
/*
if (varOne.length === 1) {
	console.log('True');
}
*/

// Оператор умови ?

// Синтаксис
// умова ? значення якщо умова true : значення якщо умова false

/*
let someVar = 10 > 5 ? "10 більше 5" : "10 меньше 5";

if (10 > 5) {
	let someVar = "10 більше 5";
} else {
	let someVar = "10 меньше 5";
}
*/

// Цикл For
// let someString = "Привіт! Як справи?";
/*
console.log(someString[0]);
console.log(someString[1]);
console.log(someString[2]);
console.log(someString[3]);
console.log(someString[4]);
console.log(someString[5]);
console.log(someString[6]);
*/

// Синтаксис
/*
for(початок; умова закінчення; крок){
	// код виконується
	// на кожному колі циклу
}
*/
/*
console.log(`К-сть символів: ${someString.length}`);

for (let i = 0; i < someString.length; ++i) {
	console.log(someString[i]);
}
*/

let userCounter = 0;
let newUsers = userCounter++;
console.log(newUsers);
console.log(userCounter);

console.log(!false && 11 || 18 && !'');

let nama = 0;
console.log(nama ?? "Без имени")

// lesson_7=======================================
// #1
let nume = 0;
while (nume < 6) {
	console.log(nume);
	nume++;
}

//#2
let numa = 8;
while (numa) {
	console.log(numa);
	numa--;
}

//#3
for (let numi = 0; numi < 3; numi++) {
	console.log(`Число: ${numi}`);
}
//через while
let numi = 0;
while (numi < 3) {
	console.log(`Число: ${numi}`);
	numi++;
}

//#4 size=1 -> stop
for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		console.log(size);
		if (size == 1) break;
	}
}

// lesson_10=================================
// #1
let sourseNum = 1.005 + Number.EPSILON;
let numOne = Math.round(sourseNum * 100) / 100;
console.log(numOne);

//#2
// value = "135.58px"
let value = parseFloat("135.58px");
console.log(value);
console.log(typeof value);

//#3
let valui = 58 + "freelancer";
if (valui == NaN) {
	console.log(Number(valui));
	console.log(isNaN(valui));
}

//#4
console.log(Math.max(10, 58, 39, -150, 0));

//#5
console.log(Math.floor(58.858))

// lesson_11======================================
// #1
let fls = "фрілансер";
let text = `Привіт! Я ${fls}`;
console.log(text);

//#2
let taxt = "фрілансер";
console.log(taxt[5]);

//#3
let vale = 58 + "Фрилансер";
let textw = 123 + "456";
console.log(textw);

//#4
let texta = 'фрілансер';
console.log(texta.toUpperCase());

//#5
let textq = 'фрілансер';
console.log(textq.slice(3, 6));

//#6
let texts = 'фрілансер';
console.log(texts.includes('лан', 4));