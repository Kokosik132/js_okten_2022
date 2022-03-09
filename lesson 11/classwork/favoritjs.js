let favoritesKey = `favorites`
let conteiner = document.getElementById(`conteiner`)
let users = JSON.parse(localStorage.getItem(favoritesKey))

for (const user of users) {
    let divUser = document.createElement(`div`)
    divUser.innerText = `Name:${user.name}, Age: ${user.age}, Status: ${user.status}`
    conteiner.append(divUser)
}
