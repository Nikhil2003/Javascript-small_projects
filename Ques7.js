/*Write a JavaScript program that prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"*/

var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let c=0;
// console.log(`row ${c}`);
const b=a.flat(Infinity);
for(let i=0;i<b.length;i++)
{
    if(i%4==0)
    {
        console.log(`row ${c}`)
        c=c+1;
        console.log(b[i])
        
    }
    else 
      console.log(b[i])

}