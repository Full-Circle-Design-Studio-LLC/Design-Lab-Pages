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
