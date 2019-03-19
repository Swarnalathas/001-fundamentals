function add(a, b) {
    return a + b;
}

function Subtract(a, b) {
    return a - b;
}

function Multiply(a, b){
    return a * b;
}

function isOdd(num){
    var Result = num % 2;
    if (Result === 1 ) return true;
    if (Result === 0)  return false;
}

function isEven(num) {
    var Result1 = num % 2;
    if (Result1 === 1) return false;
    if (Result1 === 0) return true;
 }

 function divisibleBy(a, b) {
     var Result2 = a % b;
     if (Result2 === 0) return true; 
     if (Result2 === 1) return false;
 }
 
 function squareOf(num) {

    var Result4 = num * num;

    return Result4;
 }

 const myBeverage = {
    delicious: true,
    sour: false,
  };

module.exports = {
    add, Subtract,Multiply,isOdd,isEven,divisibleBy,squareOf,myBeverage
};