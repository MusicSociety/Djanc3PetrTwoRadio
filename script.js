const playButton = document.getElementById('playButton');
const video = document.getElementById('mainVideo');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    // Se la musica è in pausa, riproducila
    video.muted = false;
    video.play();
    audioPlayer.play();

    // Aggiungi l'effetto visivo al pulsante (box-shadow)
    playButton.classList.add('glow');
  } else {
    // Se la musica è in riproduzione, fermala
    video.pause();
    audioPlayer.pause();

    // Rimuovi l'effetto visivo al pulsante (box-shadow)
    playButton.classList.remove('glow');
  }
});


