// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let newarr = [];
// for (let i = 2, j = 0; i <= 50;j++, i += 2) {
//     newarr[j] = i
// }
// console.log(newarr)

// for (let i = 1, j = 0; i <= 50; j++, i += 2){
// newarr[j] = i
// }
// console.log(newarr)

// for (let i = 0; i <= 20; i++) {
//    newarr.push(Math.round(Math.random()*20))
// }
// console.log(newarr)

// for (let i = 0; i < 20; i++) {
//     newarr.push(Math.round(Math.random()*(732 - 8) + 8))
// }
// console.log(newarr)

// 2. Вивести за допомогою console.log кожен третій елемен
//
// let newsarr = [23, 123, 1, 24, 12, 34, 3, 5, 28, 523, 4, 234, 2];
// for (let i = 2; i < newsarr.length; i+=3 ) {
//     console.log(newsarr[i])
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (i = 2; i < newsarr.length; i += 3) {
//     if (newsarr[i] % 2 === 0) {
//         console.log(newsarr[i])
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let sasd = []
// for (i = 2; i < newsarr.length; i += 3) {
//
//     if (newsarr[i] % 2 === 0) {
//
// sasd.push(newsarr[i])
//     }
// }
// console.log(sasd)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67]
// for (i=0;i<arr.length;i++){
//     console.log(arr[0],arr[5],arr[6])
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arrs = [100,250,50,168,120,345,188];
// let sumarr = (arr) => {
//     let sum = 0;
//     for (i=0;i<arr.length;i++) {
//         sum =+ arr[i]
//     }
//     return sum
// }
// console.log(sumarr(arrs));

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let sad = [123, 7, 54, 57, 8, 78, 75, 32, 4];
// let newsarr = []
// for (i = 0; i < sad.length; i++){
//     let numbers = sad[i] * 5
// newsarr.push(numbers)
// }
// console.log(newsarr)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let newarr = [12, `fasak`, true, false, 232, 1488, `yes`];
// let arrrs = []
// for (i = 0; i < newarr.length; i++) {
//     if (typeof newarr[i] === "number") {
//         let numbers = newarr[i];
//         arrrs.push(numbers)
//     }
// }
// console.log(arrrs)

// - Дано 2 масиви з рівною кількістю об'єктів.
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// ///////////////////////////
// let newsArr = []
// for (let userWithIdElement of usersWithId) {
//     if (userWithIdElement.id === 1)
//         newsArr.push(`id: ${userWithIdElement.id} name: ${userWithIdElement.name} age:${userWithIdElement.age} status:${userWithIdElement.status}`)
// }
//
// for (let citiesWithIdElement of citiesWithId) {
//     if (citiesWithIdElement.user_id === 1)
//         newsArr.push(`user id: ${citiesWithIdElement.user_id} country: ${citiesWithIdElement.country} city: ${citiesWithIdElement.city}`)
// }
// console.log(newsArr)
//
//
// for (let userWithIdElement of usersWithId) {
//     if (userWithIdElement.id === 2)
//         newsArr.push(`id: ${userWithIdElement.id} name: ${userWithIdElement.name} status: ${userWithIdElement.status}`)
// }
// for (let citiesWithIdElement of citiesWithId) {
//     if (citiesWithIdElement.user_id === 2)
//         newsArr.push(`user id: ${citiesWithIdElement.user_id} country: ${citiesWithIdElement.country} city: ${citiesWithIdElement.city}`)
// }
//
//
// for (let userWithIdElement of usersWithId) {
//     if (userWithIdElement.id === 3)
//         newsArr.push(`id: ${userWithIdElement.id} name: ${userWithIdElement.name} status: ${userWithIdElement.status}`)
// }
// for (let citiesWithIdElement of citiesWithId) {
//     if (citiesWithIdElement.user_id === 3)
//         newsArr.push(`user id: ${citiesWithIdElement.user_id} country: ${citiesWithIdElement.country} city: ${citiesWithIdElement.city}`)
// }
//
// for (let userWithIdElement of usersWithId) {
//     if (userWithIdElement.id === 4)
//         newsArr.push(`id: ${userWithIdElement.id} name: ${userWithIdElement.name} status: ${userWithIdElement.status}`)
// }
// for (let citiesWithIdElement of citiesWithId) {
//     if (citiesWithIdElement.user_id === 4)
//         newsArr.push(`user id: ${citiesWithIdElement.user_id} country: ${citiesWithIdElement.country} city: ${citiesWithIdElement.city}`)
// }


// Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr = [23, 6, 54, 77, 43, 98, 6, 76, 88, 1];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         console.log(arr[i])
//     }
// }

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr = [23, 6, 54, 77, 43, 98, 6, 76, 88, 1];
// let newarr = []
// for (let i = 0; i < arr.length; i++) {
//     newarr.push(arr[i])
// }
// console.log(newarr)

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let element = [`a`,`b`,`c`];
// let elem = []
// for (i=0;i<1;i++){
//     console.log((`${element[0]}${element[1]}${element[2]}`))
// }

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let i = 0;
// while (i<1){
//     console.log((`${element[0]}${element[1]}${element[2]}`))
//     i++
// }

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// for (let string of element) {
//     console.log((`${element[0]}${element[1]}${element[2]}`))
// }
//
//