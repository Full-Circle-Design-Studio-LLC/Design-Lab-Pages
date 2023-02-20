/*

CLICK GAME

This is a simple game where you have to click all the green squares while avoiding red squares in a grid of 50 total squares.
There will be 15 red squares randomly placed in the grid.
A timer will run during the game and when all squares are clicked your total time will be displayed.


*/

grid = document.querySelector('.game-asset__click-grid');
for (i = 0; i < 100; i++) {
    square = document.createElement("div");
    square.classList.add('game-asset__click-grid__square');
    square.id = 'square-'+i;
    square.addEventListener('click', clickSquare);
    grid.appendChild(square);
}

setRed();

function clickSquare(evt) {
    evt.currentTarget.style.backgroundColor = 'black';
}

function setRed() {
    randomNumberList = [];
    i = 0;
    while (i < 15) {
        randomNumber = Math.floor(Math.random() * (99 - 0));
        //console.log(randomNumber);
        if (randomNumberList.includes(randomNumber) == false) {
            document.getElementById('square-'+randomNumber).style.backgroundColor = 'red';
            console.log('test');
            i++;
        }
        randomNumberList.push(randomNumber);
    }
}