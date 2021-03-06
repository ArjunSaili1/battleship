import {Gameboard} from './gameboard';

const Player = ((name) => {

  let enemyBoard;
  const gameboard = Gameboard();

  function getName() { return name; }

  function setEnemyBoard(enemy) { enemyBoard = enemy; }

  function getEnemyBoard() { return enemyBoard; }

  function attack(coordinates) {
    enemyBoard.receiveAttack(coordinates);
  }

  return {gameboard, getEnemyBoard, getName, attack, setEnemyBoard};
});

const Computer = (() => {
  const computerPlayer = Player("Computer");
  const allShots = [];

  function alreadyShot(coordinates) {
    for (let i = 0; i < allShots.length; i++) {
      if (allShots[i][0] === coordinates[0] && allShots[i][1] === coordinates[1]) {
        return true;
      }
    }
    return false;
  }

  function generateRandomOrientation() {
    if (Math.round(Math.random()) === 0) {
      return "horizontal";
    }
    return "vertical";

  }

  function placeShip(length) {
    let foundShip = false;
    let randomCoord;
    let randomOrient;
    while (foundShip === false) {
      randomCoord = generateRandomCoordinates();
      randomOrient = generateRandomOrientation();
      if (computerPlayer.gameboard.isValidPlacement(randomCoord, length, randomOrient) === true &&
            computerPlayer.gameboard.shipExists(randomCoord, length, randomOrient) === false) {
        foundShip = true;
      }
    }
    computerPlayer.gameboard.placeShip(randomCoord, length, randomOrient);
  }

  function placeAllShips() {
    placeShip(5);
    placeShip(4);
    placeShip(3);
    placeShip(3);
    placeShip(2);
  }

  function generateRandomCoordinates() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  function attack() {
    let coordinates;
    do {
      coordinates = generateRandomCoordinates();
    } while (alreadyShot(coordinates));
    allShots.push(coordinates);
    computerPlayer.attack(coordinates);
  }

  return {...computerPlayer, attack, placeAllShips, allShots};
});

export {Player, Computer};
