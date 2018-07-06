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


//I am presented with a random series of button presses.(done)

//Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.(done)

//I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.(done)

//If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.(done)

//I can see how many steps are in the current series of button presses.(done)

//If I want to restart, I can hit a button to do so,game will return to a single step.(done)

//I can play where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.(done)

//I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.(done) 



// get elements from html and style their colors
const redEl = document.querySelector('#red').style.background = 'red'; 
const blueEl = document.querySelector('#blue').style.background = "blue";
const yellowEl = document.querySelector('#yellow').style.background = "yellow";
const greenEl = document.querySelector('#green').style.background = "green";


/*
 Game properties
let game = {
    count = 0,
    colors = ['red','blue','yellow','green'],
    currentGame = [], //array tracking the order of colors to memorize
    player: [],
}
*/

//rand integers pulled from an array and entered into another array
//math.random value 0-1
//multiply by 4
//floor division

//Create a function that picks a random color from an array of colors
//Math.floor returns the largest integer less than or equal to a given number
//math.random returns a floating-point, pseudo-random number in the range of 0-1( inclusive of 0, but not 1)


let shuffleColors = [redEl, blueEl, yellowEl, greenEl];
let colorArray = [];
for (let i = 0; i < 4 ; i++) {
    let pickColor = shuffleColors[(Math.floor(Math.random()* 4))];
    //let pickColor = shuffleColors[(Math.floor(Math.random()* shuffleColors.length))];
    if (colorArray[pickColor]){
        colorArray[pickColor] ++
    } else {
        colorArray[pickColor] = 1
    }
 }



console.log(colorArray); //Picks radomly from the array and return 4 random choices from the array



//whichever color is picked, then it lights up a brighter shade
function lightUp() {
let redLight = redEl;
let blueLight = blueEl;
let yellowLight = yellowEl;
let greenLight = greenEl;

if (colorArray === redEl) {
    redLight.style.backgroundColor = "rgb(110, 244, 66"
} else if (colorArray === blueEl) {
    blueLight.style.backgroundColor = "rgb(66, 173, 244)"
} else if (colorArray === yellowEl) {
    yellowLight.style.backgroundColor = "rgb(244, 215, 66)"
} else if (colorArray === greenEl) {
    greenLight.style.backgroundColor = "rgb(66, 244, 83)"
    } 
    return lightUp;
}


//Create a function that gives out random color sequences starting at 1 color, then increments after
// player successfully finishes their turn


//create a function to handle button click events

let gameButtons = document.querySelector('.simon-button');
for (i = 0; i < gameButtons.length; i++) {
    buttons[i].addEventListener('click' , handleClick)
}




/*

function clearGame() { //setting currentGame to a point to an empty array that there
    //is no sequence yet. Essentially sets an empty board.
    game.currentGame = [];
    game.count = 0;
    addCount();
  }
  
  function newGame() {
    clearGame();
  }

*/



