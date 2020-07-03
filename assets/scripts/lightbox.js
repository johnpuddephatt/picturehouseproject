// Source: https://github.com/Alhadis/Snippets/blob/master/js/polyfills/IE8-child-elements.js
if(!("nextElementSibling" in document.documentElement)){
    Object.defineProperty(Element.prototype, "nextElementSibling", {
        get: function(){
            var e = this.nextSibling;
            while(e && 1 !== e.nodeType)
                e = e.nextSibling;
            return e;
        }
    });
}

var historyItems = document.querySelectorAll('.gallery-item');
console.log(historyItems);
if(historyItems) {
  for(var i = 0; i < historyItems.length; i++) {
    historyItems[i].addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(this.dataset.target);
      console.log(target);
      target.classList.add('active');
    });
  }
}


var closeButtons = document.querySelectorAll('.close');

if(closeButtons) {
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', function(e){
      e.preventDefault();
      this.parentNode.parentNode.classList.remove('active');
    });
  }
}


var navigationButtons = document.querySelectorAll('.lightbox-navigation a');

if(navigationButtons) {
  for (var i = 0; i < navigationButtons.length; i++) {
    navigationButtons[i].addEventListener('click', function(e){
      e.preventDefault();
      var item = this.parentNode.parentNode.parentNode;
      item.classList.remove('active');
      if(this.classList.contains('next')) {
        if(item.nextElementSibling != null) {
          item.nextElementSibling.classList.add('active');
        }
        else {
          item.parentNode.firstElementChild.classList.add('active');
        }
      }
      else if(this.classList.contains('previous')) {
        if(item.previousElementSibling != null) {
          item.previousElementSibling.classList.add('active');
        }
        else {
          item.parentNode.lastElementChild.classList.add('active');
        }
      }

    });
  }
}