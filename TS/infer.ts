type Example1<T> = T extends string ? string : number;
let ex1: Example1<boolean> = 1;




interface User {
  id: string;
}
interface Message {
  id: number;
}
function getId<T extends { id: any }>(obj: T): T extends { id: string } ? string : number {
  return obj.id;
}
const r1 = getId({} as User);








interface Example2 {
  bb: string;
}
type GenericExample<T> = T extends Examplep ? 'foo' : 'bb';
let gs: GenericExample<string> = 'foo';


type NotFalsy<T = null> = T extends (null | undefined | false | 0) ? never : T;
let a: NotFalsy<number>;
let b: NotFalsy;
a = 1;
b = 0;



type TryInfer<T extends object = object> = T extends infer R ? R[keyof R]: never;
type R = TryInfer<{ a: string, b: number }>;
















function testF() {
  return 'abrakadabra';
}

type TryInfer2<T extends () => any> = T extends () => infer R ? R: never;
type R2 = ReturnType<typeof testF>;
let zxc: R2 = '';

type R3 = TryInfer2<typeof testF>;
let r3: R3 = 'ssss';



type GetFirstArgumentOfAnyFunction<T> = T extends (
    first: infer FirstArgument,
    ...args: any[]
  ) => any
  ? FirstArgument
  : never;

type t1 = GetFirstArgumentOfAnyFunction<(name: string) => void>;




type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T;

type t2 = PromiseReturnType<Promise<string>>;




type ArrayType<T> = T extends (infer Item)[] ? Item : T;

type t = ArrayType<[string, number]>;
