// const clock = document.querySelector('#clock')
/* javasxript ke interval ko control karne ke liye setInterval() method use hota hai . 
This is verry important method for interviews*/
//ye jo 1000 hai wo basically milisecond ko denote kar rha hai
// setInterval((){}, 1000 ) isko ase hi yad karna hai;
const clock_box = document.getElementById('clock-box');

setInterval(function (){
    let date = new Date();
    clock_box.innerHTML = date.toLocaleTimeString();
}, 1000 )
