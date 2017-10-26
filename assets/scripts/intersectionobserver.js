var options = {
  threshold: [0.8, 0.9, 1.0],
  rootMargin: '0px'

};

var images = document.querySelectorAll('.aim-image .bw');

var callback =  function(entries, observer) {
  entries.forEach(entry => {
    if(entry.intersectionRatio > 0) {
      entry.target.style.opacity = 1 - Math.round( entry.intersectionRatio * 10 ) / 10;
    }
  });
}

var observer = new IntersectionObserver(callback, options);

images.forEach(image => {
  observer.observe(image);
});
