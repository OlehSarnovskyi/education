export abstract class Animal {
  abstract say(): void;
}
// Also, we can use implements
export class Cat extends Animal {
  say() {
    console.log('meow');
  }
}

export class Dog extends Animal {
  say() {
    console.log('wouf');
  }
}

const pets = [new Cat(), new Dog()];

function sayAnimals(animals: Animal[]) {
  // no need to know what say() does. need to know that "cat | dog" extends from "Animal"
  animals.forEach(animal => animal.say());
}

// sayAnimals(zooAnimals);

// TODO: play with access modifiers (protected)
