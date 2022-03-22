// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href)
let post = JSON.parse(url.searchParams.get(`data`));
let postContainer = document.getElementsByClassName(`post`)[0];
postContainer.innerText = `${JSON.stringify(post)}`;

let comentsContainer = document.getElementsByClassName(`coments`)[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((posts) => posts.json())
    .then(value => {
        for (const comentItem of value) {
            let comentContainer = document.createElement(`li`);
            comentContainer.innerText = `${comentItem.body}`;
            comentsContainer.appendChild(comentContainer)
        }

    });