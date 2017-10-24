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
    document.querySelector('a[href="#'+id+'"]').classList.add(activeClass);
  }

  container.addEventListener('scroll', function(event) {
    getClosestSection();
  });


})();


// let observers = [];
// let navLinks = [];
// let prevRatio = [];
// startup();
//
// function startup() {
//
//   // Options for the observers
//
//   let observerOptions = {
//     root: null,
//     rootMargin: "0px",
//     threshold: [0.1, 0.25, 0.5, 0.75, 0.9]
//   };
//
//   // Add each box, creating a new observer for each
//   navLinks = document.querySelectorAll(".page-link");
//
//   for (let i=0; i<navLinks.length; i++) {
//     observers[i] = new IntersectionObserver(intersectionCallback, observerOptions);
//     observers[i].observe(document.querySelector(navLinks[i].getAttribute('href')));
//   }
// }
//
// function intersectionCallback(entries) {
//   entries.forEach(function(entry) {
//     if(entry.intersectionRatio > prevRatio[entry.target.id]) {
//       removeActiveLinks();
//       document.querySelector(".page-link[href='#" + entry.target.id + "']").classList.add('active');
//     }
//     else if(entry.intersectionRatio < .2 ) {
//       document.querySelector(".page-link[href='#" + entry.target.id + "']").classList.remove('active');
//     }
//     prevRatio[entry.target.id] = entry.intersectionRatio;
//   });
// }
//
// function removeActiveLinks() {
//   let activeLinks = document.querySelectorAll('.page-link.active');
//   for (let i=0; i<activeLinks.length; i++) {
//     activeLinks[i].classList.remove('active');
//   }
// }
//
