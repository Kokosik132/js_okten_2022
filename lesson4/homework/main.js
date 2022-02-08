// створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s(a,b) {
//     let result = a * b
//     return result
// }
// console.log(s(434,1231))

// створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(p,r) {
//     let s = p * r**2
// }

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(p, h, r) {
//     let s = 2 * p * h * r
// }

// створити функцію яка приймає масив та виводить кожен його елемент
// function mashka(arr) {
//     for (let item of arr) {
//         console.log(item)
//     }
// }
// створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(a) {
//     document.write(`<p>${a}</p>`);
// }
// paragraph(`loremi`)

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function creatorUl(a) {
//     document.write(`<ul>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`<li>${a}</li>`)
//     document.write(`</ul>`)
// }
// creatorUl(`text`)

// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function creatorUl(a, b) {
//     document.write(`<ul>`)
//     for (i = 0; i < b; i++){
//         document.write(`<li>${a}</li>`)
//     }
//         document.write(`</ul>`)
// }
// creatorUl(`lor`,23)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let newArr = [`lee`, 1123, true, false, `mssport`];
//
// function creatorArr(xxx) {
//     document.write(`<ul>`)
//     for (i = 0; i < xxx.length; i++) {
//         document.write(`<li>${xxx[i]}</li>`)
//     }
//         document.write(`</ul>`)
// }
// creatorArr(newArr)

// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// let simpsons = [{id: 34, name: `Bart`, age: 22}]
//
// function newArr(xxx) {
//     for (let item of xxx) {
//         document.write(`<div>`)
//         document.write(`<div>${item.id}</div>`)
//         document.write(`<div>${item.name}</div>`)
//         document.write(`<div>${item.age}</div>`)
//         document.write(`</div>`);
//     }
// }
//
// newArr(simpsons)