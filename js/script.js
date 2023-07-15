{
  document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
  });
  document
    .getElementById('play-scissors')
    .addEventListener('click', function () {
      playGame(3);
    });
}
/*document.getElementById('play-rock').addEventListener('click', const () {
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', const () {
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', const () {
  playGame(3);
});*/
