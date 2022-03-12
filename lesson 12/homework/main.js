// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then((user) => user.json())
// .then(users => {
//     let divPost = document.createElement(`div`)
//     divPost.classList.add(`divPost`)
//
//     for (const usersElem of users) {
//         let oneDiv = document.createElement(`div`)
//         oneDiv.classList.add(`oneDiv`)
//         oneDiv.innerHTML = `
//         <h3>Id: ${usersElem.id}</h3>
//         <h4>Title: ${usersElem.title}</h4>
//         <h5>Body: ${usersElem.body}</h5>`
//         divPost.append(oneDiv)
//         document.body.append(divPost)
//
//     }
// })



// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в
// прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((comments) => comments.json())
    .then(comments => {
        let allDiv = document.createElement(`div`)
        allDiv.classList.add(`allDiv`)
        for (const commentElem of comments) {
            let twoDiv = document.createElement(`div`)
            twoDiv.classList.add(`twoDiv`)
            twoDiv.innerHTML = `
            <h3>${commentElem.id}</h3>
            <h4>${commentElem.name}</h4>
            <h5>${commentElem.email}</h5>
            <h6>${commentElem.body}</h6>
            `
            allDiv.append(twoDiv)
            document.body.append(allDiv)
        }
    })
