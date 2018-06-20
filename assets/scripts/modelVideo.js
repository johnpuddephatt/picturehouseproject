// var times = [0,6.6,12,16.5,20.5];

var times = [0,8.2,15,20.35,25.5,32.7];
var transition = 1.5;
var near;

var videoWrapper = document.querySelector('.explore--video-wrapper');
var video = document.querySelector('.explore--video');
var intervalRewind;
var videoIntro = document.querySelector('#explore--sidebar__intro');
var videoInstructions = document.querySelector('#explore--sidebar__instructions');


var modelMakerButton = document.querySelector('.explore--sidebar__model-maker__button');

video.addEventListener('canplaythrough',function(){
  video.classList.add('canplaythrough');
});

modelMakerButton.addEventListener('click', function(){
  var videoSection = document.getElementById('updates');
  window.smoothScroll(videoSection,500, function(){
    document.querySelector('.updates-item[data-video="https://www.youtube.com/embed/VmAUl2-jXA0"]').click();
  },null,'vertical', 100);

});



function seekVideo(direction,target) {
  var targetTime = times[target];
  video.playbackRate = 1.0;
  video.play();
  video.ontimeupdate = function() {
    playUntil(direction,targetTime,target);
  };
}

// video.addEventListener('click', function(e){
//   console.log('left:' + (100*(e.offsetX-17)/video.clientWidth) + '%');
//   console.log('top: ' + (100*(e.offsetY-17)/video.clientHeight) + '%');
// });

videoWrapper.addEventListener('click', function(e){
  if(e.target.classList.contains('hotspot')) {
    var target = document.querySelector('#' + e.target.dataset.target);


    if(target.classList.contains('active')) {
      videoInstructions.classList.remove('hidden');
      target.classList.remove('active');
      e.target.classList.remove('active');

    }
    else {
      videoInstructions.classList.add('hidden');
      var currentActiveHotspot = document.querySelector('.hotspot.active');
      if(currentActiveHotspot) {
        var currentActiveTarget = document.querySelector('.explore--sidebar--content.active');
        currentActiveTarget.classList.remove('active');
        currentActiveHotspot.classList.remove('active');
      }
      target.classList.add('active');
      e.target.classList.add('active');
    }

  }
});

function playUntil(direction,targetTime,target) {
  // Display the current position of the audio in a p element with id="demo"
  if(direction == 'forwards') {
    if ((video.currentTime >= (targetTime - transition)) && !near) {
      videoWrapper.dataset.nearstage = target;
      near = true;
    }
    if (video.currentTime >= targetTime) {
      video.pause();
      near = false;
      videoWrapper.dataset.stage = target;
      videoWrapper.dataset.nearstage = '';
      videoWrapper.classList.remove('playing');
    }
  }
}

var exploreButton = document.querySelector('.explore--video--button');

exploreButton.addEventListener('click', function(){
  var currentActiveHotspot = document.querySelector('.hotspot.active');
  if(currentActiveHotspot) {
    var currentActiveTarget = document.querySelector('.explore--sidebar--content.active');
    currentActiveTarget.classList.remove('active');
    currentActiveHotspot.classList.remove('active');
  }
  videoIntro.classList.add('hidden');
  videoInstructions.classList.remove('hidden');

  if (!videoWrapper.dataset.stage) {
    videoWrapper.dataset.stage = 0;
  }
  else {
    videoWrapper.classList.add('playing');
    var stage = videoWrapper.dataset.stage;
    var target = parseInt(stage) + 1;
    if (target >= times.length) {
      video.currentTime = 0;
      videoInstructions.classList.add('hidden');
      videoIntro.classList.remove('hidden');

      videoWrapper.removeAttribute('data-stage');
      videoWrapper.classList.remove('playing');

    }
    else {
      seekVideo('forwards',target);
    }

  }

});

