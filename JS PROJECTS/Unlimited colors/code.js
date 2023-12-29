function randomColor(){
    let color ='#';
    let hex = '012345678ABCDEF';
    for (let i=0;i<6;i++)
    {
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let colorChange;
document.querySelector("#start").addEventListener('click', function(){
    if(colorChange == null){
        colorChange = setInterval(fill, 1000);
    }
     function fill(){
        document.body.style.backgroundColor = randomColor();

     }
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(colorChange);
    colorChange = null;
})
