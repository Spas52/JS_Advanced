function time(a, b, c) {
    let steps = Number(a);
    let footprint = Number(b);
    let speed = Number(c);

    let distance = steps * footprint;
    let speed_seconds = speed / 3.6;
    let time = distance / speed_seconds;
    let rest = Math.floor(distance / 500);

    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60);
    var seconds = Math.round(time - (minutes * 60));

    console.log((hours < 10 ? '0' : '') + hours + ':' + (minutes + rest < 10 ? '0' : '') + (minutes + rest) + ":" + (seconds < 10 ? "0" : "") + seconds);

}

time(2564, 0.70, 5.5)