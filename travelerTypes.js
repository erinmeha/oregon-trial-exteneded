class Doctor extends Traveler {
    constructor(name) {
        super(name)
    }
    heal(traveler) {
        traveler.isHealthy = true
    }
}
class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }
    hunt() {
        this.food += 5
    }
    eat() {
        if (this.food <= 1) {
            this.isHealthy = false
            return this.food -= this.food

        }
        this.food -= 2
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }
}