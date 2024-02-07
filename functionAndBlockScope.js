if (5 > 4) {
    var a = "function variable scope - exists";
    let b = "block variable scope - only exists inside block i.e. for, if section";
    const c = "block scope constant - only exists inside block i.e. for, if section";
    console.log (`INSIDE BLOCK: a=${a} | b=${typeof b === 'undefined' ? 'undefined' : b} | c=${typeof c === 'undefined' ? 'undefined' : c}`);
}
console.log (`OUTSIDE BLOCK: a=${a} | b=${typeof b === 'undefined' ? 'undefined' : b} | c=${typeof c === 'undefined' ? 'undefined' : c}`);