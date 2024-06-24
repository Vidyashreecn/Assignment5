//6. Write a program to find minimum number in a array

function minNum(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
        }
    }
    return min;
}

let a=[65,75,4,1,89,5];
console.log(minNum(a));