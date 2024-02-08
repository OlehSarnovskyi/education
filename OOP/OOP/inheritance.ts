class Car {
  constructor(
    public model: string,
    public maxSpeed: number,
    public yearOfManufacture: number
  ) {}

  public gas(): void {
    // ...gas
  }

  public brake(): void {
    // ...brake
  }
}


class Truck extends Car {
  constructor(
    public model: string,
    public maxSpeed: number,
    public yearOfManufacture: number
  ) {
    super(model, maxSpeed, yearOfManufacture);
  }
}

class Sedan extends Car {
  constructor(
    public model: string,
    public maxSpeed: number,
    public yearOfManufacture: number
  ) {
    super(model, maxSpeed, yearOfManufacture);
  }
}

const newTruck = new Truck('10x', 200, 2022);
const newSedan = new Sedan('i11', 280, 2022);

class F1Car extends Car {
  constructor(
    public model: string,
    public maxSpeed: number,
    public yearOfManufacture: number
  ) {
    super(model, maxSpeed, yearOfManufacture);
  }

  gas() {
    super.gas();
    // ...something else
  }

  public pitStop(): void {
    // ...pitStop only for f1 cars
  }
}
