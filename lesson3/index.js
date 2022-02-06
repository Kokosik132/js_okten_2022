// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let fruits = [`apple`, `ananas`, `mango`, `banana`, `pineaplle`];
// console.log(fruits);
// let age = [24, 35, 39, 41, 52];
// console.log(age);
// let userGame = [`Kokos`, 131, `case`, true, false];
// console.log(userGame)

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let news = [];
// news[0] = 1;
// news[1] = `Marvel`
// news[2] = `Spider-Man`
// console.log(news)

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


// for (i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, soluta!</div>`)
// }
// for (i = 0; i < 10; i++) {
//     document.write(`<div>${i} - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, recusandae.</div>`)
// }
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, numquam.</h1>`)
//     i++;
// }
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>${i} - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, mollitia?</h1>`)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let numbers = [12, 22, 34, 54, 76, 124, 433, 23, 123, 43]
// for (i = 0; i < numbers.length; i++) {
//     console.log(i)
// }
// let mashkyZaLyashky = [`banana`, `ananas`, `Mashka`, `kokos`, `mango`, `badboy`, `mouse`, `lotus`, `key`, `sun`];
// for (i = 0; i < mashkyZaLyashky.length; i++) {
//     console.log(mashkyZaLyashky[i])
// }
// let destroi = [2, 12, true, false, `saki`, `maki`, `smaki`, 131, 932, 2];
// for (i = 0; i < destroi.length; i++) {
//     console.log(destroi[i])
// }
// let array = [12, 32, `shapka`, true, `Mashka`, 932, false, `new`, `paper`, 2]
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === "boolean") {
//         console.log(array[i])
//     }
// }
// let array = [12, 32, `shapka`, true, `Mashka`, 932, false, `new`, `paper`, 2];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === "number") {
//         console.log(array[i])
//     }
// }
// let array = [12, 32, `shapka`, true, `Mashka`, 932, false, `new`, `paper`, 2];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === "string") {
//         console.log(array[i])
//     }
// }
//
// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// let array = [];
// array[0] = `zoom`
// array[1] = `papaCarlo`
// array[2] = 2
// array[3] = true
// array[4] = 232
// array[5] = false
// array[6] = 11
// array[7] = `boo`
// array[8] = 222
// array[9] = 1891
// for (i=0;i < array.length; i++){
//     console.log(array[i])
// }
// for (i = 0; i < 10; i++) {
//     console.log(`Поточний крок циклу: `+ i +``);
//     document.write(`Поточний крок циклу: `+ i +``)
// }
// for (i = 0; i < 100; i++) {
//     console.log(`Поточний крок циклу: `+ i +``)
//     document.write(`Поточний крок циклу: `+ i +``)
// }
// for (i = 0; i < 100; i += 2) {
//     console.log(`Поточний крок циклу: ` + i + ``)
//     document.write(`Поточний крок циклу: `+ i +``)
// }
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
//         }

// for (i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

