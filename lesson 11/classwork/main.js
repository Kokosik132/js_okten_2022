// є масив -
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт
// потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

let favoritesKey = `favorites`
localStorage.setItem(favoritesKey, JSON.stringify([]))
let conteiner = document.getElementById(`conteiner`)

for (const user of users) {
    let btn1 = document.createElement(`button`);
    btn1.classList.add(`btn1css`)
    let div = document.createElement(`div`)
    div.classList.add(`divFlex`)
    let p = document.createElement(`p`)
    btn1.innerText = `Додати до улюблених`
    p.innerText = `Name: ${user.name}, Age: ${user.age}, Status:${user.status}`
    div.append(btn1, p)
    conteiner.append(div)
    btn1.onclick = function (e) {
        let favorites = JSON.parse(localStorage.getItem(favoritesKey))
        favorites.push(user)
        localStorage.setItem(favoritesKey, JSON.stringify(favorites))
        btn1.disabled = true;
    }
}

// Створити сторніку favorites.html при переході на яку потрібно вивест в
// документ всіх обраних на попередньому етапі

