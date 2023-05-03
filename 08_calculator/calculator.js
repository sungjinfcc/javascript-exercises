const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let result = 0;
  for(const item of array){
    result += item;
  }
  return result;
};

const multiply = function(array) {
  let result = 1;
  for(const item of array){
    result *= item;
  }
  return result;
};

const power = function(a, b) {
  let result = 1;
	for(let i = 1; i<=b; i++){
    result *= a;
  }
  return result;
};

const factorial = function(a) {
  if(a == 0){
    return 1;
  }
	let result = 1;
  for(let i = a; i>=1; i--){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
