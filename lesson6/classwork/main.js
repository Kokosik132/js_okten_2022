// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// // Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// // let n1 = 'Harry Potter'
// // let n2 = 'Ron Whisley'
// // let n3 = 'Hermione Granger'
// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// }
// name(n1, '.');

//  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let randomArr = (a, number) => {
//     let arr = [];
//     for (i = 0; i < a; i++) {
//         arr.push(Math.round(Math.random() * number))
//     }
//     return arr
// }
// console.log(randomArr(12,100))
// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let randomArr = (arrs, number) => {
//     let arr = [];
//     for (let i = 0; i < arrs; i++) {
//         arr.push(Math.round(Math.random()*number))
//     }
//     return arr.sort((a,b) => a-b)
// }
// console.log(randomArr(12, 100));

// створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//     відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let randomArr = (arrs, number) => {
//     let arr = [];
//     for (let i = 0; i < arrs; i++) {
//         arr.push(Math.round(Math.random() * number))
//     }
//     let filter = arr.filter(arr => arr % 2 === 0);
//     return filter
// }
// console.log(randomArr(25,56))

// створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let randomArr = (arrs, number) => {
//     let arr = [];
//     for (let i = 0; i < arrs; i++) {
//         arr.push(Math.round(Math.random()*number))
//     }
// return arr.map(value => value.toString())
// }
// console.log(randomArr(12, 25));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let sortNums = (arr, arguments) => {
//     if (arguments === `ascending`) return arr.sort((a,b) => a - b)
//     if (arguments === `descending`) return arr.sort((a,b) => b - a)
// }
// console.log(sortNums([12,43,343,23,23,1,23,2],`descending`))

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.sort(function (curent, next) {
//     return next.monthDuration - curent.monthDuration
//
// }));
//  let filter = coursesAndDurationArray.filter(course => course.monthDuration >=5);
// console.log(filter)