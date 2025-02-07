/**
    #Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
*/
let arr;
arr = [ 18, 15, 14, -124, 0, '1', 'lorem', true, false, '0'];
console.log (arr[0]);
console.log (arr[1]);
console.log (arr[2]);
console.log (arr[3]);
console.log (arr[4]);
console.log (arr[5]);
console.log (arr[6]);
console.log (arr[7]);
console.log (arr[8]);
console.log (arr[9]);


/**
    Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
*/
let book1 = {
    title: '500 medicinal plants',
    pageCount: 695,
    genre: 'medic'
}

let book2 = {
    title: 'Dictionary English-Ukrainian',
    pageCount: 464,
    genre: 'reference'
}

let book3 = {
    title: 'Bhagavad Gita',
    pageCount: 765,
    genre: 'religious'
}


/**
    Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
*/
let books1 = {
    title: '500 medicinal plants',
    pageCount: 695,
    genre: 'medic',
    author: [
        {
            name: 'V.Lavrenova',
            age: 56
        },
        {
            name: 'V.Lavrenova',
            age: 56
        }
    ]
}

let books2 = {
    title: 'Dictionary English-Ukrainian',
    pageCount: 464,
    genre: 'reference',
    author: [
        {
            name: 'S.Koval',
            age: 35
        },
        {
            name: 'S.Koval',
            age: 35
        }
    ]
}

let books3 = {
    title: 'Bhagavad Gita',
    pageCount: 765,
    genre: 'religious',
    author: [
        {
            name: 'A.Bgaktivedanta Svami Prabgupada',
            age: 56
        },
        {
            name: 'A.Bgaktivedanta Svami Prabgupada',
            age: 56
        }
        ]
}


/**
    Створити масив з 10 об'єктами, які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
*/
let usersArr = [
    {
        name: 'Gleb Hok',
        username: 'GK',
        password: '12345543'
    },
    {
        name: 'Glory Hok',
        username: 'GK2',
        password: '12344321'
    },
    {
        name: 'Jerry Hok',
        username: 'Jey18',
        password: '1155VV0'
    },
    {
        name: 'Rose Naive',
        username: 'Ruby24s',
        password: '12341678'
    },
    {
        name: 'Hektor Govanny',
        username: 'Hokery',
        password: 'gfryhi9'
    },
    {
        name: "Leann Meyer",
        username: "non",
        password: "67a47a330beb9e9f30a3b2c5"
    },
    {
        name: "Marcella Payne",
        username: "culpa",
        password: "67a47a3349caa2c15a72a046"
    },
    {
        name: "Patrica Valdez",
        username: "excepteur",
        password: "67a47a33d83f0db82250bf7f"
    },
    {
        name: "Horn Rowland",
        username: "ad",
        password: "67a47a338f196dc9b9d82e1a"
    },
    {
        name: "Kimberly Weiss",
        username: "sunt",
        password: "67a47a33cd36a2eae8c9337a"
    },
    {
        name: "Jerry Bowen",
        username: "aute",
        password: "67a47a33348976f7b673b68b"
    }
]
console.log(usersArr[0].password);
console.log(usersArr[1].password);
console.log(usersArr[2].password);
console.log(usersArr[3].password);
console.log(usersArr[4].password);
console.log(usersArr[5].password);
console.log(usersArr[6].password);
console.log(usersArr[7].password);
console.log(usersArr[8].password);
console.log(usersArr[9].password);


/**
    Описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
*/
let weather = [
    {
        day: 'Monday',
        tempMorning: '-3',
        tempAfternoon: '0',
        tempEvening: '-1'
    },
    {
        day: 'Tuesday',
        tempMorning: '-3',
        tempAfternoon: '0',
        tempEvening: '0'
    },
    {
        day: 'Wednesday',
        tempMorning: '-4',
        tempAfternoon: '-1',
        tempEvening: '-1'
    },
    {
        day: 'Thursday',
        tempMorning: '-1',
        tempAfternoon: '0',
        tempEvening: '0'
    },
    {
        day: 'Friday',
        tempMorning: '0',
        tempAfternoon: '1',
        tempEvening: '-1'
    },
    {
        day: 'Saturday',
        tempMorning: '-3',
        tempAfternoon: '-1',
        tempEvening: '-1'
    },
    {
        day: 'Sunday',
        tempMorning: '-4',
        tempAfternoon: '1',
        tempEvening: '0'
    }
]


/**
    Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть
    Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
*/

let someNumber = 111;
let numbersArray = [1, 0, -3];
console.log(someNumber === 0 ? 'Вірно' : 'Невірно');
console.log(numbersArray[0] === 0 ? 'Вірно' : 'Невірно');
console.log(numbersArray[1] === 0 ? 'Вірно' : 'Невірно');
console.log(numbersArray[2] === 0 ? 'Вірно' : 'Невірно');

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Введіть число від 0 до 59:');
if (time < 0) {
    alert('Error.Введіть число від 0 до 59');
} else if (time < 15) {
    alert('first part');
} else if (time < 30) {
    alert('second part');
} else if (time < 45) {
    alert('third part');
} else if (time < 60) {
    alert('four part');
} else {
    alert('Error.Введіть число від 0 до 59');
}


/**
   У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/

const day = 10;
if (day < 10) {
    console.log('first decade');
} else if (day < 20) {
    console.log('second decade');
} else if (day < 31) {
    console.log('third decade');
}


/**
    Cкласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/

let weekDayNumber = +prompt("Щоб отримати розклад\nвведіть номер дня тижня");
let weekSchedule = {
    monday: `Watch preview 1`,
    tuesday: 'Do homework 1',
    wednesday: `Watch preview 2`,
    thursday: `Do homework 2`,
    friday: `Watch preview 3`,
    saturday: `Аttend an English class`,
    sunday: `Visit the church`
}
switch (weekDayNumber)
{
    case 1:
        alert(weekSchedule.monday)
        break;
    case 2:
        alert(weekSchedule.tuesday);
        break;
    case 3:
        alert(weekSchedule.wednesday);
        break;
    case 4:
        alert(weekSchedule.thursday);
        break;
    case 5:
        alert(weekSchedule.friday);
        break;
    case 6:
        alert(weekSchedule.saturday);
        break;
    case 7:
        alert(weekSchedule.sunday);
        break;
}

// Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох.Також потрібно врахувати коли введені рівні числа.

const num1= 3;
const num2 = 10;

if (num1 > num2) {
    console.log(num1);
} else if (num1 === num2) {
    console.log(num1, '=', num2);
} else {
    console.log(num2)
}


/**
Є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
* */

let x = 0;
if(!x) {
    x = 'default'
}


/** З файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
 */

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('super')
}
