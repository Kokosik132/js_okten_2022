// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, emeil, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.emeil = emeil;
        this.phone = phone;
    }



// створити пустий масив, наповнити його 10 об'єктами new User(....)
let arr = [
    new User(1,`Kokos`,`Kokosik`,`emeil@emeil.com`,096148814),
new User(12,`Mamba`,`Mashka`, `yoo@gma.col`,096148824),
new User(11,`Kinder`, `Minder`, `sobaka@maka.com`, 0991990909),
new User(9,`Polo`, `Ralf`, `tytka@maka.com`, 0991990912),
new User(7,`Moloko`, `Xpenove`, `so@miki.com`, 0655520909),
new User(8,`Milk`, `Shit`, `MilkShit@maka.com`, 0991091023),
new User(121,`Orange`, `Cilinder`, `Kolo@gmaol.com`, 0235461232),
new User(122,`Nazarii`, `Beyshchak`, `nbeyshchak@gmail.com`, 0638195578),
new User(131,`Maksym`, `Metelsky`, `metelsky@gmail.com`, 0931091038),
new User(1488,`Nose`, `Kokos`, `Neberu@tyt.com`, 0961021020),
]
// console.log(arr)

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let arrFilters = arr.filter(function (e) {
//     return e.id % 2 === 0
// })
// console.log(arrFilters)

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// console.log(arr.sort(function (current,next) {
//     return current.id - next.id;
// }))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id,name,surname,emeil,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.emeil = emeil;
        this.phone = phone;
        this.order = order
    }

}
// створити пустий масив, наповнити його 10 об'єктами Client
let newArr = [
    new Client(12,`Kokos`,`Kyrkynos`,`lolo@gmail.com`,0931091038,[`papaya`,`marakiya`]),
new Client(131,`Mango`,`Pango`,`kiko@mail.ri`,0681235544,[`kolo`,`lopsik`,`lolka`,`molka`]),
new Client(111,`Maks`, `Maksimka`, `olko@mimi.com`, 0638859696,[`what`]),
new Client(121,`Oleg`, `Lopkin`, `koik@gmail.com`, 0638859696,[`Jumper`, `Monter`]),
new Client(134,`Vasya`, `Ananasov`, `ikol@gmail.com`, 0638859696,[`Balalayka`, `Shapka`]),
new Client(154,`Grisha`, `Dvorovoy`, `mias@gmail.com`, 0638859696,[`Hat`, `Gitar`]),
new Client(175,`Sergey`, `Melyanko`, `zare@gmail.com`, 0638859696,[`Milk`, `Chefir`]),
new Client(193,`Pablo`, `Escobar`, `xer@gmail.com`, 0638859696,[`Rat`, `Pen`, `Nopen`]),
new Client(120,`Pavlo`, `Yrkiv`, `asbyka@gmail.com`, 0638859696,[`Mango`, `Lilo`,`kilt`,`kado`,`nose`]),
new Client(101,`Kto`, `Eto`, `Ey@gmail.com`, 0638859696,[`My`])
]
// console.log(newArr)

console.log(newArr.sort(function (current,next) {
    return current.order.length - next.order.length

}))