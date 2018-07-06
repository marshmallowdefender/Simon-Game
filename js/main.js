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

const buttons = {
    red: document.querySelector('#red'),
    blue: document.querySelector('#blue'),
    yellow: document.querySelector('#yellow'),
    green: document.querySelector('#green')
}
const targetPattern  = [];
const colors = ["red","blue","yellow","green"];

function randomColor() {
    return colors[Math.floor(Math.random()*colors.length)]
}
randomColor();

//Use targetPattern[i] to see current color
//Use buttons[currentColor] to get target button
//toggle flash class on target button
//If i === targetPattern.length clear interval



/*

function playPattern(){
    let i = 0;
    const id = setInterval(function(){}

}
}
*/