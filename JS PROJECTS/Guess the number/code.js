let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guess-num");
const Previous_number= document.querySelector(".Previous-numbers");
const remaining= document.querySelector(".chances-loose");
const lowOrHi= document.querySelector(".lowOrHi");
const result_part= document.querySelector(".result-part");

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame=true;

if(playGame)
{
   //to start the game.
   submit.addEventListener('click' ,function (e){
        e.preventDefault();
        const num = parseInt(userInput.value);
        console.log(num);
        validateGuess(num);
   });
}

function validateGuess(num)
{
    //Input is good or not
    if(isNaN(num)){
        alert('please enter a valid number');

    }
    else if(num<1)
    {
        alert('Enter number greater than 1');

    }
    else if(num>100)
    {
        alert('Enter number less than 100');
    }
    else 
    {
       prevGuess.push(num);
       if(numGuess===11)
        {
          displayGuess(num);
          displayMessage(`Game Over. Random number was ${randomNumber}`);
          endGame();
        }
        else{
            displayGuess(num);
            checkGuess(num);
        }
    }
}

function checkGuess(num)
{
    //to check high or low
    if(num>randomNumber){
        displayMessage(`Your number is bigger`)
    }
    else if(num<randomNumber){
        displayMessage(`Your number is lower`)
    }
    else if(num===randomNumber)
      {
        displayMessage(`You guessed it right`)
        endGame()
      }
}

function displayGuess(num)
{
    //to display the message about input
    userInput.value = '';
    Previous_number.innerHTML += `${num}, `
    numGuess++;
    remaining.innerHTML = `${11-numGuess} `;
}

function displayMessage(message)
{
    //Display messgs about high and low 
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    // userInput.removeAttribute("disabled"); //alternate method
    // userInput.disabled = false;
    // p.classList.add("button");
    // p.classList.remove('button');
    p.innerHTML = `<h2 id = "newGame"> Click Here!! To Start a new Game</h2>`
    result_part.appendChild(p);
    playGame=false;
    newGame();
    
}

function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        Previous_number.innerHTML = "";        
        remaining.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute("disabled");
         //user input box ko ham disable karne ke liye above code hai
        result_part.removeChild(p);
        playGame = true;
    });

}
