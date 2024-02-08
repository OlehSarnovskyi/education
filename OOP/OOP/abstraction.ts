class Person {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected address: string
  ) {
  }

  public display(): void {
    console.log(this.firstName + ' ' + this.lastName);
    console.log('Address: ' + this.address);
  }
}

class Customer extends Person {
  constructor(
    firstName,
    lastName,
    address,
    private bankAccountNumber: string
  ) {
    super(firstName, lastName, address);
  }

  display(): void {
    super.display();
    console.log('Bank account number: ' + this.bankAccountNumber);
  }
}

class Employee extends Person {
  constructor(
    firstName,
    lastName,
    address,
    private salary: number
  ) {
    super(firstName, lastName, address);
  }

  display(): void {
    super.display();
    console.log('Salary: ' + this.salary);
  }
}





abstract class AbstractPhone {
  constructor(
    public year: number
  ) {}

  public abstract call(outputNumber: number): void;
  public abstract ring(inputNumber: number): void;
}

class SmartPhone extends AbstractPhone {

  call(outputNumber: number) {
    console.log('...waiting for');
  }

  ring(inputNumber: number) {
    console.log('la la la');
  }

  makePhoto(): void {
    // ...
  }
}
