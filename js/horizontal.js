declareVariablesHome();

setInterval(move,10);

function declareVariablesHome() {
    movingItem = document.querySelector(".banner-text");
    pos = movingItem.getBoundingClientRect();
    scrollValue = 2;
    trans = 0;
    // original resetValue/transR: 1655 or -4898
    proportion = 1000/movingItem.offsetWidth;
    transR = getResetValue();
    //resetValue = getResetValue();
    resetValue = -2385;
    lastScrollTop = 0;
    pause = false;
    root = document.documentElement;
    transXL1 = 0;
    transXL2 = 0;
    transXL3 = 0;
    transXR1 = 0;
    transXR2 = 0;
    transXR3 = 0;
    units = "vw";
    s3ImgTransVal = 0;
    s3Img2TransVal = 0;
    scrnWidth = getScreenWidth();
    if (scrnWidth >= 1024) {
        faceChange = .03;
    } else {
        console.log("sw "+scrnWidth);
        faceChange = .05;
    }
}

function addTransition(i1,i2) {
    i1.classList.remove("img-left");
    i2.classList.remove("img-left");
}

function removeTransition(i1,i2) {
    i1.classList.add("img-left");
    i2.classList.add("img-left");    
}

function startPos() {
    addTransition(movingItem);
}

function resetTransitionDuration() {
    movingItem.forEach(item => item.classList.remove("img-transform"));
    setTimeout(() => {
        movingItem.forEach(item => item.classList.add("img-transform"));
    }, 20);
}





function move() {
    if (pause === false) {
        moveLeft();
    }
}

function moveLeft() {
    movingItem.style.transform = `translateX(${trans}px)`;
    
    trans -= 1.5;
    if (trans <= resetValue) {
        trans = 0;
    } else if (trans >= 0) {
        trans = resetValue;
    }
}

function getResetValue() {
    imgW = getWidth(movingItem);
    //return ((-imgW+proportion*imgW)+(imgW*0.11));
    return (-imgW*.5);
    // current: -1309
    // goal: -1280
}

function getWidth(a) {
    return a.offsetWidth;
}



function getScreenWidth() {
    return window.innerWidth;
}