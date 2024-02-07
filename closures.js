let a = () => {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        let random = 123123123;
        return function c() {
            let son = 'son';
            return `${grandpa} > ${father} > ${son}`
        }
    }
}
// Calling function a > function b > function c
console.log(a()()())
/// ^^^ If theory calling function c above shouldn't have access to grandpa or father as they are no longer in the stack as have been executed and removed from scope ^^^
///     however, javascript engine will in given circumstances store variables in closure and not into garbage - so still accessible
///     In the example above, random is not stored in closures 'lexical scoping' as javascript knows it's not used, so ends up in garbage

// A more useful exercise:
const callMeMaybe = () => {
    setTimeout(() => {
        console.log(callMe);
        // ^^ Due to closures,'callMe' is still accessible and will be returned
    }, 4000);
    const callMe = 'Hi! I am here now';
    // ^^^ Stored in closure, as used above, so always available - not hoisted, so can be declared anywhere in function
}
callMeMaybe();

// A complete exercise:
// a) Memory efficient - need to call item from a large array that's only stored once
const heavyDuty = () => {
    const bigArray = new Array(7000).fill(':)');
    return function index(index) {
        console.log(bigArray[index])
    }
}

const getHeavyDuty = heavyDuty()
// ^^^ This stores the bigArray until we need to access it later
getHeavyDuty(688)
getHeavyDuty(788)
getHeavyDuty(888)
// ^^^ functions above are extracting from big array stored in closure, so only have one call to big Array
// The opposite of this would be if we didn't have a nested function but just returned index. In this case the three calls to each index would have resulted in building array 3 times !!!!
/// ^^^ IMPORTANT: We didn't add bigArray to global scope as we didn't want to necessarily polute it


// b) Encapsulation

const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++
    const totalPeaceTime = () => timeWithoutDestruction
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'boom'}
    setTimeout(passTime,1000);
    return {
        launch,
        totalPeaceTime
    }
    // ^^^ This returned object is the key - by expliciting referencing launch and totalPeaceTime we make them accessible as functions in the code.
    //     If we removed 'launch' then it wouldn't be available
}
const ohno = makeNuclearButton();
console.log(ohno.totalPeaceTime())
console.log(ohno.launch())


// Final example
const arr = [1,2,3,4];
for (let i=0; i < arr.length; i++) {
    setTimeout(() => {
        console.log(`I am at index ${arr[i]}`)
    },3000)
}
// ^^^ This example works because we are using let for block scoping, but if we used var it would fail
//     If we had to use var we could enclose the setTimeout in IIFE and pass in i parameter i.e.
for (let i=0; i < arr.length; i++) {
    ((closurei) => {
        setTimeout(() => {
        console.log(`I am at index ${arr[closurei]}`)
    },3000)
})(i);
}