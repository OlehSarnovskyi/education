class Passanger {
  constructor(
    public name: string
  ) {}
}

class Car2 {
  passangers: Passanger[] = [];

  addPassanger(name: string): void {
    this.passangers = [...this.passangers, new Passanger(name)];
  }
}
