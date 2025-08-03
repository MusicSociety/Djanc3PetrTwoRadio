const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');
const equalizerContainer = document.getElementById('equalizer');

let animationIntervals = []; // Array per gestire gli intervalli

// Crea le barre dell'equalizzatore, solo se non esistono già
function createEqualizerBars(numBars = 80) {
  if (equalizerContainer.children.length > 0) return;

  for (let i = 0; i < numBars; i++) {
    const bar = document.createElement('div');
    bar.classList.add('equalizer-bar');
    equalizerContainer.appendChild(bar);
  }
}

// Avvia le animazioni con altezza e velocità random
function startEqualizerAnimation() {
  const bars = document.querySelectorAll('.equalizer-bar');

  bars.forEach(bar => {
    const delay = Math.floor(Math.random() * 200) + 100;
    const interval = setInterval(() => {
      const randomHeight = Math.floor(Math.random() * 80) + 10;
      bar.style.height = `${randomHeight}px`;
    }, delay);

    animationIntervals.push(interval);
  });
}

// Ferma le animazioni e resetta le barre
function stopEqualizerAnimation() {
  animationIntervals.forEach(interval => clearInterval(interval));
  animationIntervals = [];

  const bars = document.querySelectorAll('.equalizer-bar');
  bars.forEach(bar => {
    bar.style.height = '8px';
  });
}

// Inizializzazione (una sola volta)
createEqualizerBars(80);

// Gestione click del pulsante play
playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play().catch(err => console.log("Errore riproduzione audio:", err));
    playButton.classList.add('glow');
    startEqualizerAnimation();
  } else {
    audioPlayer.pause();
    playButton.classList.remove('glow');
    stopEqualizerAnimation();
  }
});
