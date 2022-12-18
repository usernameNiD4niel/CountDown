const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

// I can't get the correct way to do this :(
setInterval(()=> {
    const currentDate = new Date();
    const newYearsDate = new Date("1 Jan 2023");
    const remaining = newYearsDate - currentDate;
    
    day.innerText = remaining.toString().substring(0,2);
    hour.innerText = remaining.toString().substring(2,4);
    minute.innerText = remaining.toString().substring(4,6);
    second.innerText = remaining.toString().substring(6,8);

}, 10);