var age=20;
//syntax of IFFE:-
//  ()();
//Below given details are called as named IIFE.
(function Info(name){
    let age=25;
    
    console.log(`My name is ${name} , I am ${age} years old`)
})("Nikhil seth");

//Below given details are called as Unnamed IIFE.
((company_name)=>{
    console.log(company_name)
})("Meta")

//both are working properly because semicolon is present in between both the IIFE;

//Nullish coalescing operator(??) : Null Undefined
let val4;
val4= undefined ?? 20 ?? 20;
console.log(val4)