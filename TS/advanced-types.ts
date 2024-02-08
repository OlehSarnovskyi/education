interface Fish {
  swim();
}
interface Bird {
  fly();
}

let pet = {} as Fish;

// You can use the 'in' operator to check
if ('swim' in pet) {
  pet.swim();
}


function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}


// typeof
// instanceof


// type aliases
type Second = number;
type ID = string;

type Tree<T> = {
  value: T;
  left?: Tree<T>;
  right?: Tree<T>;
};

type LinkedList<Type> = Type & { next: LinkedList<Type> };



// mapped types

// all optional
type Partial2<T> = {
  [P in keyof T]?: T[P];
};
// all readonly
type Readonly2<T> = {
  readonly [P in keyof T]: T[P];
};

type Nullable<T> = { [P in keyof T]: T[P] | null };



// conditional types
declare function f<T extends boolean>(x: T): T extends true ? string : number;
// Type is 'string | number'
let x = f(Math.random() < 0.5);

