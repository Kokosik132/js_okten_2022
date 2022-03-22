// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули


let allDiv = document.createElement(`div`)
allDiv.classList.add(`allDiv`)
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((users) => users.json())
    .then(user => {
        for (const userElement of user) {
            let userDiv = document.createElement(`div`)
            userDiv.classList.add(`userDiv`)
            let anchor = document.createElement(`a`)
            anchor.innerText = `${userElement.id} - ${userElement.name}`
            anchor.href = `./user-details.html?data=${JSON.stringify(userElement)}`
            userDiv.appendChild(anchor)
            allDiv.append(userDiv)

        }
        document.body.appendChild(allDiv)
    })
