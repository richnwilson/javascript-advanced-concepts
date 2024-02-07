'use strict'
const fetch = require('node-fetch');

// Syncronous - execute each line of code one after another. Each line added to call stack and executed sequentially
console.log('1');
console.log('2');
console.log('3');


// Asyncronous - execute lines one after another, but if there is a callback i.e. setTimeout, then move to callback queue and then event loop
//               will wait for stack to be empty to execute
//               IMPORTANT: As of ES6, there is now a new queue in the Javascript engine called Job Queue. This takes preference over callback queue, when event loop looking
//                          next item to add to call stack
console.log('4');
setTimeout(() => {
    console.log('5')
},2000);
console.log('6');

// Promises - send code to callback, and once evaulated either returns resolve or reject. When receive this info, use the 'then' to execute the result
//            If there is ever an error, then we capture in 'catch' event 
//            Promises wrap conditions in invisible 'try ... catch'
const a = (bool) => new Promise ((resolve, reject) => {
    //throw Error('Bad');
    if (bool) {
        if (Math.random > 0.5) {
            resolve('true')
        } else {
            reject("Didn't make the cut")
        }
    } else {
        resolve('false')
    }
})

a(true).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e.toString())
})

// Promise.all 
//         NOTE: All promises must resolve to trigger the then clause (can fix with ES11 - see es11.js)
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]
Promise.all(urls.map(url => {
    return fetch(url).then(resp=>resp.json())
})).then(resp => console.log(resp))
.catch(e => console.log(e))