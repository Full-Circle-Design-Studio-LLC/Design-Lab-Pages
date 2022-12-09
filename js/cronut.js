body = document.querySelector('body');
scrollSetup();

root = document.documentElement;


// horizontal scrolling section

containerDiv = document.querySelector('.cronut-scroll-01');

var hz1 = document.querySelector('.horizontal-scroll-section-c');

screenVariables();
transX = 0;
transXPrev = -1;
zF = true;
pC = document.querySelector('.page-cronut-c');

hZS = document.querySelector('.horizontal-scroll-section-c');
dateFixed = document.querySelector('.date-fixed');

currentPane = 1;

hZS.addEventListener("scroll", logScroll);
function logScroll() {
  console.log('scrolled 2');
}


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
    
    pC.addEventListener("scroll", function(){


        //downUp();
        topVal = containerDiv.getBoundingClientRect().top;
        if (topVal <= 0) {
            transX = mVal*topVal;
            if (transX <= -secW) {
                if (transX < transXPrev) {
                    transX = transXPrev;
                    zF = false;
                    hz1.style.zIndex = '-2';
                    dateFixed.style.zIndex = '-2';
                    dateFixed.style.position = 'relative';
                    inH = false;
                }
            } else {
                zF = true;
            }
            transXPrev = transX;
            hz1.style.transform = "translateX(" + transX + "px)";
            if (zF == true) {
                hz1.style.zIndex = '2';
                dateFixed.style.zIndex = '2';
                dateFixed.style.position = 'unset';
                inH = true;
            }
            //root.style.setProperty('--leftVal', transX+'px');

            months = document.querySelectorAll('.month-fixed');
            if (topVal >= 0) {
              //resetMonths(0);
            } else if (topVal >= halfH*(-1)) {
              console.log('1');
              if (1 < currentPane) {
                mHide(months[1]);
              } else {
                mShow(months[0]);
              }
              currentPane = 1;
            } else if (topVal >= (-scrnHeight - halfH)) {
              console.log('2');
              mHide(1);
              mShow(months[1]);
              currentPane = 2;
            } else if (topVal >= (-scrnHeight*2 - halfH)) {
              console.log('3');
              mHide(2);
              mShow(months[2]);
              currentPane = 3;
            } else if (topVal >= (-scrnHeight*3 - halfH)) {
              console.log('4');
              mHide(3);
              mShow(months[3]);
              currentPane = 4;
            } else if (topVal >= (-scrnHeight*4 - halfH)) {
              console.log('5');
              mHide(4);
              mShow(months[4]);
              currentPane = 5;
            } else if (topVal >= (-scrnHeight*5 - halfH)) {
              console.log('6');
              mHide(5);
              mShow(months[5]);
              currentPane = 6;
            } else if (topVal >= (-scrnHeight*6 - halfH)) {
              console.log('7');
              mHide(6);
              mShow(months[6]);
              currentPane = 7;
            } else if (topVal >= (-scrnHeight*7 - halfH)) {
              console.log('8');
              mHide(7);
              mShow(months[7]);
              currentPane = 8;
            } else if (topVal >= (-scrnHeight*8 - halfH)) {
              console.log('9');
              mHide(8);
              mShow(months[8]);
              currentPane = 9;
            } else if (topVal >= (-scrnHeight*9 - halfH)) {
              console.log('10');
              mHide(9);
              mShow(months[9]);
              currentPane = 10;
            } else if (topVal >= (-scrnHeight*10 - halfH)) {
              console.log('11');
              mHide(10);
              mShow(months[10]);
              currentPane = 11;
            } else if (topVal >= (-scrnHeight*11 - halfH)) {
              console.log('12');
              mHide(11);
              mHide(months[10]);
              mShow(months[11]);
              currentPane = 12;
            }
        } else {
            hz1.style.zIndex = '-2';
            dateFixed.style.zIndex = '-2';
            dateFixed.style.position = 'relative';
            zF = true;
            inH = false;
        }
    }
)

function mShow(m) {
  m.style.display = 'block';
  m.classList.add('m-show');
  m.classList.remove('m-hide');
}

