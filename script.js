const playButton = document.getElementById('playButton');
const video = document.getElementById('mainVideo');
const audioPlayer = document.getElementById('audioPlayer');

let videoStarted = false;

// iOS workaround per sbloccare il contesto audio
const unlockAudio = () => {
  const silentAudio = new Audio();
  silentAudio.play().catch(() => {}); // forza il contesto audio anche se fallisce
  document.removeEventListener('click', unlockAudio);
};
document.addEventListener('click', unlockAudio);

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

