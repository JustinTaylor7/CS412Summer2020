//Example 1: Biggest int in an array
//const biggie = items => Math.max(...items);
//console.log(`Biggest int is: ${biggie([4,8,1,4,3,9,2])}`)

//Problem 1:
const alpha = inputstring => inputstring.replace(/[^a-zA-Z]/g, '').split('').sort().join('');

module.exports = {alpha}