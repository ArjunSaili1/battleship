import { displayControl } from './displayControl.js';
import { game } from './index.js';


const placeShipDisplay = (()=>{

    let selectedShipBtn;
    let orientationSelected = "horizontal";
    let grids;
    let shipBtns;
    let mainGrid;
    const displayWrap = document.querySelector(".display-wrap");
    let highlightElements = [];


    function renderPlaceShip(playerGameboard){
        generateAxisSwitchBtn()
        displayControl.generateGrids();
        grids = document.querySelectorAll(".grid-container");
        grids[1].style.display = 'none';
        mainGrid = grids[0];
        generateShipPlaceButtons();
        for(let i = 0; i < mainGrid.children.length; i++){
            mainGrid.children[i].addEventListener("mouseleave", (e)=>{removeShipOutline(playerGameboard, e)})
            mainGrid.children[i].addEventListener("mouseover", (e)=>{displayShipOutline(playerGameboard, e)})
        }
    }

    function removeShipOutline(e){
        for(let i = 0; i < highlightElements.length; i++){
            if(highlightElements[i].style.backgroundColor == "green" || highlightElements[i].style.backgroundColor == "red"){
                highlightElements[i].style.backgroundColor = "unset";
            }
        }
    }

    function placeShipDOM(playerGameboard, e){
        const parsedCoords = [parseInt(e.target.dataset.xCoordinate), parseInt(e.target.dataset.yCoordinate)];
        if(!(playerGameboard.shipExists(parsedCoords, selectedShipBtn.dataset.size, orientationSelected))){
            playerGameboard.placeShip(parsedCoords, selectedShipBtn.dataset.size, orientationSelected);
            displayControl.renderGameboard(playerGameboard, mainGrid, false);
            switchShip(playerGameboard)
        }
    }

    function switchShip(playerGameboard){
        if(playerGameboard.getShips().length > 4){
            game.switchPage();
        }
        else{
            selectedShipBtn.remove();
            if(shipBtns.indexOf(selectedShipBtn) == shipBtns.length - 1){
                selectedShipBtn = shipBtns[0]
            }
            else{
                selectedShipBtn = shipBtns[shipBtns.indexOf(selectedShipBtn) + 1];
            }
        }
    }

    function displayShipOutline(playerGameboard, e){
        const size = parseInt(selectedShipBtn.dataset.size);
        let validPlacement = false;
        const placementCoords = [parseInt(e.target.dataset.xCoordinate), parseInt(e.target.dataset.yCoordinate)]
        const highlightCoords = (playerGameboard.getCoordinates(placementCoords, size, orientationSelected));
        for(let i = 0; i < mainGrid.children.length; i++){
            for(let k = 0; k < highlightCoords.length; k++){
                if(mainGrid.children[i].dataset.xCoordinate == highlightCoords[k][0]
                    && mainGrid.children[i].dataset.yCoordinate == highlightCoords[k][1] &&
                    mainGrid.children[i].style.backgroundColor !== "blue"){
                        if(playerGameboard.isValidPlacement(placementCoords, size, orientationSelected) && 
                        !(playerGameboard.shipExists(placementCoords, size, orientationSelected))){
                            validPlacement = true;
                            mainGrid.children[i].style.backgroundColor = "green";
                        }
                        else{
                            validPlacement = false;
                            mainGrid.children[i].style.backgroundColor = "red";
                        }
                        highlightElements.push(mainGrid.children[i]);
                    }
            }
        }
        if(validPlacement){
            e.target.addEventListener("click", (e)=>{placeShipDOM(playerGameboard, e)});
        }
    }

    function generateAxisSwitchBtn(){
        const changeAxisCtn = document.createElement("div");
        changeAxisCtn.classList.add("change-axis-container");
        const changeAxisBtn = document.createElement("button");
        changeAxisBtn.classList.add('change-axis-button');
        changeAxisBtn.textContent = "Horizontal";
        changeAxisBtn.addEventListener("click", (e)=>{
            if(orientationSelected == "horizontal"){
                orientationSelected = "vertical"
                e.target.textContent = "Vertical";
            }
            else{
                orientationSelected = "horizontal"
                e.target.textContent = "Horizontal";
            }
        })
        changeAxisCtn.appendChild(changeAxisBtn);
        displayWrap.appendChild(changeAxisCtn);
    }

    function generateShipPlaceButtons(){
        const placeShipCtn = document.createElement("div");
        placeShipCtn.classList.add("place-ship-container");
        const shipButtonCtn = document.createElement("div");
        shipButtonCtn.classList.add("ship-buttons");
        placeShipCtn.appendChild(shipButtonCtn);
        const carrierBtn = document.createElement("button");
        carrierBtn.textContent = "Carrier";
        carrierBtn.dataset.size = "5";
        const battleshipBtn = document.createElement("button");
        battleshipBtn.textContent = "Battleship";
        battleshipBtn.dataset.size = "4";
        const subBtn = document.createElement("button");
        subBtn.textContent = "Submarine";
        subBtn.dataset.size = "3";
        const destroyerBtn = document.createElement("button");
        destroyerBtn.textContent = "Destroyer";
        destroyerBtn.dataset.size = "3";
        const cruiserBtn = document.createElement("button");
        cruiserBtn.textContent = "Crusier";
        cruiserBtn.dataset.size = "2";
        shipBtns = [carrierBtn, battleshipBtn, subBtn, destroyerBtn, cruiserBtn];
        shipBtns.forEach(shipBtn => {
            shipBtn.type = 'radio';
            shipButtonCtn.appendChild(shipBtn)
            shipBtn.addEventListener("click", (e)=>{selectShip(e)
            });
        });
        carrierBtn.click();
        displayWrap.appendChild(placeShipCtn);
    }

    function selectShip(e){
        selectedShipBtn = e.target;
    }

    return{renderPlaceShip}
})()

export {placeShipDisplay}