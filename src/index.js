import { ShipFactory } from './shipFactory.js';
import { Gameboard } from './gameboard'
import { Player, Computer} from './player'
import { displayControl } from './displayControl.js';
import { placeShipDisplay } from './placeShipDisplay.js';

const game = (()=>{

    const displayWrap = document.querySelector(".display-wrap");
    let currentPage = null;
    const computerPlayer = Computer();
    const player = Player("Test Name");

    function gameSetup(){
        computerPlayer.placeAllShips();
        placeShipDisplay.renderPlaceShip(player.gameboard);
        currentPage = placeShipDisplay;
        //displayControl.render(player.gameboard, computerPlayer.gameboard);
    }

    function playerTurn(){
        displayControl.bindAttackEvents();
    }

    function computerTurn(){}

    function playerRegisterHit(attackCoords){
        computerPlayer.gameboard.receiveAttack(attackCoords);
        if(computerPlayer.gameboard.isShotMissed(attackCoords)){
            return false;
        }
        return true;
    }

    function switchPlayer(){

    }

    function clearPage(){
        displayWrap.innerHTML = '';
    }

    function switchPage(){
        if(currentPage == placeShipDisplay){
            clearPage();
            displayControl.render(player.gameboard, computerPlayer.gameboard);
            currentPage = displayControl;
            playerTurn();
        }
    }

    return {gameSetup, switchPage, playerRegisterHit}
})()

game.gameSetup();

export {game}