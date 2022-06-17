const shell = document.querySelector(".dd-shell");
const card = document.querySelector(".dd-card");
card.addEventListener('dragstart', dragstart);
card.addEventListener('drop', cardDrop);

const boxes = document.querySelectorAll(".dd-shell");

// call functions for each shell
boxes.forEach(box => {
  box.addEventListener('dragenter', dragEnter);
  box.addEventListener('dragover', dragOver);
  box.addEventListener('dragleave', dragLeave);
  box.addEventListener('drop', drop);
})


function dragEnter(e) {
  e.preventDefault();
  e.target.style.border = "dashed 3px red";
}

function dragOver(e) {
  e.preventDefault();
  e.target.style.border = "dashed 3px red";
}

function dragLeave(e) {
  e.target.style.border = "none";
}

function drop(e) {
  e.preventDefault();
  e.target.style.border = "none";

  // get the draggable element
  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.style.display = "block";
}

function cardDrop(e) {

}

function dragstart(e) {
  // stores the id of the draggable element (the card)
  e.dataTransfer.setData('text/plain', e.target.id);



  // make card disappear from shell when you move it
    // setTimeout(() => {
    //     e.target.style.display = "none";
    // }, 0);
}
