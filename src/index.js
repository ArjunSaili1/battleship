import { ShipFactory } from './shipFactory.js';
import { Gameboard } from './gameboard'
import { Player, Computer} from './player'
import { displayControl } from './displayControl.js';

const game = (()=>{

    function gameSetup(){
        const computerPlayer = Computer();
        computerPlayer.placeAllShips();
        const player = Player("Test Name");
        player.gameboard.placeShip([0, 0], 5, "horizontal");
        player.gameboard.placeShip([0, 2], 4, "horizontal");
        player.gameboard.placeShip([0, 4], 3, "horizontal");
        player.gameboard.placeShip([0, 6], 3, "horizontal");
        player.gameboard.placeShip([0, 8], 2, "horizontal");
        player.gameboard.receiveAttack([0,0]);
        displayControl.render(player.gameboard, computerPlayer.gameboard);
    }

    return {gameSetup}
})()

game.gameSetup();

export {game}