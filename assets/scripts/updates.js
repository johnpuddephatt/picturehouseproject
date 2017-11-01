var updates = document.querySelector('.updates-scroller');

if (updates) {
  var body = document.querySelector('body');
  var curYPos, curXPos, curDown, dragging = false;

  updates.addEventListener('mousemove', function(e) {

    if (curDown) {
      dragging = true;
      //curXPos is where the click begins
      updates.scrollLeft = curLeft - 1.35 * (e.pageX - curXPos);

    }
  });

  updates.addEventListener('mousedown', function(e) {
    curXPos = e.pageX;
    curDown = true;
    curLeft = updates.scrollLeft;
    dragging = false;
    updates.classList.add('grabbing');
  });

  updates.addEventListener('mouseup', function(e) {
    curDown = false;
    updates.classList.remove('grabbing');
  });

  updates.addEventListener('mouseleave', function(e) {
    curDown = false;
    updates.classList.remove('grabbing');
  });

  body.addEventListener('click', function(e){
    if(updates.classList.contains('blackout') && !(e.target.classList.contains('updates-item') || e.target.parentNode.classList.contains('updates-item') || e.target.parentNode.parentNode.classList.contains('updates-item'))) {
      updates.classList.remove('blackout');
      videoContainer.parentNode.removeChild(videoContainer);
      document.querySelector('.updates-item-active').classList.remove('updates-item-active');
    }
  });



  var updateItems = document.querySelectorAll('.updates-item');
  var videoContainer = document.createElement('div');
  videoContainer.classList.add('video-player');


  for (var i = 0; i < updateItems.length; i++) {
    if(updateItems[i].dataset.video) {
      updateItems[i].addEventListener('click', function(e){
        e.preventDefault();
        if(!dragging) {
          updates.classList.add('blackout');
          if(!this.classList.contains('updates-item-active')) {
            var oldVideo = document.querySelector('.video-player');
            if(oldVideo) {
              oldVideo.parentNode.removeChild(oldVideo);
              document.querySelector('.updates-item-active').classList.remove('updates-item-active');
            }
            videoContainer.innerHTML = '';
            var iframe = document.createElement('iframe');
            iframe.src = this.dataset.video + '?showinfo=0&rel=0&autoplay=1';
            videoContainer.appendChild(iframe);
            videoContainer.style.width = (updateItems[0].clientHeight) * (16/9) + 'px';
            updates.insertBefore(videoContainer, this.nextSibling);
            this.classList.add('updates-item-active');
            // var newLeft = (videoContainer.offsetLeft + videoContainer.clientWidth/2)- (updates.clientWidth/2);
            var newLeft = this.offsetLeft;
            setTimeout(function(){
              window.smoothScroll(newLeft,500,null,updates,'horizontal');
            }, 500);
          }
        }
      });
    }
  }

}

