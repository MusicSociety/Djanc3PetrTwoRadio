const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

// Gestisci il click del pulsante
playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    // Se l'audio è in pausa, inizia a riprodurre
    audioPlayer.play().catch(err => console.log("Audio play error:", err));
    playButton.classList.add('glow'); // Aggiungi l'effetto glow
  } else {
    // Se l'audio è in riproduzione, mettilo in pausa
    audioPlayer.pause();
    playButton.classList.remove('glow'); // Rimuovi l'effetto glow
  }
});



