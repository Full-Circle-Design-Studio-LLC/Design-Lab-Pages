// (function(){

//     var throttle = function(type, name, obj){
//         var obj = obj || window;
//         var running = false;
//         var func = function(){
//         if (running){ return; }
//         running = true;
//         requestAnimationFrame(function(){
//             obj.dispatchEvent(new CustomEvent(name));
//             running = false;
//         });
//         };
//         obj.addEventListener(type, func);
//     };
    
//     throttle("scroll", "optimizedScroll");
// })();


var pause = false;
var videoLoaded = false;
n = .2;
var video = document.getElementById("cow-video");
video.onloadeddata = function() {
    windowHeight = window.innerHeight*9;
    console.log('video is loaded');
    videoLoaded = true;
    videoLength = video.duration;
    i = videoLength/windowHeight;
}


window.addEventListener('DOMContentLoaded', (event) => {
    //videoLength = video.duration;

    windowHeight = window.innerHeight*9;

    //i = videoLength/windowHeight;
})


window.addEventListener("scroll", function() {
    // if (pause == false) {
    //     scrollPos = window.scrollY;
    //     n = scrollPos*i;
    //     video.currentTime = n;
    //     console.log('current time: '+n);
    //     pause = true;
    //     setTimeout(() => {
    //         pause = false;
    //     }, 200);
    // }

    if (videoLoaded == false) {
        return;
    }
    scrollPos = window.scrollY;
    n = scrollPos*i;
    nCalculation = n - video.currentTime;
    if (nCalculation < -0.1 || nCalculation > 0.1) {
        //console.log('n calculation: '+nCalculation);
        video.currentTime = n;
        //console.log('current time: '+n);
    }
    
})

// if last n value is too close to current, don't fire

