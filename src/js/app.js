/* eslint-disable no-console */
import canIterate from './canIterateFunc';

const obj = {
  a: 1, b: 2, c: 3, d: 4,
};
const array = [1, 2, 3, 4];
const string = 'String';

console.log(`Итерируемся по ${typeof obj}, результат: ${canIterate(obj)}`);
console.log(`Итерируемся по array, результат: ${canIterate(array)}`);
console.log(`Итерируемся по ${typeof string}, результат: ${canIterate(string)}`);
