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
