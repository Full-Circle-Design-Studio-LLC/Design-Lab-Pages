let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px 0px -200px 0px',
  //threshold: 1.0
}

// select all divs with .scroll-item class
const items = document.querySelectorAll(".scroll-item");

// classes that contain animation names, duration, etc.
const grow = "in-view";
const close = "in-view-close";
const spin = "in-view-spin";

// for each scroll item, run animation
items.forEach(scrollItem => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (scrollItem.classList.contains("scroll-square")) {
        animate(scrollItem, entry, grow);
      } else if (scrollItem.classList.contains("scroll-container-sq")) {
        animate(scrollItem, entry, close);
      } else if (scrollItem.classList.contains("scroll-sq-2")) {
        animate(scrollItem, entry, spin);
      }
    })
  }, options)

  observer.observe(scrollItem);
})


function animate(scrollItem, entry, className) {
  if (entry.isIntersecting) {
    scrollItem.classList.add(className);
    return
  }

  scrollItem.classList.remove(className);
}







const lid = document.querySelector(".gift-box-lid");
const pickle = document.querySelector(".gift-box-innard");

const liftPickle = "pickle-up";
const liftLid = "lid-up";
const lowerPickle = "pickle-down";
const lowerLid = "lid-down";

giftParts = [lid, pickle];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (pickle.classList.contains(lowerPickle) && lid.classList.contains(lowerLid)) {
        pickle.classList.remove(lowerPickle);
        lid.classList.remove(lowerLid);
      }
      pickle.classList.add(liftPickle);
      lid.classList.add(liftLid);
      return
    }
    if (lid.classList.contains(liftLid)) {
      lid.classList.add(lowerLid);
      pickle.classList.add(lowerPickle);
    }
    lid.classList.remove(liftLid);
    pickle.classList.remove(liftPickle);
  })
}, options)

observer.observe(lid);







// fly animation

declareFlyVariables();
window.addEventListener("scroll", function(){
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop){
    // downscroll code
      flyTop = topValues[topPos+=1];
      animateFly('--flyTop',flyTop,'vh')
      flyRight = rightValues[rightPos+=1];
      animateFly('--flyRight',flyRight,'%')
    } else {
    // upscroll code
        if (topPos > 0) {
          flyTop = topValues[topPos-=1];
          animateFly('--flyTop',flyTop,'vh');
          flyRight = rightValues[rightPos-=1];
          animateFly('--flyRight',flyRight,'%')
        }
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


function declareFlyVariables() {
  fly = document.getElementById("fly");
  flySection = document.querySelector(".fly-section");
  root = document.documentElement;
  lastScrollTop = 0;
  topPos = 0;
  rightPos = 0;
  //topValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,66,65,64,63,62,61,60,59,58,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
  topValues = [1,3,5,7,9,11,13,15,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,31.5,32,32.5,33,33.5,34,34.5,35,35.5,36,36.5,37,37.5,38,38.5,39,39.5,40,40.5,41,41.5,42,42.5,43,43.5,44,44.5,45,45.5,46,46.5,47,47.5,48,48.5,49,49.5,50,50.5,51,51.5,52,52.5,53,53.5,54,54.5,55,55.5,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53];
  //rightValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120];
  rightValues = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,78,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,57,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74];

  createPath();
}

function animateFly(v,val,type) {
  root.style.setProperty(v,  val + type);
}

function createPath() {
  console.log("create path");
  for (let index = 0; index < topValues.length; index++) {
    newDiv = document.createElement("div"); 
    newDiv.classList.add("path-dot");  
    newDiv.style.top = topValues[index]+'vh';
    newDiv.style.right = rightValues[index]+'%';
    flySection.appendChild(newDiv);
    console.log("added dot");
  }
}

function togglePath() {
  paths = document.querySelectorAll(".path-dot");
  paths.forEach(item => item.classList.toggle("hide"));
}



// end fly animation


// code for scroll animation that continues to change on scroll





/*
const loadBar = document.querySelector(".loading-bar");
const loadClass = "load-animate";

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadBar.classList.add(loadClass);
      return;
    }
    loadBar.classList.remove(loadClass);
  })
})*/


let increasingWidth = "percent";
let decreasingWidth = "percent";


// Set things up
window.addEventListener("load", (event) => {
  loadBar = document.querySelector(".loading-bar");

  createObserver();
}, false);


function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.width = increasingWidth.replace("percent", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingWidth.replace("percent", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}



//set up observer
function createObserver() {
  let observer2;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildPercentList()
  };

  observer2 = new IntersectionObserver(handleIntersect, options);
  observer2.observe(loadBar);
}


// create array of values
function buildPercentList() {
  let percentArray = []
  let numSteps = 10;

  for (let i = 1; i <= numSteps; i++) {
    percent = i * numSteps;
    percentArray.push(percent);
  }

  percentArray.push(0);
  return percentArray;
}




// canvas animation
linePos = 30;
canv = document.getElementById('canvas');
ctx = canv.getContext('2d');
draw();
d = document.querySelector('HTML');
totalHeight = d.offsetHeight;

    scr = d.scrollTop;
    window.addEventListener("scroll", function(){
        console.log('scroll: '+d.scrollTop);
        scr = d.scrollTop;
        draw();
        linePos = updateLine(scr);
    })


function draw() {
  ctx.clearRect(0, 0, canv.width, canv.height);
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(50, linePos);
  ctx.stroke();
}

function updateLine(scr) {
  linePos += 1;
  return linePos;
}






// copied from yuyi code
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 247;
const currentFrame = index => (
`assets/scroll-sequence/1/animation-${index.toString().padStart(4, '0')}.jpg`
)

const preloadImages = () => {
for (let i = 1; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
}
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=1920;
canvas.height=1080;
img.onload=function(){
context.drawImage(img, 0, 0);
}

const updateImage = index => {
img.src = currentFrame(index);
context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
const scrollTop = html.scrollTop;
const maxScrollTop = html.scrollHeight - window.innerHeight;
const scrollFraction = scrollTop / maxScrollTop;
const frameIndex = Math.min(
  frameCount - 1,
  Math.ceil(scrollFraction * frameCount)
);

requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()