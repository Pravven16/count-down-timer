const dayE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");

const examDate = "01 Jan 2025";

function countdown() {
    const exam_date = new Date(examDate);
    const currentDate =  new Date();

    const totalSeconds = (exam_date - currentDate)/1000;
    
    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    dayE1.innerHTML =days;
    hoursE1.innerHTML =formatTime(hours);
    minsE1.innerHTML =formatTime(mins);
    secondsE1.innerHTML =formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ?  `0${time}` : time;
}

//initial call

countdown();

setInterval(countdown,1000);