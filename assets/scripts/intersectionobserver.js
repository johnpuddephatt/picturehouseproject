var options = {
  threshold: [1],
  rootMargin: '-300px 0px'

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
