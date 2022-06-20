const red = document.querySelector(".color-preview-red");
const blue = document.querySelector(".color-preview-blue");
const black = document.querySelector(".color-preview-black");
const green = document.querySelector(".color-preview-green");
const lightgray = document.querySelector(".eraser");
colorClasses = [red, blue, black, green, lightgray];

let currentColor;

function selectColorRed () {
  console.log("red selected");
  selectColor(red);
  currentColor = "red";
}
function selectColorBlue () {
  console.log("blue selected");
  selectColor(blue);
  currentColor = "blue";
}
function selectColorBlack () {
  console.log("black selected");
  selectColor(black);
  currentColor = "black";
}
function selectColorGreen () {
  console.log("green selected");
  selectColor(green);
  currentColor = "green";
}
function selectEraser() {
  console.log("eraser selected");
  currentColor = "lightgray";
  selectColor(lightgray);
}

function selectColor(color) {
  if (currentColor != "lightgray") {
    color.classList.add("selected");
  } else {
    color.classList.add("eraser-selected");
  }

  for (const item of colorClasses) {
    if (item != color) {
      item.classList.remove("selected");
      item.classList.remove("eraser-selected");
    }
  }
}


const onClick = (event) => {
  if (event.target.classList.contains("canvas-square")) {
    setColor(event.target.classList[1]);
  }
}
window.addEventListener('click', onClick);

function removeSelected(item, index) {
  if (item != color) {
    item.classList.remove("selected");
  }
}

function setColor(clickedClass) {
  console.log(currentColor);
  document.querySelector("."+clickedClass).style.backgroundColor = currentColor;
}

function openSelection() {
  document.querySelector(".color-selection").classList.toggle("selection-show");
}

function toggleGrid() {
  let canvasSquares = document.querySelectorAll(".canvas-square");
  for (const sq of canvasSquares) {
    sq.classList.toggle("canvas-square-hide-border");
  }

  let toggleIconSquares = document.querySelectorAll(".tsq");
  for (const tsq of toggleIconSquares) {
    tsq.classList.toggle("canvas-square-hide-border");
  }
}
