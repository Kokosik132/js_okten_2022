// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, producer, year, maxSpeed, engine) {
// this.model = model;
// this.producer = producer;
// this.year = year;
// this.maxSpeed = maxSpeed;
// this.engine = engine;
// this.drive = function () {
//     console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
// this.info = function () {
//     console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.producer}, Max Speed - ${this.maxSpeed}, Engine - ${this.engine}`)
// }
// this.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed += newSpeed
// }
// this.changeYear = function (newValue) {
//     this.year = newValue
// }
// this.addDriver = function (driver) {
//     this.driver = driver
// }
// }
//
//
//
// let usercar = new Car(`Audi`,`Volswagen`, 2015,270,2.0)
// // console.log(usercar)
// usercar.drive();
// usercar.info();
// usercar.increaseMaxSpeed(300);
// usercar.changeYear(2021);
// usercar.addDriver(`Nazar`);
// console.log(usercar)

// (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model, producer, year, maxSpeed, engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info() {
//         console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.producer}, Max Speed - ${this.maxSpeed}, Engine - ${this.engine}`)
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//     changeYear (newValue) {
//         this.year = newValue
//     }
//     addDriver (driver) {
//         this.driver = driver
//     }
// }
// let userCar = new Car(`Audi`, `Volswagen`, 2015,270,2.0)
// // console.log(userCar)
// userCar.drive();
// userCar.info();
// userCar.increaseMaxSpeed(330);
// userCar.changeYear(2021);
// userCar.addDriver(`Maks`);
// console.log(userCar)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку