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

if ((computerMove == 'kamień' && playerMove == 'papier') ||
    (computerMove == 'nożce' && playerMove == 'kamień') ||
    (computerMove == 'papier' && playerMove == 'nożyce')) {
  printMessage('Ty wygrywasz!');
} else if {
  printMessage('Niestety przegrałeś, komputer wygrywa!');
}

else if( computerMove == playerMove ){
    printMessage('Remis!');
}
  