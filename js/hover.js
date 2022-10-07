hItem = document.querySelector('.hover-item');
vid = document.querySelector('.hover-vid');

function playVid() {
    vid.play();
}

function resetVid() {
    vid.pause();
    vid.currentTime = 0;
}

//vid.pause();