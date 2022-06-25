imgContainer = document.getElementById("imgContainer");
imgExpanded = document.querySelector(".image-expanded-img");
i = 0;

function expandImage(id) {
  img = document.getElementById(id);
  imgContainer.classList.toggle("image-expanded");
  imgSrc = img.src;
  imgExpanded.src = imgSrc;
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
