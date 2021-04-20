var expandUpdatesButton = document.getElementById('expand-updates-button');
var updatesOverflow = document.querySelector('.updates-panel__overflow');

if(expandUpdatesButton && updatesOverflow) {
  expandUpdatesButton.addEventListener('click', function(){
    console.log('event');
    updatesOverflow.classList.toggle('show');

  });
}