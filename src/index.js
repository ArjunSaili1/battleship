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
        player.gameboard.receiveAttack([0,0]);
        placeShipDisplay.renderPlaceShip(player.gameboard);
        currentPage = placeShipDisplay;
        //displayControl.render(player.gameboard, computerPlayer.gameboard);
    }

    function clearPage(){
        displayWrap.innerHTML = '';
    }

    function switchPage(){
        if(currentPage == placeShipDisplay){
            clearPage();
            displayControl.render(player.gameboard, computerPlayer.gameboard);
            currentPage = displayControl;
        }
    }

    return {gameSetup, switchPage}
})()

game.gameSetup();

export {game}