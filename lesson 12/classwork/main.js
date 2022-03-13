// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((comments) => comments.json())
    .then(post => {
        let allDiv = document.createElement(`div`)
        allDiv.classList.add(`allDiv`)


        for (const postElem of post) {
            let onDiv = document.createElement(`div`)
            onDiv.classList.add(`onDiv`)

            onDiv.innerHTML = `
            <h3>Id: ${postElem.id}</h3>
            <h4>Title: ${postElem.title}</h4>
            <h5>Body: ${postElem.body}</h5>
            `;
            let btn1 = document.createElement(`button`);
            btn1.innerText = `click me`
            btn1.classList.add(`btn1`)

            btn1.onclick = (e) => {
                fetch(`https://jsonplaceholder.typicode.com/comments`)
                    .then((post) => post.json())
                    .then(comments => {
                        for (const commentElem of comments) {

                            if (postElem.id === commentElem.postId) {
                                let commentDiv = document.createElement(`div`)
                                commentDiv.classList.add(`commentDiv`)
                                commentDiv.innerHTML = `
                                <h3>ID: ${commentElem.id}</h3>
                                <h4>Name: ${commentElem.name}</h4>
                                <h5>Email: ${commentElem.email}</h5>
                                <h6>Body: ${commentElem.body}</h6>
                                `;
                                onDiv.append(commentDiv)

                            }


                        }
                    })

            }
            onDiv.append(btn1)
            allDiv.append(onDiv)
        }
        document.body.append(allDiv)


    })


