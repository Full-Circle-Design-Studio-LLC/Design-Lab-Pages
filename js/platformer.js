const character = document.querySelector(".character");
document.addEventListener('keydown', jump);
document.addEventListener('keydown', moveRight);


// makes the character jump by adding then removing the "jump" class
function jump(e) {
  if (e.code === "Space") {
    // is the jump class already present? If so, don't add the class again
    if (character.classList.contains("jump") === false) {
      character.classList.add("jump");
      console.log("jumped");
      setTimeout(function() {
        character.classList.remove("jump");
      },1000)
    }
  }
}

// makes the character move right by adding then removing the "move-right" class
function moveRight(e) {
  if (e.code === "KeyD") {
    // is the jump class already present? If so, don't add the class again
    if (character.classList.contains("move-right") === false) {
      character.classList.add("move-right");
      console.log("right");
      setTimeout(function() {
        character.classList.remove("move-right");
        var rect = character.getBoundingClientRect();
        console.log("left: "+rect.left+" top: "+rect.top);
        const top = rect.top
        character.style.top = rect.top+"px";
        character.style.left = rect.left+"px";
      },500)
    }
  }
}



function movement() {
  console.log(moveName);
  if (e.code === key) {
    if (character.classList.contains(moveClass) === false) {
      character.classList.add(moveClass);
      setTimeout(function() {
        character.classList.remove(moveClass);
      },length)
    }
  }
}
