//Problem 2
const getOperator = express => {
    express.split('')
    return express.charAt((1))
}


const evaluate = operator => {
    switch(getOperator(operator)) {
        case '+':
            return (left, right) => left + right;

        case '-':
            return (left, right) => left - right;

        case '*':
            return (left, right) => left * right;

        case '/':
            return (left, right) => left / right;
    }
}

module.exports = {getOperator,evaluate}
