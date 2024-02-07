'use strict'
// allsettled
// In example below both promises should resolve in same time (3 seconds) but one will resolve and one will reject
const promise1 = new Promise((resolve,reject) =>
    setTimeout(resolve([{name: 'Rich'}, {name: 'Corin'}]),3000))
const promise2 = new Promise((resolve,reject) =>
    setTimeout(reject('rejected'),3000))
// When run promise.all what will happen ?
// Promise.all([promise1,promise2]).then(console.log)
// ^^^ get undefined error as all promises don't resolve - need catch

// Promise.all([promise1,promise2]).then(console.log).catch(console.log)
// ^^^ this will capture rejected promise.all

// Can use Promise.allSettled to see status of all promises - returns an object or arrays with status = 'fulfilled' for resolved with value info
const settledPromises = Promise.allSettled([promise1,promise2]).then(fulfilled => {
    const fulfilledPromises = fulfilled.filter(promise => {return promise.status === 'fulfilled'})
    for (let eachfulfilled in fulfilledPromises) {
        console.log(`iter: ${eachfulfilled} | value: ${JSON.stringify(fulfilledPromises[eachfulfilled].value)}`)
    }
});

