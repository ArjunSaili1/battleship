import { Gameboard } from './gameboard'

const Player = ((name)=>{

    let enemyBoard;
    const gameboard = Gameboard();
    
    function getName(){return name}

    function setEnemyBoard(enemy){enemyBoard = enemy}

    function getEnemyBoard(){return enemyBoard}

    function attack(coordinates){
        enemyBoard.receiveAttack(coordinates)
    }

    return {gameboard, getEnemyBoard, getName, attack, setEnemyBoard}
})

const Computer = (()=>{
    const computerPlayer = Player("Computer");
    const allShots = [];

    function alreadyShot(coordinates){
        for(let i=0; i < allShots.length; i++){
            if(allShots[i][0] == coordinates[0] && allShots[i][1] == coordinates[1]){
                return true
            }
        }
    }

    function coordinateExists(newShipCoord){
        const allShips = computerPlayer.gameboard.getShips();
        for(let i = 0; i < allShips.length; i++){
            const allCoords = allShips[i].coords
            for(let k = 0; k < allCoords.length; k++){
                if(allCoords[k][0] === newShipCoord[0] && allCoords[k][1] === newShipCoord[1]){
                    return true
                }
            }
        }
        return false;
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

    function generateRandomOrientation(){
        if(Math.round(Math.random()) == 0){
            return "horizontal"
        }
        return "vertical"

    }

    function placeShip(length){
        let foundShip = false;
        let randomCoord;
        let randomOrient
        while(foundShip == false){
            randomCoord = generateRandomCoordinates();
            randomOrient = generateRandomOrientation();
            if(computerPlayer.gameboard.isValidPlacement(randomCoord, length, randomOrient) === true &&
            shipExists(randomCoord, length, randomOrient) === false){
                foundShip = true;
            }
        }
        computerPlayer.gameboard.placeShip(randomCoord, length, randomOrient)
    }

    function placeAllShips(){
        const carrier = placeShip(5)
        const battleship = placeShip(4)
        const submarine = placeShip(3)
        const cruiser = placeShip(3)
        const destroyer = placeShip(2)
    }

    function generateRandomCoordinates(){
        let coordinates;
        coordinates = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
        return coordinates;
    }

    function attack(){
        let coordinates;
        do{
            coordinates = generateRandomCoordinates()
        } while(alreadyShot(coordinates))
        allShots.push(coordinates)
        computerPlayer.attack(coordinates)
    }

    return Object.assign({}, computerPlayer, {attack, placeAllShips, allShots})
})

export {Player, Computer}