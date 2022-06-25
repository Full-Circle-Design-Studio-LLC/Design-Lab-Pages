enemyCount = 2;
timerMs = 3000;

enemy = document.createElement("img");
enemy.classList.add("enemy");
enemy.src = "assets/cow.png";


function startRound() {
  console.log("round started");
  setInterval(createEnemy, timerMs);
  return;
}

function createEnemy() {
  document.querySelector(".page-tower-defense").appendChild(enemy);
  enemyCount += -1;
  if (enemyCount <= 0) {
    return;
  }
}
