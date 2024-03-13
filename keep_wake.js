//screen keep wake suport check 
let canWakeLock = 'wakeLock' in navigator;

let wakeLock = null; const requestWakeLock = async () => {
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        console.log('Wake Lock is active!');
    } catch (err) {
        console.log(`${err.name}, ${err.message}`);
    }
}

let screenRrelease = async function () {
    console.log('Wake Lock has been released');
}
let reWakeScreen = async function () {
    if (wakeLock !== null && document.visibilityState === 'visible') {
        requestWakeLock()
    }
}


export function wakeLockStart() {
    //when the code is ready, then screen keep wake 
    if (canWakeLock == true) {
        requestWakeLock();
        //check Wake Lock 
        // wakeLock.addEventListener('release', screenRrelease);
        document.addEventListener('visibilitychange', reWakeScreen);
    }

}

export function wakeLockStop() {
    if (canWakeLock == true) {
        wakeLock.removeEventListener('release', screenRrelease);
        document.removeEventListener('visibilitychange', reWakeScreen);
        wakeLock.release().then(() => wakeLock = null);
        console.log('release wake lock')
    }
}

