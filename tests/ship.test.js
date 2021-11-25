import { ShipFactory } from '../src/index.js';

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