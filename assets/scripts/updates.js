var updates = document.querySelector('.updates-scroller');

if (updates) {

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
  });

  updates.addEventListener('mouseup', function(e) {
    curDown = false;
  });

  updates.addEventListener('mouseleave', function(e) {
    curDown = false;
  });


  var updateItems = document.querySelectorAll('.updates-item');
  var videoContainer = document.createElement('div');
  videoContainer.classList.add('video-player');


  for (var i = 0; i < updateItems.length; i++) {
    updateItems[i].addEventListener('click', function(e){
      e.preventDefault();
      console.log(dragging);
      if(!dragging) {
        if(!this.classList.contains('updates-item-active')) {
          var oldVideo = document.querySelector('.video-player');
          if(oldVideo) {
            oldVideo.parentNode.removeChild(oldVideo);
            document.querySelector('.updates-item-active').classList.remove('updates-item-active');
          }
          videoContainer.innerHTML = '';
          var iframe = document.createElement('iframe');
          iframe.src = this.dataset.video;
          videoContainer.appendChild(iframe);
          videoContainer.style.width = updateItems[0].clientHeight * (16/9) + 'px';
          updates.insertBefore(videoContainer, this.nextSibling);
          this.classList.add('updates-item-active');
          var newLeft = (videoContainer.offsetLeft + videoContainer.clientWidth/2)- (updates.clientWidth/2);
          setTimeout(function(){
            window.smoothScroll(newLeft,500,null,updates,'horizontal');
          }, 500)
        }
      }
    });

  }

}

