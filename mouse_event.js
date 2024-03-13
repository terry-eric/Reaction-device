export function mouseTouchChange() {
    var mouseEventTypes = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup"
    };

    for (var originalType in mouseEventTypes) {
        document.addEventListener(originalType, function (originalEvent) {
            let event = document.createEvent("MouseEvents");
            let touch = originalEvent.changedTouches[0];
            event.initMouseEvent(mouseEventTypes[originalEvent.type], true, true,
                window, 0, touch.screenX, touch.screenY, touch.clientX,
                touch.clientY, touch.ctrlKey, touch.altKey, touch.shiftKey,
                touch.metaKey, 0, null);
            originalEvent.target.dispatchEvent(event);
        });
    }
}

