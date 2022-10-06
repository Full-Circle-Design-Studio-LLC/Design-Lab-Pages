imgContainer = document.getElementById("imgContainer");
imgExpanded = document.querySelector(".image-expanded");



function expandImage(id) {
  //document.createElement("div");
  imgExpanded.style.display = "block";
  img = document.getElementById(id);
  imgContainer.appendChild(img);
  img.classList.toggle("image-expanded-img");
}

function closeImg() {
  imgContainer.removeChild(img);
  imgContainer.style.display = "none";
}



/*
imgContainer = document.getElementById("imgContainer");
imgExpanded = document.querySelector(".image-expanded-img");
i = 0;

arrowRight = document.querySelector(".gallery-arrow-right");
arrowLeft = document.querySelector(".gallery-arrow-left");

function expandImage(id) {
  img = document.getElementById(id);
  console.log(img.src);
  imgContainer.classList.toggle("image-expanded");
  imgSrc = img.src;
  imgExpanded.src = imgSrc;

  // append arrow divs to img container class
  imgContainer.appendChild(arrowRight);
  imgContainer.appendChild(arrowLeft);

  // add arrows to img by finding height of img, then
  //


}

// blocks the closeImg() fxn from running (10ms timeout)
function blockClose() {
  i = 1;
  timeout = setTimeout(iRevert, 10);
}
// part of blockClose fxn; sets i back to 0 so closeImg() can run
function iRevert() {
  i = 0;
}
function closeImg() {
  if (i === 0) {
    imgContainer.classList.toggle("image-expanded");
    imgExpanded.src = "";
  }
}

function right() {
  expandImage(img.nextElementSibling.id);
  //img.nextElementSibling.classList.toggle(".image-expanded");
}

*/
