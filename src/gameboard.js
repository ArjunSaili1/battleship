import { ShipFactory } from './shipFactory.js';

const Gameboard = (()=> {
    const ships = [];
    const missedShots = [];

    function getShips(){
        return ships;
    }

    function isValidPlacement(placementCoordinates, length, orientation){
        const parsedCoords = [parseInt(placementCoordinates[0]), parseInt(placementCoordinates[1])]
        const parsedLength = parseInt(length - 1);
        if(orientation == "horizontal"){
            if((parsedCoords[0] + parsedLength) < 10){
                return true
            }
            return false
        }
        else{
            if((parsedCoords[1] + parsedLength) < 10){
                return true
            }
            return false;
        } 
    }

    function placeShip(placementCoordinates, length, orientation){
        const newShip = ShipFactory(length);
        if(isValidPlacement(placementCoordinates, length, orientation)){
            const newShipCoords = getCoordinates(placementCoordinates, length, orientation);
            ships.push({ship: newShip, coords: newShipCoords});
        }else{
            return false
        }
    }

    function getCoordinates(placementCoordinates, length, orientation){
        const shipCoordinates = [];
        const parsedCoords = [parseInt(placementCoordinates[0]), parseInt(placementCoordinates[1])]
        for(let i = 0; i < length; i++){
            if(orientation == "horizontal"){
                shipCoordinates.push([parsedCoords[0]+ i, parsedCoords[1]])
            }
            else{
                shipCoordinates.push([parsedCoords[0], parsedCoords[1] + i]);
            }
        }
        return shipCoordinates;
    }

    function isShotMissed(attackCoords){
        for(let i = 0; i < missedShots.length; i++){
            if(missedShots[i][0] == attackCoords[0] && missedShots[i][1] == attackCoords[1]){
                return true;
            }
        }
        return false;
    }

    function receiveAttack(targetCoords){
        console.log(targetCoords);
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

    function getSunkShips(){
        const sunkShips = [];
        ships.forEach(shipElement => {
            if(shipElement.ship.isSunk()){
                sunkShips.push(shipElement);
            }
        })
        return sunkShips;
    }

    function allSunk(){
        ships.forEach(shipElement => {
            if(!shipElement.ship.isSunk()){
                return false;
            }
        })
        return true;
    }

    function coordinateExists(newShipCoord){
        for(let i = 0; i < ships.length; i++){
            const allCoords = ships[i].coords
            for(let k = 0; k < allCoords.length; k++){
                if(allCoords[k][0] === newShipCoord[0] && allCoords[k][1] === newShipCoord[1]){
                    return true
                }
            }
        }
        return false;
    }

    function getMissedShots(){
        return missedShots;
    }

    function shipExists(placementCoordinates, length, orientation){
        for(let i = 0; i < length; i++){
            if(orientation == "horizontal"){
                if(coordinateExists([placementCoordinates[0]+ i, placementCoordinates[1]])){
                    return true
                }
            }
            if(orientation == "vertical"){
                if(coordinateExists([placementCoordinates[0], placementCoordinates[1] + i])){
                    return true
                }
            }
        }
        return false;
    }

    return {placeShip, getMissedShots, receiveAttack, getShips, allSunk, isShotMissed, isValidPlacement, getSunkShips, getCoordinates, shipExists}
})

export {Gameboard}