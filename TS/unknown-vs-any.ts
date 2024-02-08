let any1: any = '';
any1.asd();
any1.zxc = 'dd';
let newClass1 = new any1();
let num1: number = any1;


let unknown1: unknown = '';
unknown1.asd();
unknown1.zxc = 'dd';
let newClass2 = new unknown1();
let num2: number = unknown1;

if (typeof unknown1 === 'number') {
  num2 = unknown1;
}

