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

        console.log('scrolled');

        //downUp();
    
        if (containerDiv.getBoundingClientRect().top <= 0) {
            transX = mVal*containerDiv.getBoundingClientRect().top;
            if (transX <= -secW) {
                if (transX < transXPrev) {
                    transX = transXPrev;
                    zF = false;
                    hz1.style.zIndex = '-2';
                    inH = false;
                }
            } else {
                zF = true;
            }
            transXPrev = transX;
            hz1.style.transform = "translateX(" + transX + "px)";
            if (zF == true) {
                hz1.style.zIndex = '2';
                inH = true;
            }
            //root.style.setProperty('--leftVal', transX+'px');
        } else {
            hz1.style.zIndex = '-2';
            zF = true;
            inH = false;
        }
    }
)



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
  
    items.forEach(scrollItem => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (scrollItem.classList.contains("pause-scroll")) {
            animate(scrollItem, entry, scrl1, true);
          } else if (scrollItem.classList.contains("cronut-scroll")) {
            animate(scrollItem, entry, scrl2, false);
          }
        })
      }, options)

      observer.observe(scrollItem);
    })
  }
  
  function animate(scrollItem, entry, className, hold) {
    if (entry.isIntersecting) {
        scrollItem.classList.add(className);
        if (scrollItem.classList.contains('cronut-scroll')) {
            cro = (('.cronut-'+scrollItem.classList[2].substring(14, 16)));
            cro = document.querySelector(cro);
            cro.classList.add('show-cronut');  
            
            cro2 = (('.scrl-sec-'+scrollItem.classList[2].substring(14, 16)));
            cro2 = document.querySelector(cro2);
            cro2.classList.add('show-cronut');            
        }

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