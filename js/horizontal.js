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

ps = document.querySelector('.post-section');
inPost = false;
pI = document.querySelectorAll('.star-1');
pI2 = document.querySelectorAll('.star-2');
pI3 = document.querySelectorAll('.star-3');
pI4 = document.querySelectorAll('.star-4');
pI5 = document.querySelectorAll('.star-5');
allPIs = [pI,pI2,pI3,pI4,pI5];



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

    // if currently in post section, do stuff
    if (ps.getBoundingClientRect().top <= 0) {
        inPost = true;
        postTrans1 = (.1)*ps.getBoundingClientRect().top;
        postTrans2 = (.2)*ps.getBoundingClientRect().top;
        postTrans3 = (.3)*ps.getBoundingClientRect().top;
        postTrans4 = (.4)*ps.getBoundingClientRect().top;
        postTrans5 = (1)*ps.getBoundingClientRect().top;
        if (postTrans1 <= 0) {
            pI.forEach(item => {
                setPIs(item,postTrans1);
            })
            pI2.forEach(item => {
                setPIs(item,postTrans2);
            })
            pI3.forEach(item => {
                setPIs(item,postTrans3);
            })
            pI4.forEach(item => {
                setPIs(item,postTrans4);
            })
            pI5.forEach(item => {
                setPIs(item,postTrans5);
            })
        }
    } else {
        pI.forEach(item => {
            removePIs(item);
        })
        pI2.forEach(item => {
            removePIs(item);
        })
        pI3.forEach(item => {
            removePIs(item);
        })
        pI4.forEach(item => {
            removePIs(item);
        })
        pI5.forEach(item => {
            removePIs(item);
        })
        inPost = false;
    }
})

// run code on screen resize
window.addEventListener("resize", function(event) {
    screenVariables;

});

function screenVariables() {
    secH = window.innerHeight*4;
    secW = window.innerWidth*4;
    scrnHeight = window.innerHeight;
    mVal = secW/secH;
}

function setPIs(item,p) {
    item.style.position = 'fixed';
    item.style.transform = 'translateY('+ p + 'px)';
}
function removePIs(item) {
    item.style.position = 'absolute';
    item.style.transform = 'translateY(0px)';
}











// scroll animations

scrollSetup();

function scrollSetup() {
    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px 0px 0px 0px',
      //threshold: 1.0
    }
    items = document.querySelectorAll('.scroll-item');
    scrl1 = "in-post";

items.forEach(scrollItem => {
    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (scrollItem.classList.contains("post-section")) {
        animate(scrollItem, entry, scrl1, false);
        } else if (scrollItem.classList.contains('from-r') || scrollItem.classList.contains('from-l')) {
        animate(scrollItem, entry, scrl2, true);
        }
    })
    }, options)

    observer.observe(scrollItem);
})
}

function animate(scrollItem, entry, className, hold) {
if (entry.isIntersecting) {
    scrollItem.classList.add(className);
    return
}

if (hold == false) {
    scrollItem.classList.remove(className);
}
}