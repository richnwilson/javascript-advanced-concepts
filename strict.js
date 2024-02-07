'use strict'
// ^ Without 'use strict' global context will define height for us - could be dangerous as we haven't declared it
function weird() {
    // doesn't exist in function context, so go up to global ^
    height = 50;
    return height;
}

weird();