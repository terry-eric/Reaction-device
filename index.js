import { wakeLockStart, wakeLockStop } from "./keep_wake.js";
import { bleSearch, bleDisconnect, sendModeEvent } from "./bluetooth.js";


var startButton = document.getElementById("myButton");
var modeButton = document.getElementById("bleButton");
var modeText = document.getElementById("voice-toggle");
startButton.addEventListener("click", toggleColor);
modeButton.addEventListener("click", toggleColorBle);

document.getElementById("btn-height").addEventListener("click", function () {

})
document.getElementById("btn-GuideBrick").addEventListener("click", function () {

})

function toggleColor() {
  if (startButton.classList.contains("btn-primary")) {
    onStartButtonClick();
  } else {
    onStopButtonClick();
  }
}

function toggleColorBle() {
  if (modeButton.classList.contains("btn-warning")) {
    modeButton.classList.remove("btn-warning");
    modeButton.classList.add("btn-info");
    modeText.innerHTML = "語音";
  } else {
    modeButton.classList.remove("btn-info");
    modeButton.classList.add("btn-warning");
    modeText.innerHTML = "鈴聲";
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
