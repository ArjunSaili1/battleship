
const mainElements = (() => {

  let currentPopUp;
  let infoText;
  const displayWrap = document.querySelector(".display-wrap")

  function changeInfoText(textContent) {
    infoText.textContent = textContent;
  }

  function createLegend(){
      const legendContainer = document.createElement('div');
      legendContainer.classList.add("legend-container");
      const legend = document.createElement("div");
      legend.classList.add("legend");
      for(let i = 0; i < 6; i++){
        const legendSquare = document.createElement('div');
        legendSquare.classList.add("legend-square");
        if(i == 0){
            legendSquare.id = "legend-sunk-square";
        }
        if(i == 1){
            legendSquare.textContent = "Sunk";
        }
        if(i == 2){
            legendSquare.id = "legend-hit-square";
        }
        if(i == 3){
            legendSquare.textContent = "Hit";
        }
        if(i == 4){
            legendSquare.id = "legend-miss-square";
        }
        if(i == 5){
            legendSquare.textContent = "Miss";
        }
        legend.appendChild(legendSquare);
      }
      legendContainer.appendChild(legend);
      displayWrap.appendChild(legendContainer);
  }

  function createInfoText() {
    const infoTextContainer = document.createElement("div");
    infoTextContainer.classList.add("info-text-container");
    infoText = document.createElement("h2");
    infoText.textContent = "Place Your Ships!";
    infoText.classList.add("info-text");
    infoTextContainer.appendChild(infoText);
    displayWrap.appendChild(infoTextContainer);
  }

  function createStartPopUp() {
    const template = createPopUpTemplate();
    const templateContainer = template.children[0].children[0];
    const startHeading = document.createElement("h1");
    startHeading.id = "start-title";
    startHeading.textContent = "Welcome to Battleship";
    const startInfoContainer = document.createElement("div");
    startInfoContainer.classList.add("start-info-container");
    const instructionsContainer = document.createElement('div');
    instructionsContainer.id = "instructions-container";
    const instructionsHeadingContainer = document.createElement('div');
    instructionsHeadingContainer.classList.add("flex-center");
    const instructionsHeading = document.createElement("h3");
    instructionsHeading.textContent = "How To Play";
    const howToPlayContainer = document.createElement('div');
    howToPlayContainer.classList.add("how-to-play-container");
    const howToPlay = document.createElement('ul');
    howToPlay.id = "how-to-play";
    const howToPlayOne = document.createElement('li');
    howToPlayOne.textContent = "Place your ship on your grid either horizontally or vertically";
    const howToPlayTwo = document.createElement('li');
    howToPlayTwo.textContent = "You and the computer will take turns attacking each other's game boards";
    const howToPlayThree = document.createElement('li');
    howToPlayThree.textContent = "The first to sink all of the other's ships wins!";
    const playBtnContainer = document.createElement('div');
    playBtnContainer.classList.add('play-btn-container');
    const playBtn = document.createElement("button");
    playBtn.textContent = "Play";
    playBtn.classList.add("play-btn");
    playBtn.addEventListener("click", removePopUp);
    playBtnContainer.appendChild(playBtn);
    howToPlay.appendChild(howToPlayOne);
    howToPlay.appendChild(howToPlayTwo);
    howToPlay.appendChild(howToPlayThree);
    howToPlayContainer.appendChild(howToPlay);
    instructionsHeadingContainer.appendChild(instructionsHeading);
    instructionsContainer.appendChild(instructionsHeadingContainer);
    instructionsContainer.appendChild(howToPlayContainer);
    startInfoContainer.appendChild(instructionsContainer);
    startInfoContainer.appendChild(playBtnContainer);
    templateContainer.appendChild(startHeading);
    templateContainer.appendChild(startInfoContainer);
    document.body.appendChild(template);
  }

  function createPopUpTemplate() {
    const popUpBack = document.createElement('div');
    popUpBack.classList.add("pop-up-background");
    const popUp = document.createElement("div");
    popUp.classList.add("pop-up");
    const popUpContentContainer = document.createElement("div");
    popUpContentContainer.classList.add("pop-up-container");
    popUp.appendChild(popUpContentContainer);
    popUpBack.appendChild(popUp);
    currentPopUp = popUpBack;
    return (popUpBack);
  }

  function removePopUp() {
    currentPopUp.remove();
  }

  function createWinModal(winner){
    const template = createPopUpTemplate();
    const winText = document.createElement("h2");
    winText.classList.add("win-text");
    const winSubText = document.createElement("h4");
    winSubText.classList.add("win-sub-text");
    if(winner == "player"){
        winText.textContent = "You win!";
        winSubText.textContent = "You sunk all the computer's ships";
    }
    else{
        winText.textContent = "You lose";
        winSubText.textContent = "The computer sunk all your ships";
    }
    template.children[0].children[0].appendChild(winText)
    template.children[0].children[0].appendChild(winSubText)
    document.body.appendChild(template);
  }

  return {createStartPopUp, createInfoText, changeInfoText, createLegend, createWinModal};

})();

export {mainElements};
