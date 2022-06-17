let isOnPath = true;
let isStarted = false;
let isFinished = false;

var page = document.querySelector(".page");
page.addEventListener("mouseover", fail);

var finish = document.querySelector(".finish");
finish.addEventListener("mouseover", finishGame);

document.querySelectorAll('.path').forEach(item => {
  item.addEventListener('mouseover', event => {
    isOnPath = true;
  })
  item.addEventListener('mouseout', event => {
    isOnPath = false;
  })
})

/* source for above: https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/ */

var start = document.querySelector(".start");
start.addEventListener("mouseover", startGame);

function finishGame() {
  if (isStarted === true) {
    document.querySelector(".finish-popup").style.visibility = "visible";
    isFinished = true;
    console.log("finished!");
  }
}

function startGame() {
  document.querySelector(".begin").style.visibility = "hidden";
  document.querySelector(".failure").style.visibility = "hidden";
  isStarted = true;
}

function onPathTrue() {
  isOnPath = true;
}

function onPathFalse() {
  isOnPath = false;
}

function fail() {
  if (isOnPath === false && isStarted === true && isFinished === false) {
    document.querySelector(".failure").style.visibility = "visible";
  }
}
