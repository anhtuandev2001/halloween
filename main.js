const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let upgradeTime = 172801;
let seconds = upgradeTime;
function timer() {
  let days        = Math.floor(seconds/24/60/60);
  let hoursLeft   = Math.floor((seconds) - (days*86400));
  let hours       = Math.floor(hoursLeft/3600);
  let minutesLeft = Math.floor((hoursLeft) - (hours*3600));
  let minutes     = Math.floor(minutesLeft/60);
  let remainingSeconds = seconds % 60;
  let pad = (n) => {
    return (n < 10 ? "0" + n : n);
  }
  document.getElementById('countdown').innerHTML = 
  `<span class="countdown__item flex-col align-center">
        <p class="countdomwn__number">${pad(days)}</p>
        <p class="countdomwn__text">DAYS</p>
    </span>
    <img src="./asset/img/icon/colon.svg" alt="#" class="colon">
    <span class="countdown__item flex-col align-center">
        <p class="countdomwn__number">${pad(hours)}</p>
        <p class="countdomwn__text">HOURS</p>
    </span>
    <img src="./asset/img/icon/colon.svg" alt="#" class="colon">
    <span class="countdown__item flex-col align-center">
        <p class="countdomwn__number">${pad(minutes)}</p>
        <p class="countdomwn__text">MINS</p>
    </span>
    <img src="./asset/img/icon/colon.svg" alt="#" class="colon">
    <span class="countdown__item flex-col align-center">
        <p class="countdomwn__number">${pad(remainingSeconds)}</p>
        <p class="countdomwn__text">SECS</p>
    </span>
  `;
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds--;
  }
}
let countdownTimer = setInterval('timer()', 1000);
// 

const playMovie = $('.js-movie__play');
const decorImg = $('.js-decor-img');
const decorVideo = ('.js-decor__video')

let toogleElemtn = (e,className) => {
    let element = $(e);
    element.classList.toggle(className);
}

let playVideo = () =>{
    toogleElemtn('.js-movie__play','hide');
    toogleElemtn('.-js-decor-img','hide');
    toogleElemtn('.decor__video','show');
}

playMovie.addEventListener('click',playVideo)