// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max = (a,b,c) => {
//     if (a>b & a>c){
//         console.log(a)
//     }
//     else if (b>c & b>a){
//         console.log(b)
//     }
//     else if (c>b & c>a){
//         console.log(c)
//     }
//     else {
//         console.log(`Що ти робиш?`)
//     }
// }

// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (a,b,c) => {
//     if (a<b & a<c) {
//         console.log(a)
//     }
//     else if (b<c&b<a){
//         console.log(b)
//     }
//     else if (c<b&c<a){
//         console.log(c)
//     }
//     else {
//         console.log(`WTF`)
//     }
// }
// створити функцію яка повертає найбільше число з масиву
// let newsArr = [123, 3, 221, 23, 4, 25, 2, 3]
// let numberMax = (arr) => {
//     return Math.max.apply(null,arr)
// }
// console.log(numberMax(newsArr))

// створити функцію яка повертає найменьше число з масиву
// let numberMin = (arr) => {
//     return Math.min.apply(null, arr)
// }
// console.log(numberMin(newsArr))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumArr = (arr) => {
//     let sum = 0
//     for (i=0;i<arr.length;i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sumArr(newsArr))

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arfArr = (arr) => {
//     let sum = 0;
//     for (i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     let argg = sum/arr.length
//     return argg
// }
// console.log(arfArr(newsArr))

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let numbers = (...xxx) => {
//     let max = xxx[0];
//     let min = xxx[0];
//
//     for (let number of xxx) {
//         if (number > max){
//             max = number;
//         }
//         else if (number < min) {
//             min = number;
//         }
//     }
//     console.log(max);
//     return min
// }
// console.log(numbers(12,2,32,31,2,31,2))

// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let randomArr = (arr) => {
//     let xxx = []
//     for (i=0;i<20;i++) {
//         xxx.push(Math.round(Math.random()*100));
//     }
//     return xxx
// }
// console.log(randomArr())

// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomLimit = (limit) => {
//     let xxx = [];
//     for (i=0;i<limit;i++) {
//         xxx.push(Math.round(Math.random()*limit))
//     }
//     return xxx
// }
// console.log(randomLimit(5))

// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let newsarr => (arr) {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//
//
//     return newArr;
// }