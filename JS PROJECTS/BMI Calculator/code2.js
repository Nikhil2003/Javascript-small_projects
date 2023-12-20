const form= document.querySelector('form');

form.addEventListener("submit", function (e){
    e.preventDefault();
    //this 
     const height = parseInt(document.querySelector("#height").value);
     const weight = parseInt(document.querySelector("#weight").value);
     const calculated = document.querySelector("#calculated");
     const thought = document.querySelector("#thought");
     if(height === "" || height<0 || isNaN(height))
     {
        //height == NaN we can also check like that
        calculated.innerHTML = `Please enter the valid height ${height}`
     }else if(weight === "" || weight<0 || isNaN(weight))
     {
        calculated.innerHTML = `Please enter the valid weigth ${weight}`
     }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        calculated.innerHTML = `<span>${bmi}</span>`;
     }
     const bmi =(weight / ((height * height) / 10000)).toFixed(2);
        if(bmi<18.6)
        {
            thought.textContent = `You are Under Weight`;
        }
        if(bmi>18.6 && bmi<24.9)
        {
          thought.textContent  = `You are physically fit`;
        }
        
        if(bmi>24.9)
        {
            thought.textContent  = `You are over Weight`;
        }
        
});