/*Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8*/

// const arr=[-3,8,7,6,5,-4,3,2,1];
let prompt= require('prompt-sync')();

let input = prompt("Enter a list of items separated by commas:");
let arr = input.split(" ");

l=arr.length;
l=l-1;
let temp=0;
for(let i=1;i<l;i++)
{
   for(let j=0; j<l; j++)
    {
        if(arr[j]>arr[j+1])
        {
            temp=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=temp;
        }
    }

}
console.log(arr.join())