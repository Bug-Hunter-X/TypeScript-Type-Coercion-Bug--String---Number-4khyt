function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

//Or using type guards
function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function add2(a: any, b: any): number {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Inputs must be numbers');
  }
  return a + b;
}

let result = add(1, 2); //Correct
let result2 = add2(1,2); //Correct
//let result3 = add("1", 2); // Throws an error at runtime