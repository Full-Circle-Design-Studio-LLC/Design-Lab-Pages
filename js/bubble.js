// possible bubble colors
var colors = ["rgb(64, 64, 64)", "rgb(64, 64, 64)", "rgb(64, 64, 64)", "rgb(64, 64, 64)", "rgb(64, 64, 64)", "lightsalmon", "lightgreen", "chocolate", "darkcyan"];
// possible bubble speeds (set by animation-duration in seconds)
var times = ["1s", "2s", "2s", "3s", "3s", "3s", "3s", "3s", "3s", "4s", "4s", "4s", "5s"]

var score = 0
// number of bubbles; can be changed
var count = 80;
var pointerX = -1;
var pointerY = -1;




// start the game
function game() {

  // hide start menu
  document.getElementById("start-menu").style.display = "none";
  document.getElementById("end-menu").classList.toggle("trigger-end-menu");

  // for each bubble
  while (count > 0) {
    // values for styling and animation
    left = getRandomArbitrary(0, 80);
    wh = getRandomArbitrary(50, 300);
    delay = getRandomArbitrary(0, 20);

    // create a new div (bubble)
    var div = document.createElement("div");
    div.classList.add("bubble");
    div.classList.add("bubble-animation");
    // give div an id
    div.setAttribute('id','bubble-'+count);
    // add div to body of html (otherwise it would not be shown on screen or included in html code)
    document.querySelector("body").appendChild(div);

    // get this specific bubble and style and animate it
    var bubble = document.getElementById("bubble-"+count);
    bubble.style.width = wh+"px";
    bubble.style.height = wh+"px";
    bubble.style.left = left+"vw";
    bubble.style.animationDelay = delay+"s";
    // pick random speed from "times" array
    bubble.style.animationDuration = times[Math.floor(Math.random()*times.length)];

    // special rule for fast (1s) bubbles: they are always fuchsia and small
    if (bubble.style.animationDuration === "1s") {
      bubble.style.backgroundColor = "fuchsia";
      bubble.style.width = "50px";
      bubble.style.height = "50px";
    } else {
      var bgColor = colors[Math.floor(Math.random()*colors.length)];
      bubble.style.backgroundColor = bgColor;
    }

    count = count - 1;
  }

  // add a mouseover event listener to all bubbles
  document.querySelectorAll('.bubble').forEach(item => {
    item.addEventListener('mouseover', event => {

      // "pop" bubble
      item.style.display = "none";

      // get cursor location and convert to string
      pointerX = event.pageX;
      pointerY = event.pageY;
      pointerX = pointerX.toString();
      pointerY = pointerY.toString();

      // set different point values depending on color of bubble, updates user's score
      if ( item.style.backgroundColor === "rgb(64, 64, 64)") {
        createAfterNumber("red", -1);
        updateScore();
      } else if (item.style.backgroundColor === "fuchsia") {
        var plusFive = createAfterNumber("fuchsia", 5);
        updateScore();
      } else {
        createAfterNumber("green", 1);
        updateScore();
      }

    })
  })
} //end function game


// creates small number that appears when bubble is popped
function createAfterNumber(color, amount) {
  let afterNumber = document.createElement("div");
  afterNumber.style.animationName = "bubble-fade";
  afterNumber.style.animationDuration = "1s";
  afterNumber.style.animationFillMode = "forwards";
  afterNumber.style.left = (pointerX+"px");
  afterNumber.style.top = (pointerY+"px");
  afterNumber.style.fontSize = "25px";
  afterNumber.style.position = "absolute";
  afterNumber.style.color = color;
  score = score + amount;
  amountString = amount.toString();
  if (amount > 0) {
    amountString = ("+"+amountString);
  }
  afterNumber.innerHTML = amountString;
  document.querySelector("body").appendChild(afterNumber);
}

function removeStyle(item) {
  /*
  item.style.height = "auto";
  item.style.width = "auto";
  item.style.backgroundColor = "white";
  item.style.border = "none";
  item.style.fontSize = "20px";
  item.style.transitionDuration = "1s";
  item.style.opacity = "0";
  */
  item.classList.remove("bubble");
  item.classList.toggle("score-change");
  item.classList.toggle("fade-out");
}

// log score to console and update score display on screen
function updateScore() {
  console.log("score: "+score);
  document.getElementById("score").innerHTML = score;
  document.getElementById("finalScore").innerHTML = score;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
