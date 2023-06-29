let secondar = document.querySelector(".secondhand");
let minutear = document.querySelector(".minutehand");
let hourar = document.querySelector(".hourhand");
let timertext = document.querySelector(".displayTime");
let display = document.querySelector(".animate-character");
let hour = 0,
  second = 0,
  minute = 0;
let h, m, s;

let timer = null;

function UpdateClock() {
  let currentDate = new Date();
  let seconds = currentDate.getSeconds();
  let minutes = currentDate.getMinutes();
  let hours = currentDate.getHours();

  let secondsdeg = (seconds / 60) * 360;
  secondar.style.transform = `rotate(${secondsdeg}deg)`;
  let minutessdeg = (minutes / 60) * 360;
  minutear.style.transform = `rotate(${minutessdeg}deg)`;
  let hoursdeg = (hours / 12) * 360;
  hourar.style.transform = `rotate(${hoursdeg}deg)`;
}

setInterval(UpdateClock, 1000);

function resettime() {
  clearInterval(timer);
  timertext.innerHTML = "00 : 00 : 00";
  hour = Number(prompt("enter hours in digits"));
  minute = Number(prompt("enter minutes in digits"));
  second = Number(prompt("enter seconds in digits"));

  h = hour < 10 ? "0" + hour : hour;
  m = minute < 10 ? "0" + minute : minute;
  s = second < 10 ? "0" + second : second;
  timertext.innerHTML = h + " : " + m + " : " + s;
}

function displaytime() {
  if (second > 0) {
    second--;
    console.log(second);
  } else {
    if (minute > 0) {
      minute--;
      second = 60;
    } else {
      if (hour > 0) {
        hour--;
        minute = 60;
      }
    }
  }

  h = hour < 10 ? "0" + hour : hour;
  m = minute < 10 ? "0" + minute : minute;
  s = second < 10 ? "0" + second : second;
  if (hour === 0 && minute === 0 && second === 0) {
    display.innerHTML = "TIME OUT !!";
    display.style.color = "aliceblue";
    display.style.textAlign = "center";
    display.style.fontSize = "50px";
    display.style.fontWeight = "300";
  }

  timertext.innerHTML = h + " : " + m + " : " + s;
}

function starttime() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(displaytime, 1000);
}

function stoptime() {
  clearInterval(timer);
}
