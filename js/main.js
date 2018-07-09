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

let roundCounter = 0;
let gameTargetPattern = [];
let playerPattern = [];
let startBtn = _elem('.game');

const MAX_NUM_ROUNDS = 5;
const COLORS = ["red", "blue", "yellow", "green"];
const BUTTONS = {
    red: _elem('#red'),
    blue: _elem('#blue'),
    yellow: _elem('#yellow'),
    green: _elem('#green')
};
//Checks the players move against the computer. if the player moves are equal to the round, then
// debugging to console
var test = true;

// INTRO DEMO
// WORKS - DONT TOUCH
function quickDemo(colorArray, intervalTimer) {
    let colorIndex = 0;

    const interval = setInterval(function () {
        if (colorIndex < 1) {
            _changeBackground(colorArray, colorIndex);
        } else if (colorIndex > 0 && colorIndex < COLORS.length) {
            _changeBackground(colorArray, colorIndex);
        }

        if (colorIndex === COLORS.length) {
            resetAllButtonColors();
            clearInterval(interval);
        }
        colorIndex++;
    }, intervalTimer);
}

function resetAllButtonColors() {
    let buttonElements = _elem(".simon-button", true);

    console.log('numButtons', buttonElements.length);

    buttonElements.forEach(function (button) {
        _changeBackgroundOfElement(button);
    });
}

function _changeBackground(colorArray, index) {
    let color = colorArray[index];

    _changeBackgroundOfColor(color);
}

function _changeBackgroundOfColor(color) {
    let squareElement = _elem('#' + color);

    _changeBackgroundOfElement(squareElement);
}

function _changeBackgroundOfElement(squareElement) {
    console.log('Entered `_changeBackgroundOfElement`');

    let color = squareElement.id;

    console.log('color', color);

    squareElement.classList.toggle(`has-background-${color}-active`);
}

function playGame() {
    gameTargetPattern.push(_randomColor());

    _playPattern(gameTargetPattern);
}

function _playPattern(colorArray) {
    colorArray.forEach(color => {
        _flashColor(color);
    });
}

function _flashColor(color) {
    for (let count = 0; count < 2; count++) {
        _changeBackgroundOfColor(color);

        setTimeout(function () {
            console.log('count', count)
        }, 1000);
    }
}

function gamePattern() {
    roundCounter++;
    let randomColor = _randomColor();

    gameTargetPattern.push(randomColor);

    // wat
    debug(true, 0);

    // different implementation needed
    patternDemo(gameTargetPattern, 1000);
}

function checkPlayerInput(click) {

    checkPlayerInput.push(checkColor(click));

    checkMove();

    if (checkPlayerInput.length === roundCounter) {

        debug(test, 1, click, roundCounter);

        nextRound();
    } else {
        debug(test, 0, click, roundCounter);
    }
}

function checkMove() {
    if (checkPlayerInput[checkPlayerInput.length - 1] !== gameTargetPattern[checkPlayerInput.length - 1]) {
        console.log("Wrong Move!");
    } else {
        alert("Correct Move!")
        //console.log("Correct Move!");
        if (roundCounter == MAX_NUM_ROUNDS) {
            console.log("Yay you did it!");
        } else {
            // VALIDATION ELSE WHERE?? 
            //console.log("Time for the next round!");
            //nextRound();
        }
    }
}

//Checks player input color to see if it matches the color computer displayed
function checkColor(input) {
    if (input == "red") {
        return COLORS[0];
    }
    if (input == "blue") {
        return COLORS[1];
    }
    if (input == "yellow") {
        return COLORS[2];
    }
    if (input == "green") {
        return COLORS[3];
    }
}

function nextRound() {
    roundReset();
    gamePattern();
}

// ADDED
////////////////////////////////////////////
function roundReset() {
    checkPlayerInput = [];
}

function debug(status, section, color, round) {
    if (status) {
        switch (section) {
            case 0:
                console.log("New Pattern");
                console.log(gameTargetPattern);
                break;
            case 1:
                console.log("Color Selected: " + color);
                console.log("Round: " + round);
                console.log("\n");
                break;
            case 2:
                console.log("Player Pattern");
                console.log(checkPlayerInput);
                console.log("Computer Pattern");
                console.log(gameTargetPattern);
                console.log("\n\n");
                break;
            case 3:
                break;
        }
    }
}

// CRUDE METHOD
// 2 COLORS SELECTED THAT ARE THE SAME - PLAYER COULDNT TELL W/O DELAY FROM RESET
// FUCKING CHAAAAAAAAAD
// function patternDemo(colorPatternArray, intervalTimer) {
//     let colorIndex = 0;

//     setInterval(function () {
//         resetAllButtonColors();

//         setTimeout(function () {
//             //does nothing but wait
//             console.log('Just waiting in `patternDemo` line 191... Gimme a sec :)')
//         }, 1000);

//         const square = _elem("#" + colorPatternArray[colorIndex]);

//         _setColorOfSquare(square, colorPatternArray[colorIndex]);

//         if (colorIndex === colors.length) {
//             clearInterval(preview);
//         }
//         ++colorIndex;
//     }, intervalTimer);
// }


//gross
function _reloadPage() {
    window.location.reload();
}

// GENERIC HELPER!!!
function _elem(name, shouldFetchAll) {
    if (shouldFetchAll) {
        return document.querySelectorAll(name);
    } else {
        return document.querySelector(name);
    }
}

function _randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function _setColorOfSquare(squareElement, color) {
    console.log('squareElement', squareElement);
    console.log('color', color);

    squareElement.style.backgroundColor = color;
}



// START GAME
quickDemo(COLORS, 500);