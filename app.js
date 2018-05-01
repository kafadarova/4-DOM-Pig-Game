/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores= [0,0];
roundScore = 0;
activePlayer = 0;

//with textContent Method we will change the content of the first player's score
// dice - this is the variable which we declared at the beginning of our js file
//document.querySelector('#current' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//hide dice with the random number at the beginning changing the CSS property with DOM
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


//setting an event listener for the button roll
document.querySelector('.btn-roll').addEventListener('click', function(){

  //1.Random number
  //generating a random number between 1 and 6 - without adding 1 - between 0 and 5
    var dice = Math.floor(Math.random() * 6) + 1;

  //2.Display the result
    var diceDOM =   document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png';

  //3.Update the round score - only IF the rolled number was NOT a 1

});
