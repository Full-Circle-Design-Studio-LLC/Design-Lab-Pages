declareVariablesHome();

setInterval(move,10);

function declareVariablesHome() {
    movingItem = document.querySelector(".banner-text");
    pos = movingItem.getBoundingClientRect();
    scrollValue = 2;
    trans = 0;
    // original resetValue/transR: 1655 or -4898
    // proportion = 1000/movingItem.offsetWidth;
    transR = getResetValue();
    //resetValue = getResetValue();
    resetValue = -2385;
    // lastScrollTop = 0;
    pause = false;
    root = document.documentElement;
    // transXL1 = 0;
    // transXL2 = 0;
    // transXL3 = 0;
    // transXR1 = 0;
    // transXR2 = 0;
    // transXR3 = 0;
    units = "vw";
    // s3ImgTransVal = 0;
    // s3Img2TransVal = 0;
    // scrnWidth = getScreenWidth();
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



// function getScreenWidth() {
//     return window.innerWidth;
// }










// horizontal scrolling section

containerDiv = document.querySelector('.scroll-section-hidden');

var hz1 = document.querySelector('.horizontal-scroll-section');

screenVariables();
transX = 0;
transXPrev = -1;


(function(){

var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
    if (running){ return; }
    running = true;
    requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
    });
    };
    obj.addEventListener(type, func);
};

throttle("scroll", "optimizedScroll");
})();

window.addEventListener("scroll", function(){

    if (containerDiv.getBoundingClientRect().top <= 0) {
        transX = mVal*containerDiv.getBoundingClientRect().top;
        if (transX <= -secW) {
            if (transX < transXPrev) {
                transX = transXPrev;
            }
        }
        transXPrev = transX;
        hz1.style.transform = "translateX(" + transX + "px)";
    }
})

// run code on screen resize
window.addEventListener("resize", function(event) {
    screenVariables;

});

function screenVariables() {
    secH = window.innerHeight*4;
    secW = window.innerWidth*4;
    mVal = secW/secH;
}