var aimsButtons = document.querySelectorAll('.aim .button');

for (var i=0; i < aimsButtons.length; i++) {
  aimsButtons[i].addEventListener('click', function(e){


    if ( this.parentNode.parentNode.classList.contains('slideout')) {
      this.parentNode.parentNode.classList.remove('slideout');
      this.innerText = 'Discover more';
    }
    else {

      if(document.querySelector('.slideout')) {
        currentSlide = document.querySelector('.slideout');
        currentSlide.querySelector('.button').innerText = 'Discover more';
        currentSlide.classList.remove('slideout');
      }
      this.parentNode.parentNode.classList.add('slideout');
      this.innerText = 'Close';
    }

    e.preventDefault();
  });
}