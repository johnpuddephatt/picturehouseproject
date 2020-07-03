(function() {
  'use strict';

  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('a.page-link');
  var activeClass = 'active';
  var container = document;

  function getClosestSection() {
    var sectionsLength = sections.length;

    for(var index=0; index<sectionsLength; index++) {
      if (isBelowScroll(sections.item(index))) {
        selectLink(sections.item(index).id)
        break;
      }
    }

  }

  function isBelowScroll(element) {
    var position = element.getBoundingClientRect();
    return position.bottom > (window.innerHeight/2);
  }

  function selectLink(id) {
    for(var i=0; i<navLinks.length; i++) {
      navLinks[i].classList.remove(activeClass);
    }
    if(document.querySelector('a[href="#'+id+'"]')) {
      document.querySelector('a[href="#'+id+'"]').classList.add(activeClass);
    }
  }

  container.addEventListener('scroll', function(event) {
    getClosestSection();
  });

})();