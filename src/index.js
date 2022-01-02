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
        computerPlayer.setEnemyBoard(player.gameboard);
        player.setEnemyBoard(computerPlayer.gameboard);
        computerPlayer.placeAllShips();
        placeShipDisplay.renderPlaceShip(player.gameboard);
        currentPage = placeShipDisplay;
        currentPlayer = player;
        //displayControl.render(player.gameboard, computerPlayer.gameboard);
    }

    function computerTurn(){
        displayControl.unbindAttackEvents();
        currentPlayer.attack();
        clearPage();
        displayControl.render(player.gameboard, computerPlayer.gameboard);
        switchPlayer();
    }

    function playerRegisterHit(attackCoords){
        console.log(currentPlayer)
        if(attackCoords){
            currentPlayer.attack(attackCoords);
        }
        else{
            currentPlayer.attack();
        }
        switchPlayer();
    }

    function switchPlayer(){
        if(currentPlayer == player){
            currentPlayer = computerPlayer;
            computerTurn();
        }
        else{
            currentPlayer = player;
            displayControl.bindAttackEvents();
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