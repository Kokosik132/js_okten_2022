// створити функцію яка обчислює та повертає площу прямокутника висотою
// let s = (a,b) => {
//     return a*b
// }
// console.log(s(23,2))

// - створити функцію яка обчислює та повертає площу кола
// let circle = (p, r) => {
//     let s = p * r ** 2;
//     console.log(s);
//     return s
// }
// створити функцію яка обчислює та повертає площу циліндру
// let cilindre = (p,r,h)=>{
//     let s = 2*p*r*h
//     console.log(s);
//     return s
// }
// створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [12,333,212,3,1231,2]
// let newArr = (xxx) => {
//     for (i=0;i<xxx.length;i++) {
//         console.log(xxx[i])
//     }
// }
// newArr(arr)

// створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// let paragrafh = (xxx) => {
//     document.write(`<p>${xxx}</p>`)
// }
// paragrafh(12)
// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ulk = (xxx) => {
//     document.write(`<ul>`)
//     document.write(`<li>${xxx}</li>`)
//     document.write(`<li>${xxx}</li>`)
//     document.write(`<li>${xxx}</li>`)
//     document.write(`</ul>`)
// }
// ulk(`loremfefef`)
// створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ulk = (xxx,number) => {
//     document.write(`<ul>`)
//     for (i=0;i<number;i++){
//         document.write(`<li>${xxx}</li>`)
//     }
//     document.write(`</ul>`)
// }
// ulk(`loremi`, 12)
// створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let i = [12, 1233, true, `sdsds`]
// let newArr = (arr) => {
//     for (i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// newArr(i)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrNews = [{id: 423, name: `Bart`, age: 23}];
// let objectS = (newArr) => {
//     for (let newArrElement of newArr) {
//         document.write(`<div>`)
//         document.write(`<div>${newArrElement.id}</div>`)
//         document.write(`<div>${newArrElement.name}</div>`)
//         document.write(`<div>${newArrElement.age}</div>`)
//         document.write(`</div>`)
//     }
// }
// objectS(arrNews)