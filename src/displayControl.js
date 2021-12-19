const displayControl = (()=>{

    let grids = [];

    function render(playerGameboard, computerGameboard){
        generateGrids();
        renderShips(computerGameboard.getShips(), grids[1]);
        renderShips(playerGameboard.getShips(), grids[0]);

    }

    function renderShips(gameboardShips, gameboardGrid){
        let coordColour;
        for(let i=0; i < gameboardShips.length; i++){
            if(gameboardShips[i].ship.isSunk()){
                coordColour = 'black';
            }
            for(let k = 0; k < gameboardShips[i].ship.getShipArray().length; k++){
                if(gameboardShips[i].ship.getShipArray()[k].isHit && !(gameboardShips[i].ship.isSunk())){
                    coordColour = 'red';
                }
                else if(!gameboardShips[i].ship.isSunk()){
                    coordColour = 'blue';
                };
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
        const displayWrap = document.querySelector(".display-wrap");
        const gameboardFlex = document.createElement('div');
        gameboardFlex.classList.add("gameboard-flex");
        displayWrap.appendChild(gameboardFlex)
        const playerGridContainer = document.createElement("div");
        playerGridContainer.classList.add("grid-container");
        playerGridContainer.id = "player-grid";
        grids.push(playerGridContainer);
        const computerGridContainer = document.createElement("div");
        computerGridContainer.classList.add("grid-container");
        computerGridContainer.id = "computer-grid";
        grids.push(computerGridContainer);
        gameboardFlex.appendChild(playerGridContainer);
        gameboardFlex.appendChild(computerGridContainer);
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

    function renderPlaceShip(){
    }

    function clearDisplay(){}

    return {render}
})()

export {displayControl}