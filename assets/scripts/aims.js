var aimsButtons = document.querySelectorAll('.aim .button');

for (var i=0; i < aimsButtons.length; i++) {
  aimsButtons[i].addEventListener('click', function(e){
    this.parentNode.parentNode.classList.toggle('slideout');
    e.preventDefault();
  });
}