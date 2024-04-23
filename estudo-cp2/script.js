let stopwatchCurrentTime = 0;

let timer;

function start() {
  timer = setInterval(() => {
    document.getElementById("stopwatch").innerHTML = new Date(
      stopwatchCurrentTime * 1000
    )
      .toISOString()
      .substring(11, 22)
      .replace(".", ":");
    stopwatchCurrentTime = stopwatchCurrentTime + 0.01;
  }, 10);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  stopwatchCurrentTime = 0;
  document.getElementById("stopwatch").innerHTML = new Date(
    stopwatchCurrentTime * 1000
  )
    .toISOString()
    .substring(11, 22)
    .replace(".", ":");
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
