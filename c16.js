class Tyre {
    constructor(brand, size) {
        this.brand = brand
        this.size = size
    }
    brand() {
        console.log('Agya')
    }
}

class Car extends Tyre {
    constructor(brand, size, varian, sn, door, seat, warranty, year) {
        super(brand, size)
        this.varian = varian; this.sn = sn; this.door = door
        this.seat = seat; this.warranty = warranty; this. year = year
    }

}

class Agya extends Car {}

class Rush extends Car {}

class CarFactory{
    constructor() {
        this.cars = []
    }

    produce(year) {
        for (let i = 0; i < 5; i++) {
            this.cars.push(new Agya('dunlop', 15, 'Agya', CarFactory.serialNumber(), 5, 5, 1, year))
        }
        for (let i = 0; i < 5; i++) {
            this.cars.push(new Rush('Bridgestone', 17, 'Rush', CarFactory.serialNumber(), 5, 5, 3, year))
        }
        return this.cars;
    }

    result() {
        console.log('hasil produksi :')
        let count = 1
        for (let car of this.cars) {
            console.log(`
    no. ${count}
    varian      : ${car.varian}
    sn          : ${car.sn}
    door        : ${car.door}
    seat        : ${car.seat} seater
    tyre        : ${car.brand} ${car.size} inch
    year        : ${car.year}
    warranty    : ${car.warranty} year
            `
            )
            count++
        }
    };

    guaranteeSimulation(simulationYear) {
        console.log('hasil simulasi garansi semua mobil pada tahun 2025 :')
        let count = 1
        for (let car of this.cars) {
            console.log(`
    no. ${count}
    varian      : ${car.varian}
    sn          : ${car.sn}
    door        : ${car.door}
    seat        : ${car.seat} seater
    tyre        : ${car.brand} ${car.size} inch
    year        : ${car.year}
    warranty    : ${car.warranty} year
            `)
            if (car.year + car.warranty >= simulationYear) console.log(`status on ${simulationYear} this guarantee status is active`)
            else console.log(`status on ${simulationYear} this guarantee status is expired`);
            count++
        }
    };

    static serialNumber() {
        var d = new Date().getTime();
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;
        if(d > 0){
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    };
}

const toyota = new CarFactory
toyota.produce(2020)
toyota.produce(2022)
toyota.result()
toyota.guaranteeSimulation(2025)
