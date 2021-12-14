import { ShipFactory } from './shipFactory.js';
import { Gameboard } from './gameboard'
import { Player, Computer} from './player'

const game = (()=>{

    function gameSetup(){
        const computerPlayer = Computer();
        computerPlayer.placeAllShips();
        const player = Player("Test Name");
        player.gameboard.placeShip([0, 0], 5, "horizontal");
        player.gameboard.placeShip([1, 0], 5, "horizontal");
        player.gameboard.placeShip([2, 0], 5, "horizontal");
        player.gameboard.placeShip([3, 0], 5, "horizontal");
        player.gameboard.placeShip([4, 0], 5, "horizontal");
    }

    return {gameSetup}
})()

// game.gameSetup();
