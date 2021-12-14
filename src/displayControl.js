const displayControl = (()=>{
    
    function render(playerGameboard, computerGameboard){
        generateGrids();
    }

    function generateGrids(){
        let xCoord = 0;
        let yCoord = 0;
        const grids = document.querySelectorAll(".grid-container");
        for(let i = 0; i < grids.length; i++){
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

    function clearDisplay(){}

    return {render}
})()

export {displayControl}