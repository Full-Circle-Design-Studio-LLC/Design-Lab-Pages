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




window.addEventListener('DOMContentLoaded', (event) => {
    vid = document.getElementById('cow-video');
    vLen = vid.duration;

    h = window.innerHeight*9;

    i = vLen/h;
})


window.addEventListener("scroll", function() {
    scrollPos = window.scrollY;
    n = scrollPos*i;
    vid.currentTime = n;
})


