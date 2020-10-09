var gallery = document.querySelector('.gallery-scroller');

if (gallery) {
  var body = document.querySelector('body');
  var curYPos, curXPos, curDown, dragging = false;

  gallery.addEventListener('mousemove', function(e) {
    if (curDown) {
      dragging = true;
      //curXPos is where the click begins
      gallery.classList.add('grabbing');

      gallery.scrollLeft = curLeft - 1.35 * (e.pageX - curXPos);
    }
  });

  gallery.addEventListener('mousedown', function(e) {
    curXPos = e.pageX;
    curDown = true;
    curLeft = gallery.scrollLeft;
    dragging = false;
  });

  gallery.addEventListener('mouseup', function(e) {
    curDown = false;
    gallery.classList.remove('grabbing');
  });

  gallery.addEventListener('mouseleave', function(e) {
    curDown = false;
    gallery.classList.remove('grabbing');
  });

  body.addEventListener('click', function(e){
    if(gallery.classList.contains('blackout') && !(e.target.classList.contains('gallery-item') || e.target.parentNode.classList.contains('gallery-item') || e.target.parentNode.parentNode.classList.contains('gallery-item'))) {
      gallery.classList.remove('blackout');
      videoContainer.parentNode.removeChild(videoContainer);
      document.querySelector('.gallery-item-active').classList.remove('gallery-item-active');
    }
  });

  galleryLightBoxWrapper = document.querySelector('.gallery-lightboxes');
  if(galleryLightBoxWrapper) {



    galleryLightBoxWrapper.addEventListener('click', function(e){
      if(galleryLightBoxWrapper.classList.contains('debug')) {
        if(e.target.tagName == 'IMG') {
          var rect = e.target.getBoundingClientRect();
          var xPercent = (((e.clientX - rect.left) / e.target.clientWidth * 100).toFixed(1));
          var yPercent = (((e.clientY - rect.top) / e.target.clientHeight * 100).toFixed(1));
          alert(`x: ${xPercent}%, y: ${yPercent}%`);
        }
      }
      if(e.target.classList.contains('gallery-hotspot')) {
        var target = document.querySelector('#' + e.target.dataset.target);


        if(target.classList.contains('active')) {
          target.classList.remove('active');
          e.target.classList.remove('active');
        }
        else {
          var currentActiveHotspot = document.querySelector('.gallery-hotspot.active');
          if(currentActiveHotspot) {
            var currentActiveTarget = document.querySelector('.lightbox-text-marker.active');
            currentActiveTarget.classList.remove('active');
            currentActiveHotspot.classList.remove('active');
          }
          target.classList.add('active');
          e.target.classList.add('active');
        }

      }
    });
  }


}


