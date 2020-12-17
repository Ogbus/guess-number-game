let correctNumber = getRandomNumber();
let guesses = [];

window.onload = function() {
    document.getElementById('number-submit').addEventListener('click', playGame);
    document.getElementById('restart-game').addEventListener('click', initGame);
}

// Getting a random whole number
function getRandomNumber() {
    let randomNumber = Math.random();
    let wholeNumber = Math.floor(randomNumber * 100) + 1;
    return wholeNumber;
    // let correctNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(correctNumber);
}

// Play game function
function playGame() {
    let numberGuess = document.getElementById('guess-number').value;
    displayResult(numberGuess);
    showGuessHistory(numberGuess);
    displayHistory();
}

// The function for restarting the game.
function initGame() {
    correctNumber = getRandomNumber;
    document.getElementById('result').innerHTML = '';
    guesses = [];
    // document.getElementById('history').innerHTML = '';
    displayHistory();
}

// The function for displaying the result.
function displayResult(numberGuess) {
    if(numberGuess > correctNumber) {
        showNumberAbove();
    } else if(numberGuess < correctNumber) {
        showNumberBelow();
    } else {
        showYouWon();
    }
}

function getDialog(dialogType, text) {
    let dialog;
    switch(dialogType) {
        case 'warning':
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case 'won':
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>";
    return dialog;
}

function showYouWon() {
    const text = 'Awesome job, you got it!';
    let dialog = getDialog('won', text);
    document.getElementById('result').innerHTML = dialog;
}

function showNumberAbove() {
    const text = 'Your guess is too high';
    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML = dialog;
}

function showNumberBelow() {
    const text = 'Your guess is too low'
    let dialog = getDialog('warning', text);
    document.getElementById('result').innerHTML = dialog;
}

function showGuessHistory(guess) {
    guesses.push(guess);
    // console.log(guesses)
}

function displayHistory() {
    // let index = guesses.length;
    // let list = "<ul class='list-group'>";
    // while(index >= 0) {
    //     list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>";
    //     index -= 1;
    // }
    // list += "</ul>";
    // document.getElementById('history').innerHTML = list;

    let index = 0;
    let list = "<ul class='list-group'>";
    while(index < guesses.length) {
        list += "<li class='list-group-item'>" + "You guessed " + guesses[index] + "</li>"
        index += 1;
    }
    list += "</ul>";
    document.getElementById('history').innerHTML = list
}
