function radar(speed, area) {
    let limit = 0;
    let status;
    if (area == 'motorway') {
        limit = 130;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        } else {
            let overLimit = Math.abs(speed - limit);
            if (overLimit <= 20) {
                status = 'speeding';
            } else if (overLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }

    } else if (area == 'interstate') {
        limit = 90;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        } else {
            let overLimit = Math.abs(speed - limit);
            if (overLimit <= 20) {
                status = 'speeding';
            } else if (overLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    } else if (area == 'city') {
        limit = 50;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        } else {
            let overLimit = Math.abs(speed - limit);
            if (overLimit <= 20) {
                status = 'speeding';
            } else if (overLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    } else if (area == 'residential') {
        limit = 20;
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        } else {
            let overLimit = Math.abs(speed - limit);
            if (overLimit <= 20) {
                status = 'speeding';
            } else if (overLimit <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${overLimit} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
}

// radar(21, 'residential')