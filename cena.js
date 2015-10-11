function johnCena() {
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
    setInterval(loopMusic, (loopAudio.duration * 1000) - 100);
  }

  function loopMusic() {
    loopAudio.pause();
    loopAudio.currentTime = 0;
    loopAudio.play();
  }

  start();
}

$(document).ready(function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("#button").click(function() {
      johnCena();
    });
  } else {
    johnCena();
  }
});

