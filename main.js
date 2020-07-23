class Traveler {
    constructor(name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }
    hunt() {
        this.food += 2
    }
    eat() {
        if (this.food <= 0) {
            return this.isHealthy = false
        }
        this.food -= 1
    }
}

class Wagon {
    constructor(capacity) {
        this.capacity = capacity
        this.passengers = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengers.length
    }
    join(traveler) {
        if (this.getAvailableSeatCount() >= 1) {
            this.passengers.push(traveler)
        }
    }
    shouldQuarantine() {
        const sickly = this.passengers.some(passenger => passenger.isHealthy === false)
        return sickly // Help from Zachary to get test #8 to pass
    }
    totalFood() {
        let total = 0
        for (let index = 0; index < this.passengers.length; index += 1) {
            total += this.passengers[index].food
        }
        return total
    }
}