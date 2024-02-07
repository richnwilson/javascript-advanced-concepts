// Javascript engine with adjust comparision to 'fix' for same type i.e.
console.log(1 == '1', ': 1 == "1"');
// will think you mean to compare 1 == 1 and will adjust

// whereas '===' will compare but not change type i.e.
console.log(1 === '1', ': 1 === "1"');

// ^^^^ So best to just '===' to ensure code validity ^^^^

// Interesting quirk ...
console.log(NaN === NaN, ': NaN === NaN');
// to fix this need NEW Object.is i.e.
console.log(Object.is(NaN,NaN), ': Object.is(NaN,NaN)');