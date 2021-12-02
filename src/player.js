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

    function generateRandomMove(){
        let coordinates;
        let allShots = [];
        do{
            coordinates = [Math.floor(Math.random() * 11), Math.floor(Math.random() * 11)]
        } while(alreadyShot(coordinates))
        allShots.push(coordinates)
        return coordinates;
    }

    function attack(){
        const coordinates = generateRandomMove()
        computerPlayer.attack(coordinates)
    }

    return Object.assign({}, computerPlayer, {generateRandomMove, attack, allShots})
})

export {Player, Computer}