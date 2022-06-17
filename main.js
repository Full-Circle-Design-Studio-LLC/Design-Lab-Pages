/* ----------------------------------------------------------------------------- falling-blocks.html */

const ids = ["block-1", "block-2", "block-3", "block-4", "block-5", "block-6", "block-7", "block-8", "block-9", "block-10","block-11","block-12","block-13","block-14","block-15"];
const letter = "falling-letters";
var nums = ["1","2","3","4","5","6","7","8","9","10","11","12","13"];
var count = [];
function setBg(id) {
  let randomColor = 0;
  while (randomColor === 0) {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
  }
  document.getElementById(id).style.backgroundColor = "#" + randomColor;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


for (const id of ids) {
  setBg(id);
}
/*
while (count.length < 14) {
  let i = getRandomInt(1,14);
  if (count.includes(i) === true) {
    // do nothing
    console.log("already has "+i);
  } else {
      i = i.toString();
      count.push(i);
      console.log(typeof i);
      console.log(count);
      console.log(typeof count[1]);
      document.getElementById("falling-letters-"+i).classList.add("fall");
  }
}
*/
/*
while (nums.length > 0) {
  var i = nums[Math.floor(Math.random()*nums.length)];
  i = i.toString();
  let index = nums.indexOf(i);
  nums.splice(index, 1);
  document.getElementById("falling-letters-"+i).classList.add("fall");
  var rect = document.getElementById("falling-letters-1").getBoundingClientRect();
  console.log(rect.top);
}
*/



/* ----------------------------------------------------------------------------- counter.html */
