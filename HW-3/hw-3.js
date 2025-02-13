/**
 * #y7crMeFwHcS. За допомогою циклу for і document.write() вивести 10 блоків div з довільним текстом всередині
 */

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello word ${(Math.random() + 1).toString(36).substring(7)}</div>`);
}

/**
 * #TYj7ncx. За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
 */

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello word ${i}</div>`);
}

/**
 * #uzkt71dp. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 */
let i = 0;
while (i < 10) {
    document.write(`<div>Lorem ${(Math.random() + 1).toString(36).substring(7)}</div>`);
    i++;
}

/**
 #OeT7t3uUMFi. За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
 */
let k = 0;
while (k < 10) {
    document.write(`<div>Lorem ${(k)}</div>`);
    k++;
}

/**
 #vLSZKMlO. Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
 Масив: let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
 ШАБЛОН:
 <ul>
 <li>ITEM OF ARRAY</li>
 <!--
 і тд інші об'єкти масиву
 ...
 ...
 ...
 -->
 </ul>
 замість 'ITEM OF ARRAY' підставити елемент з масиву щоб отримати цілий список з даними з масиву
 */

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>${listOfItems[i]}</li>`);
}
document.write(`</ul>`);

/**
 * #Hdjws7E.Використовуючи дані з масиву, за допомоги document.write та циклу побудувати структуру по шаблону.Великими літерами прописані властивості об'єкту, які потрібно впровадити в шаблон.

 let products = [
 {
 title: 'milk',
 price: 22,
 image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
 },
 {
 title: 'juice',
 price: 27,
 image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
 },
 {
 title: 'tomato',
 price: 47,
 image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
 },
 {
 title: 'tea',
 price: 15,
 image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
 },
 ];

 ШАБЛОН
 <div class="product-card">
 <h3 class="product-title">TITLE. Price - PRICE</h3>
 <img src="IMAGE" alt="" class="product-image">
 </div>
 Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
 */

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Planta%C3%A7%C3%A3o_de_Ch%C3%A1_Gorreana%2C_Camellia_sinensis%2C_Ribeira_Grande%2C_ilha_de_S%C3%A3o_Miguel%2C_A%C3%A7ores.JPG'
    },
];


for (let k of products) {
    document.write(
        `<div class="product-card">
            <h3 class="product-title">${k.title} <b>${k.price}$</b></h3>
            <img  src="${k.image}" alt="${k.title}" />
        </div>`
    );
}

/**
 * #4WrHwFTEop0. Є масив:
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
за допомогою циклу вивести:
    - користувачів зі статусом true
- користувачів зі статусом false
- користувачів які старші за 30 років
 */
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]
const usersLength = users.length;
document.write('<div class="users">');
document.write('<h4>Users with status true</h4>');
for (let index = 0; index < usersLength; index++) {
    if (users[index].status) {
        document.write(`<div>${users[index].name}</div>`);
    }
}
document.write('<h4>Users with status false</h4>');
for (let index = 0; index < usersLength; index++) {
    if (!users[index].status) {
        document.write(`<div>${users[index].name}</div>`);
    }
}
document.write('<h4>Users older 30</h4>');
for (let index = 0; index < usersLength; index++) {
    if (users[index].age > 30) {
        document.write(`<div>${users[index].name}</div>`);
    }
}
document.write('</div>');




