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
const decorVideo = $('.js-decor__video');

let toogleElement = (element,className) => {
  $(element).classList.toggle(className);
}

let playVideo = () =>{
    toogleElement('.js-movie__play','hide');
    toogleElement('.js-decor-img','hide');
    toogleElement('.decor__video','show');
    closeVideo();
}

playMovie.addEventListener('click',playVideo);
// 

const slideImgs = $$('.slide__img');
const sellerItems = $$('.seller__item');



sellerItems.forEach(function(ele,index){
    let sellerImg = ele.querySelector('.seller__img');
    let slideSrc = ele.querySelector('.slide__img--active').getAttribute('src');
    sellerImg.setAttribute("src", slideSrc);

    ele.querySelectorAll('.slide__img').forEach((item) => {
        item.onclick = function(){
            ele.querySelector('.slide__img.slide__img--active').classList   .remove('slide__img--active');
            this.classList.add('slide__img--active')
            let slideSrc = ele.querySelector('.slide__img--active').getAttribute('src');
            sellerImg.setAttribute("src", slideSrc);
        }
    })
})

