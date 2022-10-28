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





// canvas
c = document.getElementById('sq-canvas');
ctx = c.getContext('2d');
ctx.moveTo(0,0);
ctx.lineTo(150,75);
ctx.stroke();