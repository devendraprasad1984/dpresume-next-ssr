const _win = window
export const calculatePerformance = () => {
    const _perf = _win.performance
    const start = _perf.now()
    const timing = _perf.timing
    return {
        runtime: () => Math.floor(_perf.now() - start),
        perftime: () => Math.floor(timing.loadEventEnd - timing.navigationStart)
    }
}

export const createRipple = (event) => {
    const button = event.currentTarget;
    console.log('ripple', button);

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];

    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}



export function applyCursorRippleEffect(e) {
    const ripple = document.createElement("div");

    ripple.className = "ripplex";
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    ripple.style.animation = "ripple-effect .4s  linear";
    ripple.onanimationend = () => document.body.removeChild(ripple);

}
