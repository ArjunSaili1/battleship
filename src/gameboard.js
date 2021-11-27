import { ShipFactory } from './index.js';

const Gameboard = (()=> {
    const ships = [];
    const missedShots = [];

    function getShips(){
        return ships;
    }

    function placeShip(placementCoordinates, length, orientation){
        const newShip = ShipFactory(length);
        const shipCoordinates = [];
        for(let i = 0; i < length; i++){
            if(orientation == "horizontal"){
                shipCoordinates.push([placementCoordinates[0]+ i, placementCoordinates[1]])
            }
            else{
                shipCoordinates.push([placementCoordinates[0], placementCoordinates[1] + i]);
            }
        }
        ships.push({ship: newShip, coords: shipCoordinates});
    }

    function getMissedShots(){return missedShots}

    function receiveAttack(targetCoords){
        let hit = false;
        ships.forEach(shipElement => {
            for(let i = 0; i < shipElement.coords.length; i++){
                if(shipElement.coords[i].every((val, index) => val === targetCoords[index])){
                    shipElement.ship.hit(i);
                    hit = true;
                }
            }
        })
        if(!hit){
            missedShots.push(targetCoords);
        }
    }

    function allSunk(){
        ships.forEach(shipElement => {
            if(!shipElement.ship.isSunk()){
                return false;
            }
        })
        return true;
    }

    return {placeShip, receiveAttack, getShips, allSunk, getMissedShots}
})

export {Gameboard}