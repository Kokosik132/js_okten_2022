// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let first = prompt(`Введіть перше число`);
// let second = prompt(`Введіть друге число`);
// if (first > second) {
//     console.log(`first`)
// }
// else if (first === second) {
//     console.log(`Рівні`)
// }
// else {
//     console.log(`second`)
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let users = +prompt(`Номер квартири`);
// if (users >= 1 & users <= 20) {
//     console.log(`Перший під'їзд`)
// }
// else if (users >= 21 & users <= 48) {
//     console.log(`Другий під'їзд`)
// }
// else if (users >= 49 & users <= 90) {
//     console.log(`Третій під'їзд`)
// }

// Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt(`number`);
// if (number !== 10) {
//     console.log(`Невірно`)
// }
// else {
//     console.log(`Вірно`)
// }

// Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = "[1]"
// if (typeof x === "number") {
//     console.log(`1`)
// }
// else if (typeof x === "string") {
//     console.log(`2`)
// }
// else if (typeof x === "boolean") {
//     console.log(`3`)
// }
// else if (typeof x === "object") {
//     console.log(`4`)
// }


// Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let c = +prompt(`температура`);
// if (c >=10 & c <= 22) {
//     console.log(`йдемо Вчитись`)
// }
// else {
//     console.log(`Сидимо вдома і вчимося Онлайн`)
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let game = +prompt(`Введіть число для початку гри`);
// switch (game) {
//     case 1:
//         console.log(`Ви виграли автомобіль`)
//         break;
//     case 2:
//         console.log(`Ви виграли мотоцикл`)
//         break;
//     case 3:
//         console.log(`Ви виграли телефон`)
//         break;
//     case 4:
//         console.log(`Ви виграли курс в Октен`)
//         break;
//     default:
//         console.log(`Друже, що ти куриш?`)
// }