class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { 'child': 150, 'student': 300, 'collegian': 500 };
        this.listOfParticipants = [];
        this.namesOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);
        let isConditionTrue = this.priceForTheCamp.hasOwnProperty(condition);
        if (isConditionTrue == false) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        let isNameInList = this.namesOfParticipants.indexOf(name);
        if (isNameInList != -1) {
            return `The ${name} is already registered at the camp.`;
        }

        let neededMoney = 0;
        let arrayOfPriceForTheCamp = Object.entries(this.priceForTheCamp);
        for (const item of arrayOfPriceForTheCamp) {
            if (item[0] == condition) {
                neededMoney = item[1]
            }
        }
        if (money < neededMoney) {
            return `The money is not enough to pay the stay at the camp.`
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        this.namesOfParticipants.push(name);
        return `The ${name} was successfully registered.`
    }

    unregisterParticipant(name) {
        let isNameInList = this.namesOfParticipants.indexOf(name);
        if (isNameInList == -1) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }
        for (let i = 0; i < this.namesOfParticipants.length; i++) {
            if (this.namesOfParticipants[i] == name) {
                this.namesOfParticipants.splice(i, 1);
            }
        }
        let participant = this.listOfParticipants[0].name;
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            if (this.listOfParticipants[i].name == name) {
                this.listOfParticipants.splice(i, 1)
            }
        }
        return `The ${name} removed successfully.`    // ot greshkata ne izliza 3 test(moje da ima problem)
    }

    timeToPlay(typeOfGame, participant1, participant2) {   // participant 2 is a optional
        if (typeOfGame == 'WaterBalloonFights') {
            let player1Index; // 2 players
            let player1;
            let player1Condition;
            let player1Power;
            let player2Index;
            let player2;
            let player2Condition;
            let player2Power;
            for (let i = 0; i < this.listOfParticipants.length; i++) {
                if (this.listOfParticipants[i].name == participant1) {
                    player1Index = i;
                    player1 = participant1;
                    player1Condition = this.listOfParticipants[i].condition;
                    player1Power = this.listOfParticipants[i].power;
                } else if (this.listOfParticipants[i].name == participant2) {
                    player2Index = i;
                    player2 = participant2;
                    player2Condition = this.listOfParticipants[i].condition;
                    player2Power = this.listOfParticipants[i].power;
                }
            }

            if (player1 == undefined || player2 == undefined) {
                throw new Error('Invalid entered name/s.')
            }

            if (player1Condition != player2Condition) {
                throw new Error('Choose players with equal condition.')
            }

            if (player1Power > player2Power) {
                this.listOfParticipants[player1Index].wins += 1;
                return `The ${player1} is winner in the game ${typeOfGame}.`
            } else if (player1Power < player2Power) {
                this.listOfParticipants[player2Index].wins += 1;
                return `The ${player2} is winner in the game ${typeOfGame}.`
            } else {
                return 'There is no winner.'
            }
        } else if (typeOfGame == 'Battleship') {
            let player1Index;
            let player1;
            let player1Power;

            for (let i = 0; i < this.listOfParticipants.length; i++) {
                if (this.listOfParticipants[i].name == participant1) {
                    player1Index = i;
                    player1 = participant1;
                    player1Power = this.listOfParticipants[i].power;
                }
            }

            if (player1 == undefined) {
                throw new Error('Invalid entered name/s.')
            }

            this.listOfParticipants[player1Index].power += 20;
            return `The ${player1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString() {
        this.listOfParticipants.sort((a, b) => (b.wins) - (a.wins));
        let result = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`
        let player1Index;
        let player1;
        for (let i = 0; i < this.listOfParticipants.length; i++) {
            let playerName = this.listOfParticipants[i].name;
            let playerCondition = this.listOfParticipants[i].condition;
            let playerPower = this.listOfParticipants[i].power;
            let playerWins = this.listOfParticipants[i].wins;
            result += `${playerName} - ${playerCondition} - ${playerPower} - ${playerWins}`
            if (i != this.listOfParticipants.length - 1) {
                result += '\n';
            }
        }
        return result

    }
}



// Unexpected error: expected 'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nSara Dickinson - child - 120 - 1\nPetar Petarson - child - 100 - 0\n' 
//                   to equal 'Jane Austen will take 2 participants on camping to Pancharevo Sofia 1137, Bulgaria\nSara Dickinson - child - 120 - 1\nPetar Petarson - child - 100 - 0'