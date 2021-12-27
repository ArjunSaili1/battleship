import { ShipFactory } from './shipFactory.js';
import { Gameboard } from './gameboard'
import { Player, Computer} from './player'
import { displayControl } from './displayControl.js';
import { placeShipDisplay } from './placeShipDisplay.js';

const game = (()=>{

    function gameSetup(){
        const computerPlayer = Computer();
        computerPlayer.placeAllShips();
        const player = Player("Test Name");
        player.gameboard.receiveAttack([0,0]);
        placeShipDisplay.renderPlaceShip(player.gameboard);
        //displayControl.render(player.gameboard, computerPlayer.gameboard);
    }

    return {gameSetup}
})()

game.gameSetup();

export {game}