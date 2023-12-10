const object ={
    name: "Nikhil Seth",
    age: 20,
    email: "nseth435@google.com"

}
console.log(object);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

const obj4 = { obj1, obj3, obj2 };
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3)  //Here {} this will become thee target of the sources
// const obj5 = Object.assign(obj1, obj2, obj3)    //Here obj1 will become thee target of the sources
console.log(obj5)



const obj6 = {...obj1, ...obj2, ...obj3}
console.log(obj6)