import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
let timerId = null;
let selectedDate = null;
let currentDate = new Date();
disableBtn(startBtn);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    currentDate = new Date();
    const selectedDateTime = selectedDate.getTime();
    const currentDateTime = currentDate.getTime();

    if (selectedDateTime < currentDateTime) {
      disableBtn(startBtn);
      Notiflix.Notify.failure("Please choose a date in the future");
    } else {
      enableBtn(startBtn);
      clearInterval(timerId);
      setTimeValuesToZero();
    }
  },
};

startBtn.addEventListener("click", () =>{
  const selectedDateTime = selectedDate.getTime();
  const currentDateTime = currentDate.getTime();
  setTimeValues(selectedDateTime, currentDateTime);
  clearInterval(timerId);
  timerId = setInterval(() => {
    decrementTime(days, hours, minutes, seconds)
  }, 1000);
})

const dateInput = document.querySelector('#datetime-picker');
flatpickr(dateInput, options);

function disableBtn(btn){
  if(btn instanceof HTMLButtonElement){
    btn.disabled = true;
  }
}

function enableBtn(btn){
  if(btn instanceof HTMLButtonElement){
    btn.disabled = false;
  }
}

function setTimeValues(selectedDateTime, currentDateTime){
  let distance = selectedDateTime - currentDateTime;
  days.textContent = addLeadingZero(Math.floor(distance / (1000 * 60 * 60 * 24)));
  hours.textContent = addLeadingZero(Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
  minutes.textContent = addLeadingZero(Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)));
  seconds.textContent = addLeadingZero(Math.floor(distance % (1000 * 60) / 1000));
}

function setTimeValuesToZero(){
  days.textContent = "00";
  hours.textContent = "00";
  minutes.textContent = "00";
  seconds.textContent = "00";
}

function decrementTime(days, hours, minutes, seconds){
  let s = parseInt(seconds.textContent);
  let m = parseInt(minutes.textContent);
  let h = parseInt(hours.textContent);
  let d = parseInt(days.textContent);
  
  if(s !== 0){
    seconds.textContent = addLeadingZero(s - 1);
  } else {
    if(m !== 0){
      seconds.textContent = 59;
      minutes.textContent = addLeadingZero(m - 1);
    } else {
      if(h !== 0){
        minutes.textContent = 59;
        hours.textContent = addLeadingZero(h - 1);
      } else {
        if(d !== 0){
          hours.textContent = 23;
          days.textContent = addLeadingZero(d - 1);
        }
      }
    }
  }
}

function addLeadingZero(value){
  let str = value.toString();
  if(str.length === 1){
    str = str.padStart(2, "0");
  }
  return str;
}