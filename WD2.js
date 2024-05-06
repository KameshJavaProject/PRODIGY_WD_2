let startTime;
let running = false;
let lapCounter = 1;

function startStop() {
  if (running) {
    clearInterval(interval);
    running = false;
    document.getElementById("startStop").innerText = "Start";
  } else {
    startTime = new Date().getTime();
    interval = setInterval(updateDisplay, 10);
    running = true;
    document.getElementById("startStop").innerText = "Stop";
  }
}

function reset() {
  clearInterval(interval);
  running = false;
  document.getElementById("startStop").innerText = "Start";
  document.getElementById("display").innerText = "00:00:00";
  lapCounter = 1;
  document.getElementById("laps").innerHTML = "";
}

function updateDisplay() {
  let currentTime = new Date().getTime();
  let elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / 3600000);
  let minutes = Math.floor((elapsedTime % 3600000) / 60000);
  let seconds = Math.floor((elapsedTime % 60000) / 1000);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  document.getElementById("display").innerText =
    pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + ":" + pad(milliseconds);
}

function pad(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

function lap() {
  let lapTime = document.getElementById("display").innerText;
  let lapItem = document.createElement("li");
  lapItem.innerText = "Lap " + lapCounter + ": " + lapTime;
  document.getElementById("laps").appendChild(lapItem);
  lapCounter++;
}