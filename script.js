const playButton = document.getElementById('playButton');
const video = document.getElementById('mainVideo');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    // Se la musica è in pausa, riproducila
    video.muted = false;
    video.play();
    audioPlayer.play();

    // Aggiungi l'effetto visivo al pulsante
    playButton.classList.add('glow');
    setTimeout(() => {
      playButton.classList.remove('glow');
    }, 1000);
  } else {
    // Se la musica è in riproduzione, fermala
    video.pause();
    audioPlayer.pause();
  }
});


