import {AssertionError} from 'assert';

function yell(str) {
  assert(typeof str === 'string');
  return str.toUpperCase();
}
yell(123);

function assert(condition: any, message?: string): asserts condition {
  if (!condition) {
    throw new AssertionError({message});
  }
}




function isString(val: any): val is string {
  return typeof val === 'string';
}
function yell2(str: any) {
  if (isString(str)) {
    return str.toUpperCase();
  }
  throw new Error('Oops!');
}




function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    throw new AssertionError({
      message: `Expected 'val' to be defined, but received ${val}`
    });
  }
}
