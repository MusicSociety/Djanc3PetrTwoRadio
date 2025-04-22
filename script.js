const playButton = document.getElementById('playButton');
const video = document.getElementById('mainVideo');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    video.muted = false;
    video.play();
    audioPlayer.play();
    playButton.classList.add('glow');
  } else {
    video.pause();
    audioPlayer.pause();
    playButton.classList.remove('glow');
  }
});