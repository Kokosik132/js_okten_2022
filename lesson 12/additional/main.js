// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((users) => users.json())
    .then(users => {
        let allDiv = document.createElement(`div`)
        allDiv.classList.add(`allDiv`)
        for (const userElem of users) {
            let userDiv = document.createElement(`div`)
            userDiv.classList.add(`userDiv`)
            userDiv.innerHTML = `
            <h3>Id: ${userElem.id}</h3>
            <h4>Name: ${userElem.name}</h4>
            <h5>Username: ${userElem.username}</h5>
            <h5>Email: ${userElem.email}</h5>
            <h5>Address</h5>
            <h6>Street: ${userElem.address.street}</h6>
            <h6>Suite: ${userElem.address.suite}</h6>
            <h6>City: ${userElem.address.city}</h6>
            <h6>Zipcode: ${userElem.address.zipcode}</h6>
            <h6>Geo</h6>
            <h6>Lat: ${userElem.address.geo.lat}</h6>
            <h6>Lng: ${userElem.address.geo.lng}</h6>
            <h5>Phone: ${userElem.phone}</h5>
            <h5>Website: ${userElem.website}</h5>
            <h5>Company</h5>
            <h6>Name: ${userElem.company.name}</h6>
            <h6>CatchPhrase: ${userElem.company.catchPhrase}</h6>
            <h6>Bs: ${userElem.company.bs}</h6>  
            `;
            let btn1 = document.createElement(`button`)
            btn1.classList.add(`btn1`)
            btn1.innerText = `Click me`
            userDiv.append(btn1)
            allDiv.append(userDiv);

            btn1.onclick = (e) => {
                fetch(`https://jsonplaceholder.typicode.com/posts`)
                    .then((posts) => posts.json())
                    .then(posts => {
                        for (const postElem of posts) {
                            if (userElem.id === postElem.userId) {
                                let postDiv = document.createElement(`div`)
                                postDiv.classList.add(`postDiv`);
                                postDiv.innerHTML = `
                            <h3>Id: ${postElem.id}</h3>
                            <h4>UserId: ${postElem.userId}</h4>
                            <h4>Title: ${postElem.title}</h4>
                            <h5>Body: ${postElem.body}</h5>
                            `;
                                let btn2 = document.createElement(`button`)
                                btn2.classList.add(`btn2`);
                                btn2.innerText = `Go go go`
                                postDiv.append(btn2)
                                userDiv.append(postDiv)
                                btn2.onclick = (e) => {
                                    fetch(`https://jsonplaceholder.typicode.com/comments`)
                                        .then((comments) => comments.json())
                                        .then(comments => {
                                            for (const commentElem of comments) {
                                                if (postElem.userId === commentElem.postId) {
                                                    let commentDiv = document.createElement(`div`)
                                                    commentDiv.classList.add(`commentDiv`)
                                                    commentDiv.innerHTML = `
                                                    <h3>ID: ${commentElem.id}</h3>
                                                    <h4>Name: ${commentElem.name}</h4>
                                                    <h5>Email: ${commentElem.email}</h5>
                                                    <h6>Body: ${commentElem.body}</h6>
                                                    `;
                                                    postDiv.append(commentDiv)
                                                }
                                            }
                                        })
                                }

                            }
                        }

                    })
            }

        }
        document.body.append(allDiv)
    })
