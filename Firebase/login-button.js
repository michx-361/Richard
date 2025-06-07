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
