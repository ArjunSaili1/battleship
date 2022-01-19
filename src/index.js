import {Player, Computer} from './player';
import {displayControl} from './displayControl/attackPage';
import {placeShipDisplay} from './displayControl/placeShipDisplay';
import { popUps } from './displayControl/popUps';

const game = (() => {

  const displayWrap = document.querySelector(".display-wrap");
  let currentPage = null;
  const computerPlayer = Computer();
  const player = Player("Test Name");
  let currentPlayer;

  function gameSetup() {
    computerPlayer.setEnemyBoard(player.gameboard);
    player.setEnemyBoard(computerPlayer.gameboard);
    computerPlayer.placeAllShips();
    placeShipDisplay.renderPlaceShip(player.gameboard);
    popUps.createStartPopUp();
    currentPage = placeShipDisplay;
    currentPlayer = player;
  }

  function computerTurn() {
    displayControl.unbindAttackEvents();
    currentPlayer.attack();
    clearPage();
    displayControl.render(player.gameboard, computerPlayer.gameboard);
    switchPlayer();
  }

  function registerHit(attackCoords) {
    if (computerPlayer.gameboard.allSunk()) {
      clearPage();
    } else {
      if (attackCoords) {
        currentPlayer.attack(attackCoords);
      } else {
        currentPlayer.attack();
      }
      switchPlayer();
    }
  }

  function switchPlayer() {
    if (computerPlayer.gameboard.allSunk() || player.gameboard.allSunk()) {
      clearPage();
    }
    if (currentPlayer === player) {
      currentPlayer = computerPlayer;
      computerTurn();
    } else {
      currentPlayer = player;
      displayControl.bindAttackEvents();
    }
  }

  function clearPage() {
    displayWrap.innerHTML = '';
  }

  function switchPage() {
    if (!currentPage === placeShipDisplay) { return; }
    clearPage();
    displayControl.render(player.gameboard, computerPlayer.gameboard);
    currentPage = displayControl;
    displayControl.bindAttackEvents();
  }

  return {gameSetup, switchPage, registerHit};
})();

game.gameSetup();

export {game};
