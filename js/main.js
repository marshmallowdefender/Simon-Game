/*
Pseudocode for game function
-Write a function so that when the player clicks on instructions, a pop-up window with the 
instructions shows up
-Write a function so that when the player clicks on the choose rounds button, a drop down menu shows up 
 where they can pick their number of rounds (did not get to do)
-Write a function so that player can input their name into the game.(did not do)
-Write a function so that when player clicks "Game start", the game screen resets to a new game
-Write a function so that also when player clicks "Game start", the first color lights up
    -Write and function that loops through the colors everytime the player makes the right choices
        -and if the input is right, wait for the prompt for the next set of colors.
        -and if they make the wrong choice a message displays that they lost and can try again
    -The function for choosing the colors must be randomnly generated each time and increase in number 
    as the rounds go on.
    -Write a function to record the score as they go along in the game.
User Clicks "Start Game"
Game flashes a color
User replicates and "clicks" the same color
If color clicked is correct, game adds on another color to the first color
If color clicked is wrong, "Game Over" and game board/score resets to zero
ADD EVENT SO THAT WHEN USER CLICKS A SQUARE IT FLASHES THAT COLOR
*/


//I am presented with a random series of button presses.
//Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
//I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
//If I want to restart, I can hit a button to do so
//I can win the game by getting a series of 5 steps correct. I am notified of my victory, then the game starts over.



//elem short for element, grabs the element that you pass it

let _roundCounter = 0;
let _gameTargetPattern = [];
let _playerPattern = [];
let _startButton = _elem('.game');

const MAX_NUM_ROUNDS = 10;
const ANIMATION_DURATION = 300;
const INTERVAL_DURATION = 700;
const COLORS = ["red", "blue", "yellow", "green"];
const BUTTONS = {
    red: _elem('#red'),
    blue: _elem('#blue'),
    yellow: _elem('#yellow'),
    green: _elem('#green')
};

//Adds player color choice to the empty array playerPattern and checks to see if the choice matches the generated choice.
//If it does, the next round plays unless the number of rounds equals the max number of rounds then game is won.
//Else the next round starts
function addPlayerInput(color) {
    playerPattern.push(color);

    _checkMatch(_gameTargetPattern, playerPattern);

    if (_isRoundOver(_gameTargetPattern, playerPattern)) {
        if (roundCounter >= MAX_NUM_ROUNDS) {
            alert('Congratulations! You won!');
        } else {
            _startNextRound();
        }
    }
}

//When playGame button is clicked, the gameboard is cleared and a new round is started
function playGame() {
    _clearGame();
    _startNextRound();
}

//Simple function to "restart" the game by reloading the page.
function reloadPage() {
    window.location.reload();
}

//Function to change the background color of the individual buttons making it active
function _changeBackgroundOfColor(color, isActive) {
    let squareElement = BUTTONS[color];
    _changeBackgroundOfElement(squareElement, isActive);
}

//Function to change the background color of the buttons by adding and removing the class animation "blink"
function _changeBackgroundOfElement(squareElement, isActive) {
    if (isActive) {
        squareElement.classList.add('blink');
    } else {
        squareElement.classList.remove('blink');
    }
}

//Checks to see if the player choices match the generated choices
function _checkMatch(targetArray, playerArray) {
    //if playerArray has 2 elements, matchIndex = 1
    let matchIndex = playerArray.length - 1;

    if (targetArray[matchIndex] === playerArray[matchIndex]) {
        // hurray - you guessed correctly
        // do nothing
        console.log('successful guess!', playerArray.length);
    } else {
        alert('Too bad... Try again!');
        playGame();
    }
}

//Function to clear the baord game and reset variables
function _clearGame() {
    roundCounter = 0;
    _gameTargetPattern = [];
    playerPattern = [];
}

//function to get elements
function _elem(name, shouldFetchAll) {
    if (shouldFetchAll) {
        return document.querySelectorAll(name);
    } else {
        return document.querySelector(name);
    }
}

//Function to animate the color changes and the duration of the color change
function _flashColor(color) {
    _changeBackgroundOfColor(color, true);
    setTimeout(function() {
        _changeBackgroundOfColor(color, false);
    }, ANIMATION_DURATION);
}

function _isRoundOver(targetArray, playerArray) {
    return targetArray.length === playerArray.length;
}



function _playPattern(colorArray) {
    console.log("Color Pattern", colorArray);
    let i = 0;
    let interval = setInterval(function() {
        _flashColor(colorArray[i]);
        i++;
        if (i >= colorArray.length) {
            clearInterval(interval);
        }
    }, INTERVAL_DURATION);
}

//Function to randomize color choices
function _randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

//When the next round starts, clear the playerPattern array and push new incremented colors to the array
function _startNextRound() {
    roundCounter++;

    playerPattern = [];

    _gameTargetPattern.push(_randomColor());

    _playPattern(_gameTargetPattern);
}