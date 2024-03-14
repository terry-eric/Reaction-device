import { wakeLockStart, wakeLockStop } from "./keep_wake.js";
import { bleSearch, bleDisconnect, sendModeEvent } from "./bluetooth.js";


var startButton = document.getElementById("myButton");
startButton.addEventListener("click", toggleColor);

function toggleColor() {
  if (startButton.classList.contains("btn-primary")) {
    onStartButtonClick();
  } else {
    onStopButtonClick();
  }
}

async function onStartButtonClick() {
  wakeLockStart();
  bleSearch().then(function (result) {
    if (result == "success") {
      startButton.classList.remove("btn-primary");
      startButton.classList.add("btn-danger");
      startButton.innerHTML = "點擊結束";
    };
  })
}

async function onStopButtonClick() {
  wakeLockStop();
  startButton.classList.remove("btn-danger");
  startButton.classList.add("btn-primary");
  startButton.innerHTML = "點擊開始";

  try {
    bleDisconnect();

  } catch (error) {
    console.error(error)
    log('Argh! ' + error);
  }
}
