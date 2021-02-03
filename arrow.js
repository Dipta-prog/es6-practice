//function type-1(general)
function doubleIt(num){
    return num * 2;
}


//function type-2(function declare)
const doubleIt = function myFun(num){
    return num * 2;
}


//function type-3(Arrow func. with single parameter)
const doubleIt = num => num * 2;

//function type-4(Arrow func. with double parameter)
const add = (x, y) => x + y;

//function type-6(Arrow func. with no parameter)
const give5 = () => 5;

//function type-7(Arrow func. with multiple line and parameter)
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(50, 70);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);