'use strict'
const fetch = require('node-fetch');

//Object spread operator - allows for remainder of object to be stored in new object
const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const { tiger, ...rest} = animals;
console.log(tiger);
console.log(rest);

// finally - do something after a promise has finished. regardless of whether it works or not
//           Does not take a parameter
const urls = [
    "https://swapi.dev/api/people/5",
    "https://swapi.dev/api/people/10",
    "https://swapi.dev/api/people/15",
    "https://swapi.dev/api/people/8",
    "https://swapi.dev/api/people/6",
]
Promise.all(urls.map(url => {
    return fetch(url).then(resp=>resp.json())
}))
    .then(resp => console.log(resp))
    .catch(e => console.log(e))
    .finally(() => {            // <<<<<
        console.log('Finally')
    })

// for await of - loop through await promises
const getData = async () => {
    try {
        const arraysOfPromises = urls.map(url => fetch(url));
        for await (let request of arraysOfPromises) {
            const data = await request.json();
            console.log('for await:', data.name);
        }
    }
    catch(e) {
        console.log('Error:',e)
    }
}
getData()