class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.solutionCandidate = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.solutionCandidate = Math.round((this.min + this.max) / 2);
    }

    lower() {
        this.max = this.solutionCandidate;
    }
    
    greater() {
        this.min = this.solutionCandidate;
    }
}

module.exports = GuessingGame;
