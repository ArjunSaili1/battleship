import { ShipFactory } from '../src/shipFactory.js';
import { Gameboard } from '../src/gameboard'
import { Player, Computer} from '../src/player'

describe("Ship Factory Tests", ()=>{
    test("Makes Ship", () => {
        expect(ShipFactory(3).getShipArray()).toStrictEqual([
            { position: 0, isHit: false},
            { position: 1, isHit: false}, 
            { position: 2, isHit: false}]);
    })
    
    
    test("Marks hit", () => {
        const testShip = ShipFactory(3);
        testShip.hit(1);
        expect(testShip.getShipArray()).toStrictEqual([
            { position: 0, isHit: false},
            { position: 1, isHit: true}, 
            { position: 2, isHit: false}
        ])
    })
    
    test("Checks if Sunk (Sunk)", () => {
        const testShip = ShipFactory(3);
        testShip.hit(0);
        testShip.hit(1);
        testShip.hit(2);
        expect(testShip.isSunk()).toBe(true)
    })
    
    test("Checks if Sunk (Not Sunk)", () => {
        const testShip = ShipFactory(3);
        testShip.hit(0);
        testShip.hit(2);
        expect(testShip.isSunk()).toBe(false)
    })  
})

describe("Gameboard Tests", ()=>{
    test("Check if gameboard stores coordinates (horizontal)", () => {
        const gameboard = Gameboard();
        gameboard.placeShip([0,0], 5, "horizontal");
        expect(gameboard.getShips()[0].coords).toStrictEqual([[0,0],[1,0],[2,0],[3,0],[4,0]])
    })
    
    test("Check if gameboard stores coordinates (vertical)", () => {
        const gameboard = Gameboard();
        gameboard.placeShip([0,0], 5, "vertical");
        expect(gameboard.getShips()[0].coords).toStrictEqual([[0,0],[0,1],[0,2],[0,3],[0,4]])
    })

    test("Check if invalid cooridnates are detected (horizontal)", ()=>{
        const gameboard = Gameboard();
        expect(gameboard.placeShip([9,0], 5, "horizontal")).toBe(false);
        expect(gameboard.placeShip([0,0], 5, "horizontal")).not.toBe(false)
    })

    test("Check if invalid cooridnates are detected (vertical)", ()=>{
        const gameboard = Gameboard();
        expect(gameboard.placeShip([2,9], 5, "vertical")).toBe(false);
        expect(gameboard.placeShip([2,3], 6, "vertical")).not.toBe(false);
    })
    
    test("Check if gameboard stores ship", ()=> {
        const gameboard = Gameboard();
        gameboard.placeShip([0,0], 5);
        expect(gameboard.getShips()[0].ship.getLength()).toStrictEqual(5)
    })
    
    test("Check if attack is received (hit)", ()=>{
        const gameboard = Gameboard();
        gameboard.placeShip([0,0], 5, "vertical");
        gameboard.receiveAttack([0,0]);
        expect(gameboard.getShips()[0].ship.getShipArray()[0].isHit).toBe(true);
        expect(gameboard.getMissedShots()).toStrictEqual([]);
    })
    
    test("Check if attack is received (miss)", ()=>{
        const gameboard = Gameboard();
        gameboard.placeShip([0,0], 5, "horizontal");
        gameboard.receiveAttack([4,7])
        expect(gameboard.getShips()[0].ship.getShipArray()[4].isHit).toBe(false)
        expect(gameboard.getMissedShots()).toStrictEqual([[4,7]])
    })

    test("Check if only single block is hit at once", ()=>{
        const gameboard = Gameboard();
        gameboard.placeShip([0,0], 5, "horizontal");
        gameboard.receiveAttack([0,0])
        expect(gameboard.getShips()[0].ship.getShipArray()[0].isHit).toBe(true);
        expect(gameboard.getShips()[0].ship.getShipArray()[1].isHit).toBe(false);
        expect(gameboard.getShips()[0].ship.getShipArray()[2].isHit).toBe(false);
        expect(gameboard.getShips()[0].ship.getShipArray()[3].isHit).toBe(false);
        expect(gameboard.getShips()[0].ship.getShipArray()[4].isHit).toBe(false);
    })
    
    test("Hit till sunk", ()=>{
        const gameboard = Gameboard();
        gameboard.placeShip([2,5], 5, "horizontal");
        gameboard.receiveAttack([2,5]);
        gameboard.receiveAttack([3,5]);
        gameboard.receiveAttack([4,5]);
        gameboard.receiveAttack([5,5]);
        gameboard.receiveAttack([6,5]);
        expect(gameboard.getShips()[0].ship.isSunk()).toBe(true)
        expect(gameboard.allSunk()).toBe(true)
        expect(gameboard.getMissedShots()).toStrictEqual([]);
    })
})


