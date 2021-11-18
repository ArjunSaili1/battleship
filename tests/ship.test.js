import { ShipFactory } from '../src/index.js';

const testShip = ShipFactory(3);

test("Places Ship", () => {
    testShip.placeShip([1,2], "horizontal");
    console.log(testShip.getLength())
    console.log(testShip.getShipArray())
    expect(testShip.getShipArray()).toStrictEqual([
        { coord: [1, 2], isHit: false},
        { coord: [2, 2], isHit: false}, 
        { coord: [3, 2], isHit: false}]);
})
