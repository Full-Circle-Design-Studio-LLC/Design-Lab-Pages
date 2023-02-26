startButton = document.querySelector('.game-window__start-round');
gameWindow = document.querySelector('.game-window');

function breakBlock(currentBlock) {
    currentHP = currentBlock.getAttribute('data-value');

    if (currentHP >= 0) {
        currentHP -= 1;
        currentBlock.setAttribute('data-value', currentHP);
    }

    if (currentHP == 2) {
        currentBlock.style.backgroundColor = 'yellow';
        currentBlock.style.height = '120px';
        currentBlock.style.width = '120px';
    }
    if (currentHP == 1) {
        currentBlock.style.backgroundColor = 'red';
        currentBlock.style.height = '150px';
        currentBlock.style.width = '150px';
    }
    if (currentHP == 0) {
        currentBlock.style.display = 'none';
    }    
}

function startRound() {
    startButton.style.display = 'none';

    generateEnemies();
}

function generateEnemies() {
    // check level, higher levels means stronger enemies and more of them, higher speed, etc.
    // every interval, generate div (enemy) with random image 1-5, choose left/right side
    newEnemy = document.createElement('img');
    newEnemy.src = '../assets/monkey-1.png';
    newEnemy.classList.add('game-asset__enemy');
    gameWindow.appendChild(newEnemy);
    setTimeout(() => {
        newEnemy.classList.add('game-asset__enemy_left');
    }, 100);

    // if collision, loseHealth();
}

function loseHealth() {

}