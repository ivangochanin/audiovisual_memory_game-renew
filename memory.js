let card = document.querySelectorAll('.card');
let front = document.querySelectorAll('.front');
let back = document.querySelectorAll('.back');
let backMycards = document.querySelectorAll('.myCardsB');
let myAudio = document.querySelectorAll('.myAudio');
let switchVisual = document.querySelector('#switchVisual');
let switchSound = document.querySelector('#switchSound');
let compareCards = [];
let theTimer = document.querySelector(".timer");
let timer = [0,0,0,0];
let openedCards = 0;

let dataPackage = [
  {img:"images/card1.png",sound:"images/card1.wav"},
  {img:"images/card2.png",sound:"images/card2.wav"},
  {img:"images/card3.png",sound:"images/card3.wav"},
  {img:"images/card4.png",sound:"images/card4.wav"},
  {img:"images/card5.png",sound:"images/card5.wav"},
  {img:"images/card6.png",sound:"images/card6.wav"},
  {img:"images/card7.png",sound:"images/card7.wav"},
  {img:"images/card8.png",sound:"images/card8.wav"},
  {img:"images/card1.png",sound:"images/card1.wav"},
  {img:"images/card2.png",sound:"images/card2.wav"},
  {img:"images/card3.png",sound:"images/card3.wav"},
  {img:"images/card4.png",sound:"images/card4.wav"},
  {img:"images/card5.png",sound:"images/card5.wav"},
  {img:"images/card6.png",sound:"images/card6.wav"},
  {img:"images/card7.png",sound:"images/card7.wav"},
  {img:"images/card8.png",sound:"images/card8.wav"}
];

back.forEach(random => {
  let randomData = dataPackage[Math.floor(Math.random() * dataPackage.length)];
  random.childNodes[1].src = randomData.img;
  random.childNodes[3].src = randomData.sound;  
  let randomIndex = dataPackage.indexOf(randomData);
  dataPackage.splice(randomIndex,1); 
});

card.forEach(v => {
  v.addEventListener('click', rotate); 
  v.addEventListener('click', playSound);
  /* v.addEventListener('click', startTimer); */   // every click is new time - F I X !!!!!!!
});

function rotate() {
  let x = this.childNodes[1];
  let y = this.childNodes[3];
  x.classList.add('front-rotate');
  y.classList.add('back-rotate');
  compareCards.push(y);
  openedCards++;
  if (openedCards == 2) {
    console.log(openedCards);
    card.forEach(v => {
      setTimeout(function () {
        v.removeEventListener('click', rotate);
        v.removeEventListener('click', playSound);
      }, 100);
    });

    if (compareCards[0].childNodes[1].src == compareCards[1].childNodes[1].src) {
      compareCards[0].remove('front-rotate'), compareCards[1].remove('front-rotate');
      console.log('yeeeee');
      openedCards = 0;
      console.log(openedCards);
    } else {
      setTimeout(function () {
        console.log(compareCards[1]);
        console.log(compareCards);      
        compareCards[0] = y.classList.replace('back-rotate', 'front-rotate');
        compareCards[0] = x.classList.replace('front-rotate', 'back-rotate');
        compareCards[1] = y.classList.replace('back-rotate', 'front-rotate');
        compareCards[1] = x.classList.replace('front-rotate', 'back-rotate');
        console.log('nooo');
        openedCards = 0;
        console.log(openedCards);
      }, 1000);
// setTimeout has to be separat - whole if has to be in extra function
    }
    compareCards = [];
  };
}

function playSound(){
  let backdiv = this.childNodes[3];
  let mySound = backdiv.childNodes[3]
  mySound.play();
};

switchVisual.addEventListener('click', rotateOnOff);
function rotateOnOff() {
  card.forEach(v => {
  (switchVisual.checked) ? v.removeEventListener('click', rotate) : v.addEventListener('click', rotate); 
 });
};

switchSound.addEventListener('click', soundOnOff);
function soundOnOff() {
  card.forEach(s => {
  (switchSound.checked) ? s.removeEventListener('click', playSound) : s.addEventListener('click', playSound); 
 });
};

function runTimer() {                       //fix timer to 0:00
  let currentTime = timer[0] + " : " + timer[1] + " : "  +  timer[2];
  theTimer.innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function startTimer() {
  setInterval(runTimer, 1000);
}

