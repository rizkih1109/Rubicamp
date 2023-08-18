export const PI = 22 / 7

export default class Calculator {
    constructor(x) {
        this.x = x || 1
    }

    add(value) {
        this.x += value
        return this
    }

    substract(value) {
        this.x -= value
        return this
    }

    divide(value) {
        this.x /= value
        return this
    }

    multiply(value) {
        this.x *= value
        return this
    }

    square() {
        this.x = Math.pow(this.x, 2)
        return this
    }

    exponent(value) {
        this.x = Math.pow(this.x, value)
        return this
    }

    squareRoot() {
        this.x = Math.sqrt(this.x)
        return this
    }

    result() {
        console.log(this.x)
        return this
    }
}


const calc = new Calculator()

calc.add(10).substract(5).result()
calc.add(3).multiply(4).divide(6).result()
calc.x = 7
console.log(`nilai sekarang: ${calc.x}`)
calc.multiply(2).multiply(PI).result()
calc.x = 7
calc.square().multiply(PI).result()
calc.x = 4
calc.exponent(3).result()
calc.squareRoot().result()