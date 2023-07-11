function printMessage(msg) {
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
  if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else if (
    (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    (argComputerMove == 'nożce' && argPlayerMove == 'kamień') ||
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce')
  ) {
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Niestety przegrałeś, komputer wygrywa!');
  }
}

function playGame(playerInput) {
  clearMessages();
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Ruch komputera to: ' + computerMove);

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Mój ruch to: ' + playerMove);
  displayResult(computerMove, playerMove);
}
