// Examen JavaScript Amaliy savollar 
// 1-savol Arifmetik operatorla
//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!
// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

alert('Остаток от 5/2 = ' + 5%2);



// 2-savol  Math metodlari
// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring
// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

let random = Math.random()*10;
alert(Math.round(random));



// 3-savol Math metodlari
// 12.510 sonini butun songa aylantiring! 
// сделать число 12.510 целым
// ответ должен выйти 12

// javob: 12 chiqishi kerak!

let floor = Math.floor(12.510);
alert(floor);



// 4-savol function
// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.
// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 


let text = "MARS IT SCHOOL";
alert(text.length);



// 5-savol for loop
// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!
// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

let text2 = "MARS IT SCHOOL";
console.log(text2.repeat(10));


// 6-savol Array methods
// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]
// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring
// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering

let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ];
let ism = ["y", "u", "s", "u", "f"]
let ltr = [];
for (let letter of ism) {
    if (harflar.includes(letter)) { // Проверяем, есть ли буква из имени в массиве "harflar"
        ltr.push(letter); // Если есть, добавляем её в "ltr"
    }
}
console.log(ltr.join(""))



// 7-savol if else
// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak
// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

let age = prompt("Введите возраст:")
if (age>18) {
    console.log("Siz balag'ot yoshiga yetgansiz")
} else if (age<18) {
    console.log("siz balog'at yoshiga yetmagansiz")
} else {
    console.log("balog'at yoshingiz muborak")
}



// 8-savol String metodlari vs Array metodlari
// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring
// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

let userName = prompt('Введите свое имя:');
let userN = userName.split("").reverse().join("");
console.log("Ваше имя наоборот: " + userN);

// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering

let body = document.body;
let dname = document.createElement('h1');
dname.textContent = prompt("Введите имя:");
let dage = document.createElement('h1');
dage.textContent = prompt("Введите ваш возраст:");
body.appendChild(dname);
body.appendChild(dage);
body.style.backgroundColor = 'blue';
dname.style.color = 'yellow';
dage.style.color = 'yellow';



// 10-savol Array metodlari
// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// shu arraydagi juft sonlarni console ga chiqaring
// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num2 = [];
for (let num of sonlar) {
    if (num%2==0) {
        num2.push(num);
    };
};
console.log(num2);