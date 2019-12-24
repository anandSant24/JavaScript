//Given an array this will filter the values and removes the duplicates
const input = [2, 3, 4, 1, 2, 3, 4, 5, 7, 8, 9, 1, 6, 7, 8];

const dup = (value, index, arr) => {
  return arr.indexOf(value) === index;
};

let output = input.filter(dup);
console.log(output);
