const name= function(){
    let username= "Nikhil Seth"
    console.log(`${username} , is a good boy`);
    console.log(this);
}
name();

const info =()=>{
    let username="Hitesh chaudhary"
    console.log(`${username} , is a good boy`);
    console.log(this);
}
info();

