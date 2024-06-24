//2. Write a function that calculates the factorial of a given number

//5*4*3*2*1

function factorial(num){
    let result=1;
    for(let i=num;i>0;i--){
        result=result*i;

    }
    return result;

}
let num=5;
let value=factorial(num);
console.log(`Factorial of ${num} is ${value}`);