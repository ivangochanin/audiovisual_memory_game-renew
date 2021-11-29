const radioInstrument = document.getElementsByName('radioInstrument');
const radioMode = document.getElementsByName('radioMode');
const radioFace = document.getElementsByName('radioFace');
let panelInstrumentName = document.querySelector('#panelInstrumentName');
let panelModeName = document.querySelector('#panelModeName');
let panelCardFaceName = document.querySelector('#panelCardFaceName');
let boardInfoInstrumentName = document.querySelector('#boardInfoInstrumentName');
let boardInfoModeName = document.querySelector('#boardInfoModeName');
let boardInfoFaceName = document.querySelector('#boardInfoFaceName');
let instrument = 'piano';
let mode = 'tone';
let cardFace = 'score';

const setInstrument = () => {
    radioInstrument.forEach(i => {
        i.addEventListener('click', () => {
            if (i.checked) {
                panelInstrumentName.innerHTML = i.value;
                boardInfoInstrumentName.innerHTML = i.value;
                instrument = i.value;
            }
        })
    })
}

const setMode = () => {
    radioMode.forEach(i => {
        i.addEventListener('click', () => {
            if (i.checked) {
                panelModeName.innerHTML = i.value;
                boardInfoModeName.innerHTML = i.value;
                mode = i.value;
            }
        })
    })
}

const setCardFace = () => {
    radioFace.forEach(i => {
        i.addEventListener('click', () => {
            if (i.checked) {
                panelCardFaceName.innerHTML = i.value;
                boardInfoFaceName.innerHTML = i.value;
                cardFace = i.value;
            }
        })
    })
}

const cardsData = () => {
    setInstrument();
    setMode();
    setCardFace();

    return [{
            "cardId": "01",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card01.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card01.mp3`
        },
        {
            "cardId": "02",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card02.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card02.mp3`
        },
        {
            "cardId": "03",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card03.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card03.mp3`
        },
        {
            "cardId": "04",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card04.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card04.mp3`
        },
        {
            "cardId": "05",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card05.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card05.mp3`
        },
        {
            "cardId": "06",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card06.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card06.mp3`
        },
        {
            "cardId": "07",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card07.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card07.mp3`
        },
        {
            "cardId": "08",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card08.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card08.mp3`
        },
        {
            "cardId": "09",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card09.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card09.mp3`
        },
        {
            "cardId": "10",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card10.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card10.mp3`
        },
        {
            "cardId": "11",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card11.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card11.mp3`
        },
        {
            "cardId": "12",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card12.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card12.mp3`
        },
        {
            "cardId": "13",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card13.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card13.mp3`
        },
        {
            "cardId": "14",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card14.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card14.mp3`
        },
        {
            "cardId": "15",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card15.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card15.mp3`
        },
        {
            "cardId": "16",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card16.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card16.mp3`
        },
        {
            "cardId": "17",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card17.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card17.mp3`
        },
        {
            "cardId": "18",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card18.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card18.mp3`
        },
        {
            "cardId": "19",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card19.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card19.mp3`
        },
        {
            "cardId": "20",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card20.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card20.mp3`
        },
        {
            "cardId": "21",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card21.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card21.mp3`
        },
        {
            "cardId": "22",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card22.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card22.mp3`
        },
        {
            "cardId": "23",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card23.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card23.mp3`
        },
        {
            "cardId": "24",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card24.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card24.mp3`
        },
        {
            "cardId": "25",
            "img": `./assets/cardFaces/${cardFace}/${mode}/card25.png`,
            "sound": `./assets/cardSounds/${instrument}/${mode}/card25.mp3`
        }
    ]
};

export default cardsData;