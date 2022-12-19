const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(()=> {
    const currentDate = new Date();
    const newYearsDate = new Date("1 Jan 2023");
    const remaining = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(remaining / 3600 / 24);
    const hours = Math.floor(remaining / 3600) % 24;
    const minutes = Math.floor(remaining / 60) % 60;
    const seconds = Math.floor(remaining) % 60;
    
    day.innerText = (days < 10) ? `0${days}` : days;
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = (seconds < 10) ? `0${seconds}` : seconds;

}, 1000);