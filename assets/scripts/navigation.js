var menuButton = document.querySelector('.menu-icon');
var navigation = document.querySelector('.trigger');

if (menuButton && navigation) {

  menuButton.addEventListener("click", function(){
    navigation.classList.toggle("active");
  });

  navigation.addEventListener("click", function(){
    navigation.classList.remove("active");
  });

}
