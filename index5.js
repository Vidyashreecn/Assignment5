//5. Write a function that takes an array of numbers and returns the maximum value.

function maxNum(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i];
        }
    }

    return max;
}

let data=[2,56,78,4,6,83,54];
console.log(maxNum(data));