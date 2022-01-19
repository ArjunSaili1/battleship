
const popUps = (()=>{

    let currentPopUp;

    function createStartPopUp(){
        const template = createPopUpTemplate();
        const templateContainer = template.children[0].children[0];
        const startHeading = document.createElement("h1");
        startHeading.id = "start-title";
        startHeading.textContent = "Welcome to Battleship";
        const startInfoContainer = document.createElement("div");
        startInfoContainer.classList.add("start-info-container");
        const instructionsContainer = document.createElement('div');
        instructionsContainer.id = "instructions-container"
        const instructionsHeadingContainer = document.createElement('div');
        instructionsHeadingContainer.classList.add("flex-center");
        const instructionsHeading = document.createElement("h3");
        instructionsHeading.textContent = "How To Play";
        const howToPlayContainer = document.createElement('div');
        howToPlayContainer.classList.add("how-to-play-container");
        const howToPlay = document.createElement('ul');
        howToPlay.id = "how-to-play";
        const howToPlayOne = document.createElement('li');
        howToPlayOne.textContent = "Place your ships on to your grid either horizontally or vertically";
        const howToPlayTwo = document.createElement('li');
        howToPlayTwo.textContent = "You and the computer will take turns attacking each other's gameboards";
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
        instructionsHeadingContainer.appendChild(instructionsHeading)
        instructionsContainer.appendChild(instructionsHeadingContainer);
        instructionsContainer.appendChild(howToPlayContainer);
        startInfoContainer.appendChild(instructionsContainer);
        startInfoContainer.appendChild(playBtnContainer)
        templateContainer.appendChild(startHeading);
        templateContainer.appendChild(startInfoContainer)
        document.body.appendChild(template)
    }

    function createPopUpTemplate(){
        const popUpBack = document.createElement('div');
        popUpBack.classList.add("pop-up-background")
        const popUp = document.createElement("div");
        popUp.classList.add("pop-up");
        const popUpContentContainer = document.createElement("div");
        popUpContentContainer.classList.add("pop-up-container");
        popUp.appendChild(popUpContentContainer);
        popUpBack.appendChild(popUp);
        currentPopUp = popUpBack;
        return(popUpBack);
    }

    function removePopUp(){
        currentPopUp.remove();
    }

    return {createStartPopUp}

})()

export {popUps}