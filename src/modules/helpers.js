const stopGame = (cardWrapper, rotateCard, playSound, game) => {
    cardWrapper.forEach((i) => {
        i.removeEventListener("click", rotateCard);
        i.removeEventListener("click", playSound);
        i.removeEventListener("click", game);
    });
}

const continueGame = (cardWrapper, rotateOnOff, soundOnOff, game) => {
    cardWrapper.forEach((i) => {
        rotateOnOff();
        soundOnOff();
        i.addEventListener("click", game);
        i.style.pointerEvents = 'auto';
    });
}

const getRandom = (x) => {
    return x[Math.floor(Math.random() * x.length)];
}

const responsiveGameBoardLevel1 = () => {
    let documentWidth = document.documentElement.clientWidth;
    switch (true) {
        case (documentWidth <= 1440 && documentWidth > 1284):
            gameBoard.style.width = '70rem'
            gameBoard.style.background = 'black';
            break;
        case (documentWidth <= 1284 && documentWidth > 1024):
            gameBoard.style.width = '60%'
            gameBoard.style.background = 'blue';
            break;
        case (documentWidth <= 1024 && documentWidth > 768):
            gameBoard.style.width = '70%'
            gameBoard.style.background = 'green';
            break;	
        case (documentWidth <= 768):
            gameBoard.style.width = '80%'
            gameBoard.style.background = 'yellow';
            break;
        default:
            gameBoard.style.width = '35rem';
            gameBoard.style.background = 'red';
            break;
    }
}

const responsiveGameBoardLevel2 = () => {
    let documentWidth = document.documentElement.clientWidth;
    switch (true) {
        case (documentWidth <= 1440 && documentWidth > 1284):
            gameBoard.style.width = '70rem'
            gameBoard.style.background = 'black';
            break;
        case (documentWidth <= 1284 && documentWidth > 1024):
            gameBoard.style.width = '60%'
            gameBoard.style.background = 'blue';
            break;
        case (documentWidth <= 1024 && documentWidth > 768):
            gameBoard.style.width = '70%'
            gameBoard.style.background = 'green';
            break;	
        case (documentWidth <= 768):
            gameBoard.style.width = '100%'
            gameBoard.style.background = 'yellow';
            break;
        default:
            gameBoard.style.width = '55rem';
            gameBoard.style.background = 'orange';
            break;
    }
}

const responsiveGameBoardLevel3 = () => {
    let documentWidth = document.documentElement.clientWidth;
    switch (true) {
        case (documentWidth <= 1440 && documentWidth > 1284):
            gameBoard.style.width = '70rem'
            gameBoard.style.background = 'black';
            break;
        case (documentWidth <= 1284 && documentWidth > 1024):
            gameBoard.style.width = '55rem'
            gameBoard.style.background = 'blue';
            break;
        case (documentWidth <= 1024 && documentWidth > 768):
            gameBoard.style.width = '65rem'
            gameBoard.style.background = 'green';
            break;	
        case (documentWidth <= 768):
            gameBoard.style.width = '50rem'
            gameBoard.style.background = 'yellow';
            break;
        default:
            gameBoard.style.width = '75rem';
            gameBoard.style.background = 'red';
            break;
    }
}

// The proper way to formulate my switch statement is:
    /* function gradeCalculator(grade) {
        switch (true) {
          case (grade >= 90):
            return "A"
          case grade >= 80:
            return "B"
          case grade >= 70:
            return "C"
          case grade >= 60:
            return "D"
          case grade <= 59:
            return "F"
        }
      } */

export {stopGame, continueGame, getRandom, responsiveGameBoardLevel1, responsiveGameBoardLevel2, responsiveGameBoardLevel3};