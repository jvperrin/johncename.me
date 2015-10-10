$(document).ready(function() {
  var introAudio = new Audio('intro.mp3');
  var loopAudio = new Audio('loop.mp3');
  introAudio.load();
  loopAudio.load();

  function start() {
    introAudio.play();
    introAudio.addEventListener('loadedmetadata', function() {
      setTimeout(startLoop, (introAudio.duration * 1000));
    });
  }

  function startLoop() {
    introAudio.pause();
    loopAudio.play();
    setInterval(loopMusic, (loopAudio.duration * 1000) - 50);
  }

  function loopMusic() {
    loopAudio.pause();
    loopAudio.currentTime = 0;
    loopAudio.play();
  }

  start();
});

