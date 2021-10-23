function attachGradientEvents() {
    const box = document.getElementById('gradient');
    const output = document.getElementById('result');
    box.addEventListener('mousemove', onMove);

    function onMove(ev) {
        const offset = Math.floor((ev.offsetX / 300) * 100);

        output.textContent = `${offset}%`;
    }
}