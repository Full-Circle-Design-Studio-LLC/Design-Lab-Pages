const red = document.querySelector(".color-preview-red");
const blue = document.querySelector(".color-preview-blue");
const black = document.querySelector(".color-preview-black");
const green = document.querySelector(".color-preview-green");
colorClasses = [red, blue, black, green];

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

function selectColor(color) {
  color.classList.add("selected");
  //colorClasses.forEach(removeSelected);
  for (const item of colorClasses) {
    console.log(item);
    if (item != color) {
      item.classList.remove("selected");
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
