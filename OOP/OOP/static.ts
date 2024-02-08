export class Counter {
  static count = 0;

  static invoke(): void {
    this.count++;
  }
}

Counter.invoke();
Counter.invoke();
Counter.invoke();
// console.log('Counter.count = 3', Counter.count);
