class BMW{

    constructor(engineCapacity, fuel, color, model, mileage) {
        this._engineCapacity = engineCapacity;
        this._fuel = fuel;
        this._color = color;
        this._model = model;
        this._mileage = mileage;
    }

    get engineCapacity() {
        return this._engineCapacity;
    }

    set engineCapacity(value) {
        this._engineCapacity = value;
    }

    get fuel() {
        return this._fuel;
    }

    set fuel(value) {
        this._fuel = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get model() {
        return this._model;
    }

    set model(value) {
        this._model = value;
    }

    get mileage() {
        return this._mileage;
    }

    set mileage(value) {
        this._mileage = value;
    }

    specification(){
        let carSpec = `Color : ${this.color} 
                       Model : ${this.model}
                       Mileage :${this.mileage}
                       Fuel : ${this.fuel}
                       Engine Capacity : ${this.engineCapacity}`;
        return carSpec;
    }
}

let car1 = new BMW('4000CC','Diesel','White','BMW','10kmpl');
let carSpec = car1.specification();
console.log(carSpec);