const playButton = document.getElementById('playButton');
const video = document.getElementById('mainVideo');
const audioPlayer = document.getElementById('audioPlayer');

let videoStarted = false;

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    if (!videoStarted) {
      video.muted = false;
      video.play();
      videoStarted = true;
    } else {
      video.play(); // se era stato messo in pausa, riprendilo
    }

    audioPlayer.play();
    playButton.classList.add('glow');
  } else {
    audioPlayer.pause();
    video.pause(); // ferma anche il video
    playButton.classList.remove('glow');
  }
});
