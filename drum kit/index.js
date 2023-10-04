var noofDrums = document.querySelectorAll(".drum").length;
function Makesound(key){
  switch (key) {
    case 'w':
      var sound1 = new Audio("/drum kit/sounds/tom-1.mp3");
      sound1.play();
      break;
    case 'a':
      var sound2 = new Audio("/drum kit/sounds/tom-2.mp3");
      sound2.play();
      break;
    case 's':
      var sound3 = new Audio("/drum kit/sounds/tom-3.mp3");
      sound3.play();
      break;
    case 'd':
      var sound4 = new Audio("/drum kit/sounds/tom-4.mp3");
      sound4.play();
      break;
    case 'j':
      var sound5 = new Audio("/drum kit/sounds/crash.mp3");
      sound5.play();
      break;
    case 'k':
      var sound6 = new Audio("/drum kit/sounds/kick-bass.mp3");
      sound6.play();
      break;
    case 'l':
      var sound7 = new Audio("/drum kit/sounds/snare.mp3");
      sound7.play();
      break;           
      
  
    default:
      break;
  }
}

for(i = 0; i<noofDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var music = this.innerHtml;
    Makesound(music);
  });
}
// callback function and keybord event listner.....
document.addEventListener("keypress", function(event){
  Makesound(event.key);
  ButtonAnimation(event.key);

})
// Animation.....
function ButtonAnimation(currentkey){
  var Active = document.querySelector("."+ currentkey);
  Active.classList.add("pressed");
  setTimeout(function(){
    Active.classList.remove("pressed")
  },100);

}




