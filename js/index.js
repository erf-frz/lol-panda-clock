let wakeupTime = 7;
let lunchTime = 12;
let noon = 12;
let napTime = 12 + 2 ;
let partyTime;
let evening = 18;



function displayClock(){

let currentTime = new Date();;
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
let meridian = 'AM';

if(hours>= noon){
  meridian = 'PM';
} 

if(hours > noon){
     hours = hours - 12;
   }

if(minutes<10){
     minutes = '0' + minutes;
   }

if(seconds <10){
     seconds = '0' + seconds;
   }

const time =`${hours}:${minutes}:${seconds} ${meridian} !`;
document.querySelector('.clock').innerText = time;

}; 


function displayTimeEvent(){

  let eventQuote;
  let imageTag = document.querySelector('.lolpanImage');
  let time = new Date().getHours();

  if(time == wakeupTime){
    //display relevant picture
    imageTag.style.background = "url(css/pics/sleepy.jpg)center/cover no-repeat";
    //display time event
    eventQuote = 'wake up!';

  }else if(time == partyTime){
    //display relevant picture
    imageTag.style.background = "url(css/pics/party.jpg)";
    //display time event
    eventQuote = 'Party time!';

  }else if(time == lunchTime){
    //display relevant picture
    imageTag.style.background = "url(css/pics/lunch.jpg)";
    //display time event
    eventQuote = 'It\'s lunch time!';

  }else if(time == napTime){
    //display relevant picture
    imageTag.style.background = "url(css/pics/nap.jpg)center/cover";
    //display time event
    eventQuote = 'Sleep tight!';

  }else if(time <noon){
    //display relevant picture
    imageTag.style.background = "url(css/pics/morning.jpg)";
    //display time event
    eventQuote = 'Good morning!';

  }else if(time == evening){
    //display relevant picture
    imageTag.style.background = "url(css/pics/evening.jpg)";
    //display time event
    eventQuote = 'Good evening!';

  }else{
    //display relevant picture
    imageTag.style.background = "url(css/pics/afternoon.jpg)";
    //display time event
    eventQuote = 'good afternoon!';
    
  }

document.querySelector('.timeEvent').innerText = eventQuote;
displayClock();
};

displayTimeEvent();


//getting the clock to increment once a second
let oneSecond = 1000;
setInterval(displayTimeEvent, oneSecond);


//activate the party button
let button = document.querySelector('.partyTimeButton');


function initiateParty(){

  if(partyTime <0){

    // change pic & text
  partyTime = new Date().getHours();

    //change button color
  button.style.backgroundColor = "rgb(65, 135, 138)";

  //change button text
  button.innerText = 'party over!';
  
 }else{
   partyTime = -1;
   button.style.backgroundColor = "rgb(53, 77, 78)";
   button.innerText = 'party time!';

 }
};

button.addEventListener('click', initiateParty);

initiateParty();


//activate set wekaup time

let wakeSelector = document.querySelector('#wakeUpTimeSelector');

function activateWakeup(){
  wakeupTime = wakeSelector.value;
};

wakeSelector.addEventListener('change', activateWakeup);

//activate set lunch time

let lunchSelector = document.querySelector('#lunchTimeSelector');

function activateLunch(){
  lunchTime = lunchSelector.value;
};

lunchSelector.addEventListener('change', activateLunch);

//activate set nap time

let napSelector = document.querySelector('#napTimeSelector');

function activateNap(){
  napTime = napSelector.value;
};

napSelector.addEventListener('change',activateNap);
