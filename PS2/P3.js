//function that returns cube value of input in fat arrow notation
const cubeValue = x => { return x**3; }

//calling the cubeValue function on each value in the array [1,2,3,4,5,6,7] using map
console.log(`${[1,2,3,4,5,6,7].map(cubeValue)}`);
