// Дано натуральное число n. Выведите все числа от 1 до n.
// let n = 12
// for (let i = 1; i <= n; i++) {
//     console.log(i)
// }

// Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// let A = 65;
// let B = 26;
// if (A < B){
//     for (let i = A; i <= B; i++){
//         console.log(i)
//     }
//     }
// else {
//     for (let i = B; i <= A; i++){
//         console.log(i)
//     }
// }

// функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let foo = [1,2,0,5,9,8];
// let obmin = (arr,i) => {
//     if (arr[i+1]) {
//         let arrobmin = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = arrobmin;
//     }
//     return arr
// }
// console.log(obmin(foo,3))

// Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

// let ffff = [1,3,0,6,2,234,0,2,23,0,12,2,1,0,2]
// function zerro(arr) {
//     let zeroArr = [];
//     let numbers = [];
//     for (const number of arr) {
//         if (number === 0){
//             zeroArr.push(number)
//         }
//         else {
//             numbers.push(number)
//         }
//     }
//     return numbers.concat(zeroArr)
//
// }
//
// console.log(zerro(ffff))


