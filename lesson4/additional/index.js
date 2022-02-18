// створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function newsarg(...xxx) {
//     for (let i = 0; i < xxx.length; i++) {
//         if (xxx.length < 2) {
//             return xxx[i]
//         }
//         else if (xxx.length > 1){
//             return  xxx[0] + xxx[1]
//         }
//     }
// }
//
// console.log(newsarg(12,12))

// створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let a1 = [1,2,3,4];
// let a2 = [2,3,4,5];
// function sumArrIndex(arr1, arr2) {
//     let newArr = []
//     for (let i = 0; i<arr1.length;i++){
//         for (let j = 0; j<arr2.length;j++){
//             if (i === j){
//                 newArr.push(arr1[i] + arr2[i])
//             }
//         }
//     }
//     return newArr
// }
//
// console.log(sumArrIndex(a1,a2))

// Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// function newsarr(arr) {
//     let keys =[]
//     for (let  arrElement of arr) {
//         for (let arrElementKey in arrElement) {
//             keys.push(arrElementKey)
//         }
//     }
//     return keys
// }
//
// console.log(newsarr([{name: 'Dima', age: 13}, {model: 'Camry'}]))

// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let a = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// function newsarr(arr) {
//     let keys = []
//     for (let arrElement of arr) {
//         for (let arrElementKey in arrElement) {
//            keys.push(arrElement[arrElementKey])
//         }
//     }
//     return keys
// }
//
// console.log(newsarr(a));