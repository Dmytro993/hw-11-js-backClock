// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),
//   });

const days = document.querySelector('.field  span[data-value="days"]')
const hours = document.querySelector('.field  span[data-value="hours"]')
const mins = document.querySelector('.field  span[data-value="mins"]')
const secs = document.querySelector('.field  span[data-value="secs"]')
let day = "Dec 31 2020 00:00:00"


function setTime(time){
    let dayc = Math.floor(time/1000/60/60/24)
    let hour =  Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((time % (1000 * 60)) / 1000); 
    return {dayc,hour,min,sec}
}
function myTimer(date){
    let time = new Date(date) - Date.now()
    let x = setTime(time)
    
    days.textContent = x.dayc;
    hours.textContent = x.hour;
    mins.textContent = x.min;
    secs.textContent = x.sec;   
    
  }


let interval = setInterval(()=>{
    myTimer(day)
},1000)