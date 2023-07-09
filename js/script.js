let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if (randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
    computerMove = 'papier';
} else if (randomNumber == 3){
        computerMove = 'nożyce';
} 

printMessage('Ruch komputera to: ' + computerMove);


console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'Wybrałeś złą wartość, wybierz ponownie właściwą wartość 1, 2 lub 3';

if(playerInput == '1'){
  playerMove = 'kamień';
}else if (playerInput == '2'){
    playerMove = 'papier';
} else if (playerInput == '3'){
    playerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  }

  else if( computerMove == 'nożce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }

  else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }

  else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Niestety przegrałeś, komputer wygrywa!');
  }

  else if( computerMove == 'nożce' && playerMove == 'papier'){
    printMessage('Niestety przegrałeś, komputer wygrywa!');
  }
  else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ty Niestety przegrałeś, komputer wygrywa!');
  }
  else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
  }
  else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
  }
  else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
  }