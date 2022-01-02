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
    let currentPlayer;

    function gameSetup(){
        computerPlayer.placeAllShips();
        placeShipDisplay.renderPlaceShip(player.gameboard);
        currentPage = placeShipDisplay;
        currentPlayer = player;
        //displayControl.render(player.gameboard, computerPlayer.gameboard);
    }

    function computerTurn(){}

    function playerRegisterHit(attackCoords){
        console.log(currentPlayer)
        if(currentPlayer == player){
            computerPlayer.gameboard.receiveAttack(attackCoords);
        }
        switchPlayer();
    }

    function switchPlayer(){
        if(currentPlayer == player){
            currentPlayer = computerPlayer;
            displayControl.unbindAttackEvents();
        }
    }

    function clearPage(){
        displayWrap.innerHTML = '';
    }

    function switchPage(){
        if(currentPage == placeShipDisplay){
            clearPage();
            displayControl.render(player.gameboard, computerPlayer.gameboard);
            currentPage = displayControl;
            displayControl.bindAttackEvents();
        }
    }

    return {gameSetup, switchPage, playerRegisterHit}
})()

game.gameSetup();

export {game}