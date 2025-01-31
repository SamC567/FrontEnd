//implement parameter type 
function countString(value) {
    return value.length;
}
console.log(countString(" test 1 "));
function removeSpaces(value) {
    return value.trim().length;
}
console.log(removeSpaces(" test 1 "));
// use ? to allow any type counts both with and without spaces 
function countBoth(value, spaces) {
    var num;
    if (spaces) {
        num = value.length;
    }
    else {
        num = value.trim().length;
    }
    return num;
}
console.log(countBoth(" test 1 ", true));
console.log(countBoth(" test 1 ", false));
console.log(countBoth(" test 1 "));
