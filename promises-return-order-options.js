'use strict'
// Different ways to wait for multiple promises to come back
const promisify = (item, delay) => 
    new Promise((resolve,reject) => 
        setTimeout(() => 
            resolve(item), delay));

const a = () => promisify('a',100);
const b = () => promisify('b',5000);
const c = () => promisify('c',3000);

// -- Parrallel: Just run all promises at once and come back in the order they were executed
const parallel = async () => {
    const [output1, output2, output3] = await Promise.all([a(),b(),c()]);
    return `Parallel is done: ${output1} - ${output2} - ${output3}`;
}
parallel().then(console.log); // << same as .then(data => console.log(data))

// -- Race: Run all promises, but only take the first one that comes back
const race = async () => {
    const output1 = await Promise.race([a(),b(),c()]);
    return `Race is done, first one back is: ${output1}`;
}
race().then(console.log);
// ^^ Note the async function for race() finishes before the parallel() function is returned to call stack, from event loop

// -- Sequence: Run promises in the order specified. Don't continue to next until previous has completed
const sequence = async () => {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `Sequence is done: ${output1} - ${output2} - ${output3}`;
}
sequence().then(console.log);