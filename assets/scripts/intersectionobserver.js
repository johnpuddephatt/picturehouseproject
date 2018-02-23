var options = {
  threshold: [0.95],
  rootMargin: '-30px 0px'

};

var images = document.querySelectorAll('.aim-image .bw');

var callback =  function(entries, observer) {
  entries.forEach(entry => {
    if(entry.intersectionRatio >= 0.95) {
      entry.target.parentNode.classList.add('in-view');
    }
    else {
      entry.target.parentNode.classList.remove('in-view');
    }
  });
}

var observer = new IntersectionObserver(callback, options);

images.forEach(image => {
  observer.observe(image);
});
