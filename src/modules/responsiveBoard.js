const responsiveLevel1 = (client) => {
    switch (true) {
        case (client <= 1440 && client > 1284): gameBoard.style.width = '30rem';
            break;
        case (client <= 1284 && client > 576): gameBoard.style.width = '26rem';
            break;
        case (client <= 576 && client > 380): gameBoard.style.width = '21rem';
            break;
        case (client <= 380): gameBoard.style.width = '18rem';
            break;
        case (client <= 320): gameBoard.style.width = '100%';
            break; 
        default: gameBoard.style.width = '35rem';
            break;
    }
}

const responsiveLevel2 = (client) => {
    switch (true) {
        case (client <= 1440 && client > 1284): gameBoard.style.width = '50rem';
            break;
        case (client <= 1284 && client > 576): gameBoard.style.width = '40rem';
            break;
        case (client <= 576 && client > 450): gameBoard.style.width = '35rem';
            break;
        case (client <= 450 && client > 380): gameBoard.style.width = '30rem';
            break;
        case (client <= 380 && client > 320): gameBoard.style.width = '25rem';
            break;    
        case (client <= 320): gameBoard.style.width = '100%';
            break; 
        default: gameBoard.style.width = '55rem';
            break;
    }
}

const responsiveLevel3 = (client) => {
    switch (true) {
        case (client <= 1440 && client > 1284): gameBoard.style.width = '70rem';
            break;
        case (client <= 1284 && client > 1024): gameBoard.style.width = '55rem';
            break;
        case (client <= 1024 && client > 768): gameBoard.style.width = '65rem';
            break;	
            case (client <= 768 && client > 576): gameBoard.style.width = '50rem';
            break;
        case (client <= 576): gameBoard.style.width = '100%';
            break;
        default: gameBoard.style.width = '75rem';
            break;
    }
}

export {responsiveLevel1, responsiveLevel2, responsiveLevel3};