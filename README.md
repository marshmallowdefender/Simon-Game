# Simon-Game
Game of Simon

_Recreation of the classic hasbro game *Simon* in your browser!_

This ia a game that tests a players memory. The player must follow a sequence of colors that flash on colored buttons. The sequence increases by one new color every turn. If the player fails to follow the sequence correctly, the game is over. 

## Motivation

I was motivated to make this game because not only do I love memory games (keeps the mind fresh), but I also wanted to challenge myself to do something new. I had previously made a simple card match game before but coding this was a whole new and exciting challenge.


## Game Link

[GitHub] (https://marshmallowdefender.github.io/Simon-Game/)


## Code Example
```javascript
//Global Variable for the game
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
```



## Gameshots & Wireframes

![Wireframe](/WireFrames/SimonGame.png)

![Wireframe](/WireFrames/GameWonPop-up.png)

![Wireframe](/WireFrames/Wireframe3_GameWin.jpg)

More can be found in the Wireframes folder.


## Built with

[GitHub] (https://code.visualstudio.com/)


## How to Use:
To test it out yourself, feel free to fork and clone my repo. If you want to play the actual game, I provided the link above to the game!

## Unsolved Problems:

Most of the unsolved problems lay in what I didn't get to add into the game. 

### Things to be added later:
1. Round Amount (player can pick their amount of rounds).
1. Score Counter Displayed (player can see their score as they advance in the game).
1. Make an actual function to restart the game instead of using page reload.
1. Add pop-ups for alerts instead of using "alert".
1. Add sounds when buttons play and when player clicks on them.
1. Edit simon-button to add event.target instead bootstrap onclick events.
1. Use toggle for the button animation.
1. Add instructions popup to the game.
1. Add function so that player can input their name and get personalized messages as they play, such as "Good job John!"
1. Add text to show player what round they are on.
1. Add option where if they get a move wrong, the game repeats the pattern.
1. Increase pattern speed after a certain number of rounds.


## Credits

* https://www.hasbro.com/common/documents/3f4e2ca0206011ddbd0b0800200c9a66/620962835056900B10D1688756D7BA4A.pdf
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
* https://medium.com/front-end-hacking/create-simon-game-in-javascript-d53b474a7416
* https://codepen.io/mrkaluzny/full/pbVxxd
* https://www.w3schools.com/howto/howto_js_dropdown.asp
* https://www.w3schools.com/w3css/w3css_buttons.asp
* https://www.w3schools.com/howto/howto_css_text_buttons.asp
* https://www.w3schools.com/css/css3_animations.asp
* https://techstacker.com/posts/MRvyR2TA3RNFmdy4J/vanilla-javascript-how-to-reload-a-page-with-the-window
* https://www.w3schools.com/css/css3_animations.asp
* https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp
* https://www.w3schools.com/css/css3_animations.asp
* https://codepen.io/mrkaluzny/full/pbVxxd
* https://codepen.io/BenLBlood/pen/LGLEoJ
* https://codepen.io/ouss4m4/pen/XRPOqm


## License

GA © Ashley Thompson
