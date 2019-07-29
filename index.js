var aA = document.getElementById("audioA");
var isPlaying = false;

function playAudioA() {
  if (isPlaying){
    audioA.pause()
  }
  else{
    audioA.play();
  }
};
audioA.onplaying = function() {
  isPlaying = true;
};
audioA.onpause = function() {
  isPlaying = false;
};






var aD = document.getElementById("audioD");

function playAudioD() {
  if (isPlaying){
    audioD.pause()
  }
  else{
    audioD.play();
  }
};
audioD.onplaying = function() {
  isPlaying = true;
};
audioD.onpause = function() {
  isPlaying = false;
}
