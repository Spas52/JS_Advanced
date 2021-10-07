function crew(worker) {
    if (worker.dizziness == true) {
        let amountOfNeededWater = 0.1 * worker.weight * worker.experience;
        worker.levelOfHydrated += amountOfNeededWater;
        worker.dizziness = false;
        return worker
    } else {
        return worker
    }
}

console.log(crew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ))

// weight - kg;
// experience - years;
// levelOfHydrated - milliliters;