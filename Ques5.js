/*Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )*/
const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let c1, c2, item1, item2;
item1 = arr[0];
c1 = 1;
c2 = 0;
for (let i = 0; i < arr.length; i++) {
    item2=arr[i];
  for (let j = i; j < arr.length; j++) {
    if (item2 == arr[j]) {
      c2 = c2 + 1;
    }
    if (c2 > c1) {
      c1 = c2;
      item1 = item2;
    }
    }
c2 = 0;
}
console.log(`${item1} (${c1}times)`);
