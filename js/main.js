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



let thisRound = 0;
    var round = 5;
    var playerMoves = [];
    var startBtn = elem('.game');

    const buttons = {
        red: elem('#red'),
        blue: elem('#blue'),
        yellow: elem('#yellow'),
        green: elem('#green')
    };

    var targetPattern  = [];
    const colors = ["red","blue","yellow","green"];
    
    function randomColor() {
        return colors[Math.floor(Math.random()*colors.length)];
    }

    function gamePattern(){
        ++thisRound;
        let random = randomColor();

        targetPattern.push(random);

        debug(true, 0);

        // different implementation needed
        patternDemo(targetPattern, 1000);
    }

    //Checks the players move against the computer. if the player moves are equal to the round, then
   // debugging to console
    var test = true;

    function playerPattern(click) {
        
        playerMoves.push(checkColor(click));

        checkMove();
        
        if(playerMoves.length === thisRound){
            
            debug(test, 1, click, thisRound);

            nextRound();
        } else {
            debug(test, 0, click, thisRound);
        }
    }

        
        function checkMove() { 
            if (playerMoves[playerMoves.length - 1] !== targetPattern[playerMoves.length - 1]) { 
                console.log("Wrong Move!");
            } else {
                alert("Correct Move!")
                //console.log("Correct Move!");
                if (thisRound == round){
                    console.log ("Yay you did it!");
                } else{
                    // VALIDATION ELSE WHERE?? 
                    //console.log("Time for the next round!");
                    //nextRound();
                }
            }
        }




        //Checks player input color to see if it matches the color computer displayed
        function checkColor(input){
            if(input == "red"){
                return colors[0];
            } if(input == "blue"){
                return colors[1];
            } if(input == "yellow"){
                return colors[2];
            } if(input == "green"){
                return colors[3];
            }
        }

        function nextRound() {
            roundReset();
            gamePattern();
        }



    // ADDED
    ////////////////////////////////////////////
    function roundReset() {
        playerMoves = [];
    }





    function debug(status, section, color, round){
        if(status){
            switch(section){
                case 0:
                    console.log("New Pattern");
                    console.log(targetPattern);
                    break;
                case 1:
                    console.log("Color Selected: " + color);
                    console.log("Round: " + round);
                    console.log("\n");
                    break;
                case 2: 
                    console.log("Player Pattern");
                    console.log(playerMoves);
                    console.log("Computer Pattern");
                    console.log(targetPattern);
                    console.log("\n\n");
                    break;
                case 3:
                    break;
            }
        }
    }
        
        // CRUDE METHOD
        function resetAllButtonColors(){
            let btns = elem(".simon-button", true);

            btns.forEach(function(button, index){
                button.style.backgroundColor = "";
            });
        }

   
        // 2 COLORS SELECTED THAT ARE THE SAME - PLAYER COULDNT TELL W/O DELAY FROM RESET
        function patternDemo(arr, timer){
            let colorIndex = 0;
            
            var preview = setInterval(function(){
                resetAllButtonColors();
                
                setTimeout(function(){
                    
                }, 1000);

                elem("#" + arr[colorIndex]).style.backgroundColor = arr[colorIndex]; //error pops up here "TypeError: Cannot read property 'style' of null"
                
                if(colorIndex === colors.length){
                    clearInterval(preview);
                }
                ++colorIndex;
            }, timer);
        }

        // INTRO DEMO
        // WORKS - DONT TOUCH
        function quickDemo(arr, timer){
            let colorIndex = 0;
            
            var preview = setInterval(function(){
                if(colorIndex < 1){
                    changeBackground(arr, colorIndex);
                } else if( colorIndex > 0 && colorIndex < colors.length ){
                    changeBackground(arr, colorIndex, true);
                    changeBackground(arr, colorIndex);
                }

                // TEST
                // console.log(colorIndex + " " + colors.length);

                if(colorIndex === colors.length){
                    changeBackground(arr, colorIndex, true);
                    clearInterval(preview);
                }
                ++colorIndex;
            }, timer);
        }

        function changeBackground(colorArray, index, blank){
            if(blank){
                elem("#" +  colorArray[index-1]).style.backgroundColor = "";
            } else {
                elem("#" +  colorArray[index]).style.backgroundColor = colors[index];
            }
        }

        quickDemo(colors, 500);

function reloadPage() {
     window.location.reload();
}   


// GENERIC HELPER!!!
function elem(name, all){
    if(all){
        return document.querySelectorAll(name);
    } else {
        return document.querySelector(name);
    }
}


