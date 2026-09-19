let randomNumber = parseInt(Math. random() *100 + 1); 

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining  = document.querySelector('.lastResult');
const lowOrHi  = document.querySelector('.lowOrHi');
const startOver  = document.querySelector('.resultTamtam');


const p = document.createElement('p');

let prevGuess = [];
let totalGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guesss)){
        alert('Please enter a valid Number');
    } else if(guess < 1){
          alert('Please enter number greater than 1');
    } else if(guess > 100){
          alert('Please enter number less than 100');
    }else {
       prevGuess.push(guess);
       if(totalGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over, random Number was ${randomNumber}`);
        endGame();
       }else{
        displayGuess(guess);
        checkGuess(guess);
       }
    }

}

function checkGuess(guess){
     if(guess === randomNumber){
        displayMessage(`You guesssed it right`);
        endGame()
     } else if(guess , randomNumber){
        displayMessage(`Number is too high`);
     }
}

function displayGuess(guess){
     userInput.value = '';
     guessSlot.innerHTML += `${guess},  `;
     totalGuess ++;
     remaining.innerHTML = `${10 - totalGuess}`;
}

function displayMessage(message){
     lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = "newGame">Start new game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

function  newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber =  parseInt(Math. random() *100 + 1); 
        prevGuess = []
        totalGuess.innerHTML = ''
        remaining.innerHTML = `${11 - totalGuess}  `;
        userInput.removeAttribute(`disabled`);
        startOver.removeChild(p);

        playGame = true
    })
}



