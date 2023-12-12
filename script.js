let numberofbuttons = document.querySelectorAll(".flutebtn").length;
for (var i = 0; i < numberofbuttons; i++) {
  document.querySelectorAll(".flutebtn")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "a":
      var flute1 = new Audio('volume/flute1.mp3');
      flute1.play();
      break;
    case "b":
      var flute2 = new Audio('volume/flute2.mp3');
      flute2.play();
      break;
    case "c":
      var flute3 = new Audio('volume/flute3.mp3');
      flute3.play();
      break;
    case "d":
      var flute4 = new Audio('volume/flute4.mp3');
      flute4.play();
      break;
    case "e":
      var flute5 = new Audio('volume/flute5.mp3');
      flute5.play();
      break;
    case "f":
      var flute6 = new Audio('volume/flute6.mp3');
      flute6.play();
      break;
    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}