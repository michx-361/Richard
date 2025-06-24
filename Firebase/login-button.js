function openLoginWindow() {
  const width = 400;
  const height = 500;
  const left = (screen.width / 2) - (width / 2);
  const top = (screen.height / 2) - (height / 2);

  window.open(
    '../Firebase/login.html',
    'LoginFenster',
    `width=${width},height=${height},top=${top},left=${left},resizable=no`
  );
}


const startImage = document.getElementById('startImage');
const hoverAudio = document.getElementById('hoverAudio');

// Sound beim Hover starten
startImage.addEventListener('mouseenter', function() {
    hoverAudio.currentTime = 1.5; // Von Anfang starten
    hoverAudio.play().catch(e => console.log('Audio play failed:', e));
});

// Sound beim Verlassen stoppen
startImage.addEventListener('mouseleave', function() {
    hoverAudio.pause();
    hoverAudio.currentTime = 1.5; // Zurück zum Anfang
});
