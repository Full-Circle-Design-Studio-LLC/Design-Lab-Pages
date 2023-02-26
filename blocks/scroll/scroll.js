
pause = false;
n = .2;

count = '';
page = document.querySelector('.page-scroll-4');

pageHeight = page.offsetHeight-window.innerHeight;
photoCount = 250;

window.addEventListener('DOMContentLoaded', (event) => {
    pageHeight = page.offsetHeight-window.innerHeight;
})


window.addEventListener("scroll", function() {
    scrollPos = window.scrollY;
    positionPercentage = scrollPos/pageHeight;
    console.log(positionPercentage);

    setImageDisplay(positionPercentage);
    //n = scrollPos*i;
    // nCalculation = n - video.currentTime;
    // if (nCalculation < -0.1 || nCalculation > 0.1) {
    //     video.currentTime = n;
    // }
    
})



for (let i = 0; i < photoCount+1; i++) {
    count = i;
    createImageElement(count);
}
currentImage = document.querySelector('.animation-img-1');


function createImageElement(c) {
    img = document.createElement("img");
    img.src= 'assets/JPEG/animation-'+c+'.jpg';
    img.classList.add('animation-img');
    img.classList.add('animation-img-'+c);
    page.append(img);
}

function setImageDisplay(percent) {
    percentOfAnimation = percent*photoCount;
    percentOfAnimation = Math.round(percentOfAnimation);
    console.log(percentOfAnimation);
    if (percentOfAnimation >=0 && percentOfAnimation <= photoCount) {
        currentImage.style.display = 'none';
        currentImage = document.querySelector('.animation-img-'+percentOfAnimation);
        currentImage.style.display = 'block';
    }
}