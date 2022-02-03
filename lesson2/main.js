// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = prompt(`time`);
// if (time < 15) {
//     console.log(`the first part`)
// }
// else if (time < 30) {
//     console.log(`another part`)
// }
// else if (time < 45) {
//     console.log(`third part`)
// }
// else if (time < 60) {
//     console.log(`the fourth part`)
// }
// else {
//     console.log(`WTF`)
// }

// У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt(`numeric`)
// if (day < 10.5) {
//     console.log(`the first part`)
// }
// else if (day < 21) {
//     console.log(`another part`)
// }
// else {
//     console.log(`third part`)
// }

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = prompt(`text`)
// if (!!test) {
//     console.log(`Вірно`)
// }
// else {
//     console.log(`Неправильно`)
// }

// let test = confirm(`text`) ? `вірно` : `Неправильно`;
// console.log(test)

// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = prompt(`text`)
// if (a != 0)
// console.log(`Вірно`)
// else {
//     console.log(`Неправильно`)
// }

// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер  дня тижня і на екрані відображається інфа що заплановано на цей день.
// let week = prompt(`number`);
// switch (week) {
//     case `1`:
//         console.log(`plan1`);
//         break;
//     case `2`:
//         console.log(`plan2`);
//         break;
//     case `3`:
//         console.log(`plan3`);
//         break;
//       case `4`:
//         console.log(`plan4`);
//         break;
//     case `5`:
//         console.log(`plan5`);
//         break;
//     case `6`:
//         console.log(`plan6`)
//         break;
//     case `7`:
//         console.log(`plan7`);
//         break;
// }

// Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let year = prompt(`year`);
// if ((year % 4) === 0) {
//     console.log(`yes`)
// }
// else {
//     console.log(`no`)
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let officialName = prompt(`Яка офіційна назва JavaScript`);
// if (officialName === `ECMAScript`) {
//     console.log(`Правильно!`)
// }
// else {
//     console.log(`Не знаєте? ECMAScript`)
// }