describe("Player & Computer Tests", ()=>{

    test("Set and Get Enemy Board", ()=>{
        const enemy = Computer();
        const player = Player("Test")
        player.setEnemyBoard(enemy.gameboard);
        expect(player.getEnemyBoard().getShips()).toStrictEqual([])
    })

    test("Gets Name", ()=>{
        const player = Player("Test");
        expect(player.getName()).toBe("Test")
    })

    test("Generates Attack", ()=>{
        const player = Player("test");
        const computer = Computer();
        computer.setEnemyBoard(player.gameboard);
        computer.attack();
        expect(player.gameboard.getMissedShots().length).toBeGreaterThan(0)
    })

    test("Computer does not shoot same spot twice", ()=>{
        const player = Player("Test")
        const computer = Computer();
        computer.setEnemyBoard(player.gameboard)
        for(let i = 0; i < 20; i++){
            computer.attack()
        }
        const setAllShots = new Set(computer.allShots)
        expect(setAllShots.length == computer.allShots.length)
    })

    test("Computer does not place ships on occupied coordinates", ()=>{
        const computer = Computer()
        computer.placeAllShips();
        const allComputerCoords = []

        for(let i = 0; i < computer.gameboard.getShips().length; i++){
            allComputerCoords.push(computer.gameboard.getShips()[i].coords)
        }

        function duplicateHelper(array, index){
            for(let i = 0; i < allComputerCoords.length; i++){
                for(let k = 0; k < allComputerCoords[i].length; k++){
                    if(index[0] !== i && index[1] !== k){
                        if(allComputerCoords[i][k][0] === array[0] && allComputerCoords[i][k][1] === array[1]){
                            return true;
                        }
                    }
                }
            }
        }

        function duplicateCheck(){
            for(let i = 0; i < allComputerCoords.length; i++){
                for(let k = 0; k < allComputerCoords[i].length; k++){
                    let testCoord = allComputerCoords[i][k]
                    if(duplicateHelper(testCoord, [i, k])){
                        return true;
                    }
                }
            }
            return false
        }
        
        expect(duplicateCheck()).toBe(false)
    })

    test("Computer generated ships fit on board", ()=>{
        const computer = Computer()
        computer.placeAllShips();
        console.log(computer.gameboard.getShips())
        const allComputerCoords = []
        for(let i = 0; i < computer.gameboard.getShips().length; i++){
            allComputerCoords.push(computer.gameboard.getShips()[i].coords)
        }
        function checkIfOffBoard(){
            for(let i = 0; i < allComputerCoords.length; i++){
                for(let k = 0; k < allComputerCoords[i].length; k++){
                    for(let j = 0; j < allComputerCoords[i][k].length; j++){
                        if(allComputerCoords[i][k][j] > 9){
                            return true;
                        }
                    }
                }
            }
            return false;
        }

        expect(checkIfOffBoard()).toBe(false)
    })
})

describe("Main Game Loop Test", ()=>{
    
})