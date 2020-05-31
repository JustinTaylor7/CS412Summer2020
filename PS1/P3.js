//Problem 3
const applyFunction = (s, f) => f(s);
const lam1 = s => s.split(/(?=c)/g);
const lam2 = s => {
    let newVal = s.replace(/a/g,`A`);
    let numReplaced = newVal.match(/A/g).length;
    return {
        originalString: s,
        modifiedString: newVal,
        numberReplaced: numReplaced,
        length : newVal.length,
    }
}

module.exports = {applyFunction,lam1,lam2}