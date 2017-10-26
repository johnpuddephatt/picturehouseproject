var options = {
  threshold: [0.9],
  rootMargin: '0px'

};

var images = document.querySelectorAll('.aim-image .bw');

var callback =  function(entries, observer) {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0.9) {
      entry.target.style.opacity = 1;
    }
    else {
      entry.target.style.opacity = 0;
    }
  });
}

var observer = new IntersectionObserver(callback, options);

images.forEach(image => {
  observer.observe(image);
});
