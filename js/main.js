/*
-Write a function so that when the player clicks on intructions, a pop-up window with the 
instructions shows up
-Write a function so that when the player clicks on the choose rounds button, a drop down menu shows up 
where they can pick their number of rounds
-Write a function so that player can input their name into the game.
-Write a function so that when player clicks "Game start", the game screen resets to a new game
-Write a function so that also when player clicks "Game start", the first color lights up
    -Write and function that loops through the colors everytime the player makes the right choices
        -and if the input is right, wait for the prompt for the next set of colors.
        -and if they make the wrong choice a message displays that they lost and can try again
    -The function for choosing the colors must be randomnly generated each time and increase in number 
    as the rounds go on.
    -Write a function to record the score as they go along in the game.
//User Clicks "Start Game"
//Game flashes a color
//User replicates and "clicks" the same color
    //If color clicked is correct, game adds on another color to the first color
    //If color clicked is wrong, "Game Over" and game board/score resets to zero
//ADD EVENT SO THAT WHEN USER CLICKS A SQUARE IT FLASHES THAT COLOR
*/


//I am presented with a random series of button presses.

//Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.

//I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.

//If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.

//I can see how many steps are in the current series of button presses.

//If I want to restart, I can hit a button to do so,game will return to a single step.

//I can play where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.

//I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

let _roundCounter = 0;
let _gameTargetPattern = [];
let _playerPattern = [];
let _startButton = _elem('.game');

const MAX_NUM_ROUNDS = 5;
const ANIMATION_DURATION = 2000;
const INTERVAL_DURATION = 2000;
const COLORS = ["red", "blue", "yellow", "green"];
const BUTTONS = {
    red: _elem('#red'),
    blue: _elem('#blue'),
    yellow: _elem('#yellow'),
    green: _elem('#green')
};

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

function playGame() {
    _clearGame();
    _startNextRound();
}

function reloadPage() {
    window.location.reload();
}

function _changeBackgroundOfColor(color, isActive) {
    let squareElement = BUTTONS[color];
    _changeBackgroundOfElement(squareElement, isActive);
}

function _changeBackgroundOfElement(squareElement, isActive) {
    if (isActive) {
        squareElement.classList.add('glow');
    } else {
        squareElement.classList.remove('glow');
    }
}

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

function _clearGame() {
    roundCounter = 0;
    _gameTargetPattern = [];
    playerPattern = [];
}

function _elem(name, shouldFetchAll) {
    if (shouldFetchAll) {
        return document.querySelectorAll(name);
    } else {
        return document.querySelector(name);
    }
}

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

function _startNextRound() {
    roundCounter++;

    playerPattern = [];

    _gameTargetPattern.push(_randomColor());

    _playPattern(_gameTargetPattern);
}