'use strict';
let p1 = document.querySelector('.player--0');
let p2 = document.querySelector('.player--1');
let p1Sc = document.getElementById('score--0');
let p2Sc = document.getElementById('score--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');
const p1cs= document.getElementById('current--0');
const p2cs= document.getElementById('current--1');

let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let playersPlaying = true;
p1Sc.textContent = 0;
p2Sc.textContent = 0;


const Player = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    p1.classList.toggle('player--active');
    p2.classList.toggle('player--active');

}

dice.classList.add('hidden');


btnRoll.addEventListener('click', function(){
    if(playersPlaying){
    // getting random number 
    let ranNumber = Math.trunc(Math.random() * 6) + 1
    console.log(ranNumber);

    // display the roll..
    dice.classList.remove('hidden');
    dice.src = `dice-${ranNumber}.png`;

    if(ranNumber !== 1){
    // added dice roll to current score
    currentScore = currentScore + ranNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
     Player();
    }
}
})

btnHold.addEventListener('click', function(){
    if(playersPlaying){
    if(activePlayer === 0){
        score[0] = score[0] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[0];
    } else{
        score[1] =score[1] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = score[1];

    }
    if(score[1] >= 10 || score[0] >= 10){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`#name--${activePlayer}`).textContent = "Winner";
        playersPlaying = false;
        dice.classList.add('hidden');

    } else {
    Player();
    }
}
})

btnNew.addEventListener('click', function(){
    // score = [0 , 0];
    // activePlayer = 0;
    currentScore = 0;
    activePlayer = 0;
    score = [0, 0];
    playersPlaying = true;
    p2Sc.textContent = 0;
    p1Sc.textContent = 0;
    p1cs.textContent = 0;
    p2cs.textContent = 0;

    dice.classList.add('hidden');
    p1.classList.remove('player--winner');
    p2.classList.remove('player--winner');
    p1.classList.add('player--active');
    p2.classList.remove('player--active');

    document.querySelector('#name--0').textContent = "Player 1";
    document.querySelector('#name--1').textContent = "Player 2";

})