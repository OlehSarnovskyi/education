class Auto {

  // implementation hiding
  public gas(): void {
    // this.checkSomething();
    // this.calcSomething();
    // this.prepareEngine();
    // this.etc();
  }

  public brake(): void  {
    // this.checkSomething();
    // this.calcSomething();
    // this.prepareEngine();
    // this.etc();
  }
}



class BankAccount {
  get minimumBalance(): number {
    return this._minimumBalance;
  }

  set minimumBalance(value: number) {
    this._minimumBalance = value;
  }

  private _minimumBalance: number;

  private _balance: number;

  deposit(amount: number): number {
    this._balance += amount;
    return this._balance;
  }

  withdraw(amount: number): number {
    if (amount <= this._minimumBalance) {
      this._balance = this._balance - amount;
      return this._balance;
    }
  }
}
