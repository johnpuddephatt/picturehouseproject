var timeline = document.querySelector('.timeline-scroller');
var current = document.querySelector('.timeline-item-active');

if (timeline && current) {

  timeline.scrollLeft = current.offsetLeft - timeline.offsetWidth / 2 + current.offsetWidth / 2;

  var curYPos, curXPos, curDown;

  timeline.addEventListener('mousemove', function(e) {
    if (curDown) {
      timeline.scrollLeft = curLeft - 1.35 * (e.pageX - curXPos);
    }
  });

  timeline.addEventListener('mousedown', function(e) {
    curXPos = e.pageX;
    curDown = true;
    curLeft = timeline.scrollLeft;
    timeline.classList.add('grabbing');
  });

  timeline.addEventListener('mouseup', function(e) {
    curDown = false;
    timeline.classList.remove('grabbing');
  });

  timeline.addEventListener('mouseleave', function(e) {
    curDown = false;
    timeline.classList.remove('grabbing');
  });


}