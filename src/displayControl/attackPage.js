import {game} from "..";

const displayControl = (() => {

  const displayWrap = document.querySelector(".display-wrap");
  let grids = [];
  let players = [];
  const allShotsOnBoard = [];

  function render(playerGameboard, computerGameboard) {
    players = [playerGameboard, computerGameboard];
    generateGrids();
    renderGameboard(playerGameboard, grids[0], false);

  }

  function renderGameboard(gameboard, gameboardGrid, isComputer) {
    const gameboardShips = gameboard.getShips();
    for (let i = 0; i < gameboardShips.length; i++) {
      for (let shipNode = 0; shipNode < gameboardShips[i].ship.getShipArray().length; shipNode++) {
        let coordColour;
        if (gameboardShips[i].ship.isSunk()) {
          coordColour = 'rgb(44,44,44)';
        }
        if (gameboardShips[i].ship.getShipArray()[shipNode].isHit && !(gameboardShips[i].ship.isSunk())) {
          coordColour = 'red';
        } else if (!isComputer && !(gameboardShips[i].ship.isSunk())) {
          coordColour = 'blue';
        }
        for (let coordSquare = 0; coordSquare < gameboardGrid.children.length; coordSquare++) {
          const coords = [parseInt(gameboardGrid.children[coordSquare].dataset.xCoordinate, 10),
            parseInt(gameboardGrid.children[coordSquare].dataset.yCoordinate, 10)];
          if (gameboardGrid.children[coordSquare].dataset.xCoordinate === gameboardShips[i].coords[shipNode][0].toString() &&
                        gameboardGrid.children[coordSquare].dataset.yCoordinate === gameboardShips[i].coords[shipNode][1].toString()) {
            gameboardGrid.children[coordSquare].style.backgroundColor = coordColour;
          } else if (gameboard.isShotMissed(coords)) {
            gameboardGrid.children[coordSquare].style.backgroundColor = "rgb(211,211,211)";
          }
        }
      }
    }
  }

  function generateGrids() {
    const gameboardFlex = document.createElement('div');
    gameboardFlex.classList.add("gameboard-flex");
    displayWrap.appendChild(gameboardFlex);
    const playerGridContainer = document.createElement("div");
    playerGridContainer.classList.add("grid-container");
    playerGridContainer.id = "player-grid";
    const computerGridContainer = document.createElement("div");
    computerGridContainer.classList.add("grid-container");
    computerGridContainer.id = "computer-grid";
    gameboardFlex.appendChild(playerGridContainer);
    gameboardFlex.appendChild(computerGridContainer);
    grids = [playerGridContainer, computerGridContainer];
    for (let i = 0; i < grids.length; i++) {
      let xCoord = 0;
      let yCoord = 0;
      for (let j = 0; j < 100; j++) {
        const newCoord = document.createElement("div");
        newCoord.classList.add("coordinate");
        if (xCoord % 10 === 0 && xCoord !== 0) {
          xCoord = 0;
          yCoord++;
        }
        newCoord.dataset.xCoordinate = xCoord;
        newCoord.dataset.yCoordinate = yCoord;
        xCoord++;
        grids[i].appendChild(newCoord);
      }
    }
  }

  function bindAttackEvents() {
    for (let i = 0; i < grids[1].children.length; i++) {
      grids[1].children[i].addEventListener("mouseover", setHighlightColor);
      grids[1].children[i].addEventListener("mouseleave", removeHighlightColor);
      grids[1].children[i].addEventListener("click", displayAttack);
      for (let j = 0; j < allShotsOnBoard.length; j++) {
        const coords = [grids[1].children[i].dataset.xCoordinate, grids[1].children[i].dataset.yCoordinate];
        if (allShotsOnBoard[j][0] === coords[0] && allShotsOnBoard[j][1] === coords[1]) {
          grids[1].children[i].removeEventListener("mouseover", setHighlightColor);
          grids[1].children[i].removeEventListener("mouseleave", removeHighlightColor);
          grids[1].children[i].removeEventListener("click", displayAttack);
        }
      }
    }
  }

  function setHighlightColor(event) {
    if (!event.target.style.backgroundColor ||
            event.target.style.backgroundColor === "unset") {
      event.target.style.backgroundColor = "rgb(227, 227, 227)";
    }
  }

  function removeHighlightColor(event) {
    if (event.target.style.backgroundColor === "rgb(227, 227, 227)") {
      event.target.style.backgroundColor = "unset";
    }
  }

  function unbindAttackEvents() {
    for (let i = 0; i < grids[1].children.length; i++) {
      grids[1].children[i].removeEventListener("mouseover", setHighlightColor);
      grids[1].children[i].removeEventListener("mouseleave", removeHighlightColor);
      grids[1].children[i].removeEventListener("click", displayAttack);
    }
  }

  function displayAttack(event) {
    allShotsOnBoard.push([event.target.dataset.xCoordinate, event.target.dataset.yCoordinate]);
    const attackCoords = [parseInt(event.target.dataset.xCoordinate, 10), parseInt(event.target.dataset.yCoordinate, 10)];
    game.registerHit(attackCoords);
    renderGameboard(players[1], grids[1], true);
  }

  return {render, renderGameboard, generateGrids, bindAttackEvents, unbindAttackEvents};
})();

export {displayControl};
