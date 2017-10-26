var options = {
  threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
  rootMargin: '-180px 0px'

};

var images = document.querySelectorAll('.aim-image .bw');

var callback =  function(entries, observer) {
  entries.forEach(entry => {
    entry.target.style.opacity = 1 - Math.round( entry.intersectionRatio * 10 ) / 10;
  });
}

var observer = new IntersectionObserver(callback, options);


images.forEach(image => {
  observer.observe(image);
});
