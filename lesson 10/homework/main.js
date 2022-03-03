// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let btn1 = document.getElementById(`btn1`)
let text = document.getElementById(`text`)
btn1.onclick = function (e) {
    text.style.display = `none`
}

// Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let btn2 = document.getElementById(`btn2`)
btn2.onclick = function (e) {
    btn2.style.display = `none`
}

// створити інпут який приймає вік людини та кнопку яка підтверджує дію.'
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше
//     він ніж 18, та повідомити про це користувача


let form = document.forms[0]
form.onsubmit = function (e) {
    e.preventDefault()
    if (e.target.age.value >= 18) {
        console.log(`Yes baby`)
    }
    else if (this.age.value <= 17){
        console.log(`Prprprprrp`);
    }
}

// Создайте меню, которое раскрывается/сворачивается при клике
let menuElem = document.querySelector(`.menu`)
let titleElem = document.querySelector(`.title`)
titleElem.onclick = function (e) {
    menuElem.classList.toggle(`title`)
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentars = [
    {name: `Nazar`, body:`Захищай Україну`},
    {name: `Bogdan`, body:`Ходімо москалів бити`},
    {name: `Pytin`, body:`Гранату в дупу`},
    {name: `Stan`, body:`Виходь тут`}
];
for (const commentarElement of commentars) {
    let div = document.createElement(`div`)
    let h3 = document.createElement(`h3`)
    let p = document.createElement(`p`)
    let button = document.createElement(`button`)
    h3.innerHTML = `${commentarElement.name}`
    p.innerHTML = `${commentarElement.body}`
    button.innerHTML = `Тисни сюди =)`
    button.onclick = function (e) {
        p.classList.toggle(`phidden`)
    }
    div.append(h3)
    div.append(p)
    div.append(button)
    document.body.append(div)
}


















// let commentars = [
//     {name: `Nazar`, body:`Захищай Україну`},
//     {name: `Bogdan`, body:`Ходімо москалів бити`},
//     {name: `Pytin`, body:`Гранату в дупу`},
//     {name: `Stan`, body:`Виходь тут`}
// ]
// let bigDiv = document.createElement(`div`);
// for (const commentarElement of commentars) {
//     let div = document.createElement(`div`)
//     let h3 = document.createElement(`h3`)
//     let p = document.createElement(`p`)
//     let btn = document.createElement(`button`)
//     h3.innerText = `${commentarElement.name}`
//     p.innerText = `${commentarElement.body}`
//     btn.innerText = `Тицьни і я зникну`
//
//     btn.onclick = () => {
//         p.classList.add(`phidden`)
//     }
//     div.append(h3,p,btn)
//     bigDiv.append(div)
// }
// document.body.append(bigDiv)