function mHide(f) {
  c = 0;
  while (c < 12) {
    if (c != f) {
      months[c].classList.remove('m-show');
      months[c].classList.add('m-hide');
    }
    c += 1;
  }
  // m.addEventListener('transitionend', function() {
  //   m.style.display = 'none';
  // })
}


// scroll animations

function scrollSetup() {
    let options = {
      root: document.querySelector('#scrollArea'),
      rootMargin: '0px 0px 0px 0px',
      //threshold: 1.0
    }
    items = document.querySelectorAll('.scroll-item');
    scrl1 = "scrl-1";
    scrl2 = "scrl-2";

    showMonth = 'm-show';
    hideMonth = 'm-hide';
  
    items.forEach(scrollItem => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (scrollItem.classList.contains("pause-scroll")) {
            animate(scrollItem, entry, scrl1, true);
          } else if (scrollItem.classList.contains("cronut-scroll")) {
            animate(scrollItem, entry, scrl2, false);
          } else if (scrollItem.classList.contains('c-scroll')) {
            console.log('scroll item');
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
      if (scrollItem.classList.contains('cronut-scroll')) {
        cro.classList.remove('show-cronut');
        cro2.classList.remove('show-cronut');
      }
    }
  }


function screenVariables() {
  secH = window.innerHeight*11;
  secW = window.innerWidth*11;
  scrnHeight = window.innerHeight;
  halfH = scrnHeight/2;
  mVal = secW/secH;
}







// parallax mouse effect
cronut = document.querySelector('.cronut-t');
pItems = document.querySelectorAll('.mouse-parallax');
isHovering = false;
function hovering(cID) {
    document.querySelector('.'+cID).classList.add('c-hover-'+cID.slice(-2));
    document.querySelector('.'+cID).classList.add('c-hover-s');
    cContainer = document.getElementById(cID);
    isHovering = true;
    containerOffsetX = cContainer.getBoundingClientRect().x;
    containerOffsetY = cContainer.getBoundingClientRect().y;
    centerX = cContainer.offsetWidth/2;
    centerY = cContainer.offsetHeight/2;
    pItems.forEach(item => {
        item.style.transition = '.1s';
    })
}
function notHovering(cID2) {
    document.querySelector('.'+cID2).classList.remove('c-hover-'+cID2.slice(-2));
    document.querySelector('.'+cID2).classList.remove('c-hover-s');
    isHovering = false;
    pItems.forEach(item => {
        item.style.transform = null;
        item.style.translate = null;
        item.style.transition = '.4s';
    })
}

window.addEventListener('mousemove', parallax);
function parallax(e) {
    if (isHovering == true) {
        pItems.forEach(item =>  {
            dVal = item.getAttribute('data-value');
            cX = ((centerX - e.clientX - containerOffsetX)) * dVal;
            cY = ((centerY - e.clientY - containerOffsetY)) * dVal;
            item.style.translate = cX +'px '+ cY +'px';
        })        
    }
}





// snap scroll
inH = false;
lastScrollTop = 0;
currentSection = 1;
pauseScroll = false;

// if in  horizontal section: scroll down goes right, scroll up goes left
function downUp() {
  if (inH == true && pauseScroll == false) {
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop){
      // downscroll code
        console.log('downscroll');
        if (currentSection < 12) {
          currentSection += 1;
          document.getElementById("c-s-"+currentSection).scrollIntoView();
          console.log('scrolled to section '+currentSection);
        }
      } else {
      // upscroll code
        console.log('upscroll');
        if (currentSection > 1) {
          currentSection -= 1;
          document.getElementById("c-s-"+currentSection).scrollIntoView();
          console.log('scrolled to section '+currentSection);
        }  
      }
      pauseScroll = true;
      setTimeout(() => {
        pauseScroll = false;
      }, 1000);
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }
}

// after running downUp once, pause all scrolling for very short period

//textWidths();
function textWidths() {
  texts = document.querySelectorAll('.cronut-text-t');
  months = document.querySelectorAll('.month-fixed');
  c = 0;
  months.forEach(item => {
    w = item.offsetWidth;
    w = w + 76;
    texts[c].style.width = w+'px';

    c += 1;
  })
}