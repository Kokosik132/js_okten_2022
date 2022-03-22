// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.

let url = new URL(location.href)
let user = JSON.parse(url.searchParams.get(`data`));
// console.log(user)


let userDetailDiv = document.getElementsByClassName(`userDetailDiv`)[0];

let postContainer = document.getElementsByClassName(`posts`)[0]

let button2 = document.getElementsByClassName(`buttonPostDetails`)[0]
userDetailDiv.innerText = `${JSON.stringify(user)}`

button2.onclick = function (e) {
    this.disabled = true;



    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((users) => users.json())
        .then(value => {
            for (const postElement of value) {

                let postDiv = document.createElement(`div`)
                postDiv.classList.add(`postDiv`)
                postDiv.innerText = `${postElement.title}`
                postContainer.appendChild(postDiv)
                let postButtonDetails = document.createElement(`button`)
                postButtonDetails.innerText = `post details`
                postDiv.appendChild(postButtonDetails)

                postButtonDetails.onclick = function () {
                    location.href = `./post-details.html?data=${JSON.stringify(postElement)}`
                }
            }
        })

}



