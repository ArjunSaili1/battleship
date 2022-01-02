import { arrayExpression } from "@babel/types";
import { game } from ".";

const displayControl = (()=>{

    const displayWrap = document.querySelector(".display-wrap");
    let grids = [];
    let players = [];

    function render(playerGameboard, computerGameboard){
        players = [playerGameboard, computerGameboard];
        generateGrids();
        renderGameboard(playerGameboard.getShips(), grids[0], false);
        renderGameboard(playerGameboard.getShips(), grids[0], false);

    }

    function renderGameboard(gameboardShips, gameboardGrid, isComputer){
        for(let i=0; i < gameboardShips.length; i++){
            for(let k = 0; k < gameboardShips[i].ship.getShipArray().length; k++){
                let coordColour;
                if(gameboardShips[i].ship.isSunk()){
                    coordColour = 'rgb(44,44,44)';
                }
                if(gameboardShips[i].ship.getShipArray()[k].isHit && !(gameboardShips[i].ship.isSunk())){
                    coordColour = 'red';
                }
                else if(!isComputer){
                    coordColour = 'blue';
                }
                for(let m = 0; m < gameboardGrid.children.length; m++){
                    if(gameboardGrid.children[m].dataset.xCoordinate == gameboardShips[i].coords[k][0] &&
                        gameboardGrid.children[m].dataset.yCoordinate == gameboardShips[i].coords[k][1]){
                            gameboardGrid.children[m].style.backgroundColor = coordColour;
                        };
                }
            }
        }
    }

    function generateGrids(){
        const gameboardFlex = document.createElement('div');
        gameboardFlex.classList.add("gameboard-flex");
        displayWrap.appendChild(gameboardFlex)
        const playerGridContainer = document.createElement("div");
        playerGridContainer.classList.add("grid-container");
        playerGridContainer.id = "player-grid";
        const computerGridContainer = document.createElement("div");
        computerGridContainer.classList.add("grid-container");
        computerGridContainer.id = "computer-grid";
        gameboardFlex.appendChild(playerGridContainer);
        gameboardFlex.appendChild(computerGridContainer);
        grids = [playerGridContainer, computerGridContainer];
        for(let i = 0; i < grids.length; i++){
            let xCoord = 0;
            let yCoord = 0;
            for(let j = 0; j < 100; j++){
                const newCoord = document.createElement("div");
                newCoord.classList.add("coordinate");
                if(xCoord  % 10 == 0 && xCoord !== 0){
                    xCoord = 0;
                    yCoord++;
                }
                newCoord.dataset.xCoordinate = xCoord;
                newCoord.dataset.yCoordinate = yCoord;
                xCoord++
                grids[i].appendChild(newCoord);
            }
        }
    }

    function bindAttackEvents(){
        for(let i = 0; i < grids[1].children.length; i++){
            grids[1].children[i].addEventListener("mouseover", (e)=>{if(!e.target.style.backgroundColor ||
                e.target.style.backgroundColor == "unset"){
                e.target.style.backgroundColor = "rgb(227, 227, 227)";
            }});
            grids[1].children[i].addEventListener("mouseleave", (e)=>{if(e.target.style.backgroundColor == "rgb(227, 227, 227)"){
                e.target.style.backgroundColor = "unset";
            }});
            grids[1].children[i].addEventListener("click", (e)=>{displayAttack(e)})
        }
    }
 
    function displayAttack(e){
        console.log("click")
        e.target.removeEventListener("click", (e)=>{displayAttack(e)});
        const attackCoords = [parseInt(e.target.dataset.xCoordinate), parseInt(e.target.dataset.yCoordinate)];
        game.playerRegisterHit(attackCoords);
        if(!game.playerRegisterHit(attackCoords)){
            e.target.style.backgroundColor = "rgb(211,211,211)";
        }
        else{
            renderGameboard(players[1].getShips(), grids[1], true);
        }
    }

    return {render, renderGameboard, generateGrids, bindAttackEvents}
})()

export {displayControl}