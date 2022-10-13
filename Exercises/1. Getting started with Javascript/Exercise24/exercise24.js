let obj = 'Something';

console.log(obj != 'something');   //true
console.log(obj.toLowerCase() != 'something');   //false

let num = 1;
console.log(num === '1');   //false
console.log(num == 1)    //true
console.log(num > '0');
console.log(num == 1 && obj == 'something');
console.log(num == 1 || obj != 'something');

let arr = [4, 2, 7, 8, 23, 54];
console.log(10 in arr);
console.log(arr.includes(10));
console.log(!arr.includes(10));