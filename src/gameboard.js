import { ShipFactory } from './shipFactory.js';

const Gameboard = (()=> {
    const ships = [];
    const missedShots = [];

    function getShips(){
        return ships;
    }

    function isValidPlacement(placementCoordinates, length, orientation){
        if(orientation == "horizontal"){
            if((placementCoordinates[0] + length) < 10){
                return true
            }
            return false
        }
        else{
            if((placementCoordinates[1] + length) < 10){
                return true
            }
            return false;
        } 
    }

    function placeShip(placementCoordinates, length, orientation){
        const newShip = ShipFactory(length);
        const shipCoordinates = [];
        if(isValidPlacement(placementCoordinates, length, orientation)){
            for(let i = 0; i < length; i++){
                if(orientation == "horizontal"){
                    shipCoordinates.push([placementCoordinates[0]+ i, placementCoordinates[1]])
                }
                else{
                    shipCoordinates.push([placementCoordinates[0], placementCoordinates[1] + i]);
                }
            }
            ships.push({ship: newShip, coords: shipCoordinates});
        }else{
            return false
        }
    }

    function getMissedShots(){return missedShots}

    function receiveAttack(targetCoords){
        let hit;
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

    return {placeShip, receiveAttack, getShips, allSunk, getMissedShots, isValidPlacement}
})

export {Gameboard}