var timeline = document.querySelector('.timeline-scroller');
var current = document.querySelector('.timeline-item-active');

if (timeline && current) {

  timeline.scrollLeft = current.offsetLeft - timeline.offsetWidth / 2 + current.offsetWidth / 2;

  var curYPos, curXPos, curDown;

  timeline.addEventListener('mousemove', function(e) {
    if (curDown) {
      //curXPos is where the click begins
      timeline.scrollLeft = curLeft - 1.35 * (e.pageX - curXPos);

    }
  });

  timeline.addEventListener('mousedown', function(e) {
    curXPos = e.pageX;
    curDown = true;
    curLeft = timeline.scrollLeft;
  });

  timeline.addEventListener('mouseup', function(e) {
    curDown = false;
  });

}