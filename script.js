const playButton = document.getElementById('playButton');
const video = document.getElementById('mainVideo');
const audioPlayer = document.getElementById('audioPlayer');

let videoStarted = false;

// iOS workaround per sbloccare il contesto audio
const unlockAudio = () => {
  // Serve davvero solo una riproduzione "vuota" per sbloccare il contesto
  audioPlayer.play().then(() => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
  }).catch(() => {});
  document.removeEventListener('click', unlockAudio);
};
document.addEventListener('click', unlockAudio);

video.addEventListener('ended', () => {
  video.currentTime = 0;
  video.play().catch(err => console.log("Loop error:", err));
});

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    if (!videoStarted) {
      video.muted = false;
      video.play().catch(err => console.log("Video play error:", err));
      videoStarted = true;
    } else {
      video.play().catch(err => console.log("Video resume error:", err));
    }

    audioPlayer.play().catch(err => console.log("Audio play error:", err));
    playButton.classList.add('glow');
  } else {
    audioPlayer.pause();
    video.pause();
    playButton.classList.remove('glow');
  }
});

audioPlayer.load(); // forza Safari a preparare il flusso



