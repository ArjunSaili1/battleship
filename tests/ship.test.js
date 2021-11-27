import { ShipFactory } from '../src/index.js';
import { Gameboard } from '../src/gameboard'

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

test("Check if gameboard stores ship", ()=> {
    const gameboard = Gameboard();
    gameboard.placeShip([0,0], 10);
    expect(gameboard.getShips()[0].ship.getLength()).toStrictEqual(10)
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


