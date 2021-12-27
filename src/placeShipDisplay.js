import { displayControl } from './displayControl.js';


const placeShipDisplay = (()=>{

    let selectedShipBtn;
    let grids;
    const displayWrap = document.querySelector(".display-wrap");


    function renderPlaceShip(){
        generateAxisSwitchBtn()
        displayControl.generateGrids();
        grids = document.querySelectorAll(".grid-container");
        console.log(grids);
        grids[1].style.display = 'none';
        generateShipPlaceButtons();
        for(let i = 0; i < grids[0].children.length; i++){
            grids[0].children[i].addEventListener("mouseover", (e)=>{displayShipOutline(e)})
        }
    }

    function displayShipOutline(e){
        console.log(selectedShipBtn.dataset.size);
    }

    function generateAxisSwitchBtn(){
        const changeAxisCtn = document.createElement("div");
        changeAxisCtn.classList.add("change-axis-container");
        const changeAxisBtn = document.createElement("button");
        changeAxisBtn.classList.add('change-axis-button');
        changeAxisBtn.textContent = "Horizontal";
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
        let shipBtns = [carrierBtn, battleshipBtn, subBtn, destroyerBtn, cruiserBtn];
        shipBtns.forEach(shipBtn => {
            shipBtn.type = 'radio';
            shipButtonCtn.appendChild(shipBtn)
            shipBtn.addEventListener("click", (e)=>{selectShip(e)
            console.log(selectedShipBtn);
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