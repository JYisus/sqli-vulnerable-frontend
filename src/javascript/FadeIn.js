function fadeIn(el) {
    el.style.opacity = 0

    let last = +new Date();
    var tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last)/400
        last = +new Date()

        if(+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16))
        }
    }

    tick()
}

export default fadeIn
