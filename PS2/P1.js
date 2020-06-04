//example 1
//const biggie = items => Math.max(...items);
//console.log(`Biggest int is: ${biggie([4,8,1,4,3,9,2])}`)

//returns Fibonacci sequence starting from 0
function* fibs (x = 1) {
    let [val1, val2, result] = [x, x-1, 0];
    yield result;
    while (true) {
        result = val1 + val2;
        [val1, val2] = [val2, result]
        yield result;
    }
}

//checks each value of the Fibonacci sequence and returns the value if it is even
function* evenFibs() {
    let myFibs = fibs();
    while (true) {
        let nextNum = myFibs.next().value;
        if ((nextNum % 2) == 0) {
            yield nextNum
        } else continue;
    }
}

//printing out first 6 even Fibonacci numbers
let eFibs = evenFibs()
let count = 6;
while (count --> 0) {
    console.log(`Next even fib: ${eFibs.next().value}`)
}