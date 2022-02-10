// створити функцію яка приймає три числа та виводить найменьше. (Без  )
// function number(a, b, c) {
//     if (a < b & a < c) {
//         console.log(a)
//     } else if (b < a & b < c) {
//         console.log(b)
//     } else if (c < a & c < b) {
//         console.log(c)
//     } else {
//         console.log(`Немає одного найменьшого числа`)
//     }
// }
// number(12,12,13)
// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function number(a,b,c) {
//     if (a>b&a>c){
//         console.log(a)
//     }
//     else if (b>c&b>a){
//         console.log(b)
//     }
//     else if (c>b&c>a){
//         console.log(c)
//     }
//     else {
//         console.log(`Немає одного найбільшого числа`)
//     }
// }

// створити функцію яка повертає найбільше число з масиву

// let momo = [12, 32, 12, 33, 111, 0]
//
// function arr(xxx) {
//     return Math.max.apply(null, xxx)
// }
// console.log(arr(momo))

// створити функцію яка повертає найменьше число з масиву

// function arr(xxx) {
//     return Math.min.apply(null, xxx)
// }
// console.log(arr(momo))

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function arr(xxx) {
//     let sum = 0;
//     for (i=0;i<xxx.length;i++){
//         sum += xxx[i];
//     }
//     return sum
// }
// arr(momo)

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function arr(xxx) {
//     let sum = 0;
//     for (i=0;i<xxx.length;i++){
//         sum += xxx[i];
//     }
//     let arf = sum / xxx.length
//     return arf
//     }
//     arr(momo)

// створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function news(xxx) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (let number of arguments) {
//         if (number > max) {
//             max = number;
//         }
//         if (number < min) {
//             min = number;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// console.log(news(23, 222, 1577, 534, 4, 3))

// створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// (Math.round(Math.random()*100))

// function newArr(xxx) {
//     let cxc = [];
//     for (let i = 0; i < xxx; i++) {
//         cxc.push(Math.round(Math.random()*100))
//     }
//     return cxc;
// }
//
// document.write(newArr(12))

// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function newArr(xxx,limit) {
//     let cxc = [];
//     for (let i = 0; i < xxx; i++) {
//         cxc.push(Math.round(Math.random()*limit))
//     }
//     return cxc;
// }
//
// document.write(newArr(12,12))

// Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let news = [1, 2, 3, 4, 2323, 6, 7, 8];
//
// function reverse(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
//         newArr[ri] = arr[i];
//     }
//
//     return newArr;
// }
// console.log(reverse(news))