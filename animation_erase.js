let startX;
let percentage = 0;
const unlockBar = document.getElementById('unlock-bar');

export function startPoint(e) {
    startX = e.pageX;
}

export function unlock() {
    if (percentage < 95) {
        unlockBar.style.width = `0%`
        unlockBar.innerText = `0%`
    } else {
        lockScreen.classList.toggle("hidden");
    }
    percentage = 0
}

var lockScreen = document.getElementById("lock-screen");
export function lock() {
    lockScreen.classList.toggle("hidden");
    unlockBar.style.width = `0%`
    unlockBar.innerText = `0%`
}

export function positionBarCal(e) {
    let deltaX = startX - e.pageX
    // use deltaX to change progress value
    percentage = parseInt(deltaX / (window.screen.width * 0.5) * 100)
    if (percentage < -100) {
        percentage = 100
    } else if (percentage > 0) {
        percentage = 0
    }
    unlockBar.style.width = `${Math.abs(percentage)}%`
    unlockBar.innerText = `${Math.abs(percentage)}%`
}