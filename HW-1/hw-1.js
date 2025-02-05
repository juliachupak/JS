// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false. Вивести кожну змінну за допомогою: console.log

let a='hello';
let b='owu';
let c='com';
let d='ua';
let e=1;
let f=10;
let g=-999;
let h=123;
let i=3.14;
let j=2.7;
let l=16;
let m=true;
let n=false;
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(j)
console.log(l)
console.log(m)
console.log(n)

// Cтворити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName, middleName, lastName;
firstName = 'Julia';
middleName = 'Anatoliivna';
lastName = 'Chupack';
let person = firstName + " " + middleName + " " + lastName;
console.log(person);

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль. let a = 100; let b = '100'; let c = true;

let a1 = 100;
let b1 = '100';
let c1 = true;
console.log('type for a1:', typeof a1);
console.log('type for b1:', typeof b1);
console.log('type for c1:', typeof c1);

// За допомогою 3х різних prompt() отримати 3 слова, які являються вашими Ім'ям, По-Батькові та роками та вивести в консоль

let name = prompt('Введіть ваше імʼя:', '');
let middleName1 = prompt('Введіть ваше імʼя по-батькові:', '');
let firstName1 = prompt('Введіть ваше прізвище:', '');
console.log(name, middleName1, firstName1);





