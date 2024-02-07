'use strict'
const fetch = require('node-fetch');

(async () => {
    try {
        const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await fetchUsers.json()
        console.log(data)

        // Promise.all with await 
        const urls = [
            "https://jsonplaceholder.typicode.com/users",
            "https://jsonplaceholder.typicode.com/posts",
            "https://jsonplaceholder.typicode.com/albums"
        ]
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp=>resp.json())
        }))
        console.log(users);
        console.log(posts);
        console.log(albums);
    }
    catch(e) {
        console.log('Error:',e)
    }
})()