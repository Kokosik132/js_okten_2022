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
//     console.log(arr[i])
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
