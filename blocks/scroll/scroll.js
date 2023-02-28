page = document.querySelector('.page-scroll-4');

pageHeight = page.offsetHeight-window.innerHeight;
photoCount = 58;

window.addEventListener('DOMContentLoaded', (event) => {
    pageHeight = page.offsetHeight-window.innerHeight;
})


window.addEventListener("scroll", function() {
    scrollPos = window.scrollY;
    positionPercentage = scrollPos/pageHeight;
    console.log(positionPercentage);

    setImageDisplay(positionPercentage);    
})


count = '';
for (let i = 0; i < photoCount+1; i+= 1) {
    count = i;
    createImageElement(count);
}
currentImage = document.querySelector('.animation-img-0');

allImages = document.querySelectorAll('.animation-img');

lastImage = document.querySelector('.animation-img-58');
lastImage.addEventListener('load', function() {
    console.log('last image loaded');
    allImages.forEach(image => {
        image.style.display = 'none';
    });
    document.querySelector('.loading-screen').style.display = 'none';
})

page.style.overflow = 'auto';


function createImageElement(c) {
    // img = document.createElement("img");
    img = new Image();
    img.src= 'assets/JPEG-2/yg'+c+'.jpg';
    img.classList.add('animation-img');
    img.classList.add('animation-img-'+c);
    page.append(img);
    img.style.display = 'block';
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