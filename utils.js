export function log(text) {
    // let log_ele = document.querySelector("#log")
    // if (log_ele.value.length > 20000)
    //     log_ele.value = ""
    // log_ele.value += text + "\n"
    console.log(text);
}

export function bytes2int16(bytes) {
    var view = new DataView(new ArrayBuffer(2));
    view.setUint8(0, bytes[1]);
    view.setUint8(1, bytes[0]);
    return view.getInt16(0, true); // true indicates little-endian byte order
}
