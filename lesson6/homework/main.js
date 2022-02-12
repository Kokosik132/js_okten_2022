// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s = `hello world`
// console.log(s.length);
// let sd = `lorem ipsum`
// console.log(sd.length);
// let sa = `javascript is cool`
// console.log(sa.length)

// Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let s = `hello world`
// console.log(s.toUpperCase());
// let sd = `lorem ipsum`
// console.log(sd.toUpperCase())
// let sa = `javascript is cool`
// console.log(sa.toUpperCase())
// Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let s = `HELLO WORLD`
// let sd = `LOREM IPSUM`
// let sa = `JAVASCRIPT IS COOL`

// console.log(s.toLowerCase(),sd.toLowerCase(),sa.toLowerCase())
// Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = `           dirty string   `
// document.write(str.trim())

// Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let arr = str.split(` `)
// console.log(arr)

// let newsArrSplit = (a,b) => {
//     let arr = a.split(b);
//     console.log(arr)
// }
// newsArrSplit(str,` `)

// Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// console.log(str.substring(str,7))
// let stringSub = (a,b,c) => {
//     let subsubstr = a.substring(b,c);
//     console.log(subsubstr)
// }
// stringSub(str,0,7)

// Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// // console.log(str.replace(/ /g,`-`));
// let strReplace = (a,b,c) => {
//     let sttrrepl = a.replace(b,c);
//     console.log(sttrrepl);
// }
// strReplace(str,/ /g,`-`)

// Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let str = 'каждый охотник желает знать';
// // console.log(str[0].toUpperCase()+str.substring(1))
// let stringUppSub = (a) => {
//     let sttrUpSub = a[0].toUpperCase()+str.substring(1);
//     console.log(sttrUpSub)
// }
// stringUppSub(str)

// Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let string = 'I am  the code';
//
//
// let capitalize = (str) => {
//     console.log(str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));
// }
// capitalize(string)