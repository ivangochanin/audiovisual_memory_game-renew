const responsiveLevel1 = () => {
    let documentWidth = document.documentElement.clientWidth;
    switch (true) {
        case (documentWidth <= 1440 && documentWidth > 1284): gameBoard.style.width = '30rem';
            /* gameBoard.style.background = 'black'; */
            break;
        case (documentWidth <= 1284 && documentWidth > 576): gameBoard.style.width = '26rem';
            /* gameBoard.style.background = 'blue'; */
            break;
        case (documentWidth <= 576 && documentWidth > 380): gameBoard.style.width = '21rem';
            /* gameBoard.style.background = 'pink'; */
            break;
        case (documentWidth <= 380): gameBoard.style.width = '18rem';
            /* gameBoard.style.background = 'pink'; */
            break;
        case (documentWidth <= 320): gameBoard.style.width = '100%';
            /* gameBoard.style.background = 'pink'; */
            break; 
        default: gameBoard.style.width = '35rem';
            /* gameBoard.style.background = 'red'; */
            break;
    }
}

const responsiveLevel2 = () => {
    let documentWidth = document.documentElement.clientWidth;
    switch (true) {
        case (documentWidth <= 1440 && documentWidth > 1284): gameBoard.style.width = '50rem';
            /* gameBoard.style.background = 'black'; */
            break;
        case (documentWidth <= 1284 && documentWidth > 576): gameBoard.style.width = '40rem';
            /* gameBoard.style.background = 'blue'; */
            break;
        case (documentWidth <= 576 && documentWidth > 450): gameBoard.style.width = '35rem';
            /* gameBoard.style.background = 'pink'; */
            break;
        case (documentWidth <= 450 && documentWidth > 380): gameBoard.style.width = '30rem';
           /*  gameBoard.style.background = 'pink'; */
            break;
        case (documentWidth <= 380 && documentWidth > 320): gameBoard.style.width = '25rem';
            /* gameBoard.style.background = 'pink'; */
            break;    
        case (documentWidth <= 320): gameBoard.style.width = '100%';
            /* gameBoard.style.background = 'pink'; */
            break; 
        default: gameBoard.style.width = '55rem';
            /* gameBoard.style.background = 'orange'; */
            break;
    }
}

const responsiveLevel3 = () => {
    let documentWidth = document.documentElement.clientWidth;
    switch (true) {
        case (documentWidth <= 1440 && documentWidth > 1284): gameBoard.style.width = '70rem';
            /* gameBoard.style.background = 'black'; */
            break;
        case (documentWidth <= 1284 && documentWidth > 1024): gameBoard.style.width = '55rem';
            /* gameBoard.style.background = 'blue'; */
            break;
        case (documentWidth <= 1024 && documentWidth > 768): gameBoard.style.width = '65rem';
           /*  gameBoard.style.background = 'green'; */
            break;	
            case (documentWidth <= 768 && documentWidth > 576): gameBoard.style.width = '50rem';
           /*  gameBoard.style.background = 'yellow'; */
            break;
        case (documentWidth <= 576): gameBoard.style.width = '100%';
           /*  gameBoard.style.background = 'pink'; */
            break;
        default: gameBoard.style.width = '75rem';
            /* gameBoard.style.background = 'red'; */
            break;
    }
}

export {responsiveLevel1, responsiveLevel2, responsiveLevel3};