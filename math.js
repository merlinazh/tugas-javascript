// random integer
function rand(min = null, max = null) {
    if (min === null && max === null) {
        return 0;
    } else if (max === null) {
        max = min;
        min = 0;
    }
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(20, 1)); 
console.log(rand(1, 10)); 
console.log(rand(6)); 
console.log(rand()); 

// choose you decimal
function chooseDecimals(n, d){
    if(Number.isInteger(n)){
        return n.toFixed(d).padEnd(d + 2);
    }else{
        return n.toFixed(d)
    }
}
console.log(chooseDecimals(2.100212, 2)); 
console.log(chooseDecimals(2.100212, 3)); 
console.log(chooseDecimals(2100, 3));

// is it numeric
function isItNumeric(numeric){
    if(!isNaN(parseFloat(numeric) && isFinite(numeric))){
        return 'TRUE'
    }else{
        return 'FALSE'
    }
}
console.log(isItNumeric(12));
console.log(isItNumeric('abcd'))

// make integer round up
function roundUpToFive(input){
    return Math.ceil(input/5)*5
}
console.log(roundUpToFive(32))