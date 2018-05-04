/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//declaring global variables
var scores, roundScore, activePlayer, gamePlaying, lastDice;

init();

//with textContent Method we will change the content of the first player's score
// dice - this is the variable which we declared at the beginning of our js file
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//setting an event listener for the button roll
document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying){
    //1.Random number
    //generating a random number between 1 and 6 - without adding 1 - between 0 and 5
      var dice1 = Math.floor(Math.random() * 6) + 1;
      var dice2 = Math.floor(Math.random() * 6) + 1;

    //2.Display the result
      document.getElementById('dice-1').style.display = 'block';
      document.getElementById('dice-2').style.display = 'block';
      document.getElementById('dice-1').src = 'dice-'+ dice1 + '.png';
      document.getElementById('dice-2').src = 'dice-'+ dice2 + '.png';

      //3.Update the round score - only IF the rolled number was NOT a 1
          if (dice1 !== 1 && dice2 !==1){
            //Add score
          roundScore += dice1 + dice2;
                  document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
              //Next player
              nextPlayer();
          }

    // //3.Update the round score - only IF the rolled number was NOT a 1
    //   if ( dice === 6 && lastDice ===6){
    //     //PLayer looses score
    //     scores[activePlayer] = 0;
    //     document.querySelector('#score-' + activePlayer).textContent = '0';
    //     nextPlayer();
    //   }else if (dice !== 1){
    //     //Add score
    //     roundScore += dice;
    //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
    //   } else {
    //     //Next player
    //     nextPlayer();
    //   }

      // lastDice = dice;
    }
  });

    document.querySelector('.btn-hold').addEventListener('click', function() {
      if(gamePlaying){
        //Add current score to the player's global score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

      //  Undefined, 0 , null or "" are coerced to false
        //anything else is coerced to true
        if(input) {
            winningScore = input;
        }else {
          winningScore = 100;
        }
        //Check if player won the game
        if( scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else{
          //Next player
          nextPlayer();
        }
       }
    });

function nextPlayer(){
  //Next player
  activePlayer  === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

//   document.querySelector('.player-0-panel').classList.remove('active');
//    document.querySelector('.player-1-panel').classList.add('active');

//switching the class active with the toggle method
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
};

// for init - dont use () !
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

//hide dice with the random number at the beginning changing the CSS property with DOM
document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'PLayer 2';

//remove a winner class
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

//adding an active class to the first player
document.querySelector('.player-0-panel').classList.add('active');
};

//Challenges
// 1. two 6 in a row - a player looses his entire score.
// 2. add an input field to the HTML where players can set the winning scores.
// 3. add a second dice - the player will loose everything when one of them is a 1.
