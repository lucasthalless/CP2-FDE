let stopwatchCurrentTime = 0;

let timer;

function updateTimer() {
  document.getElementById("stopwatch").innerHTML = new Date(
    stopwatchCurrentTime * 1000
  )
    .toISOString()
    .substring(11, 22)
    .replace(".", ":");
}

function start() {
  timer = setInterval(() => {
    updateTimer();
    stopwatchCurrentTime = stopwatchCurrentTime + 0.01;
  }, 10);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  stopwatchCurrentTime = 0;
  updateTimer();
}

function markTime() {
  document
    .getElementById("marked-times")
    .insertAdjacentHTML(
      "beforeend",
      `<p>${new Date(stopwatchCurrentTime * 1000)
        .toISOString()
        .substring(11, 22)
        .replace(".", ":")}</p>`
    );
}
