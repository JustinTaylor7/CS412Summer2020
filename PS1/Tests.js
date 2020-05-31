const { alpha } = require('./P1');
const { getOperator, evaluate } = require('./P2');
const { applyFunction, lam1, lam2 } = require('./P3');
const { expect } = require('chai');


describe(`P1 Tests`, () => {
    it(`should return 'aaacccdeefgiiiiiiillloopprrssstuux' when 'supercalifragilisticexpialidocious' is passed as a param`, function () {
        let res = alpha(`supercalifragilisticexpialidocious`);
        expect(res).to.be.equal(`aaacccdeefgiiiiiiillloopprrssstuux`);
    })
    it(`should return 'abc' when 'bca123' is passed as a param`, function () {
        let res = alpha(`bca123`);
        expect(res).to.be.equal(`abc`);
    })
    it(`should return 'abcdef' when 'f!2,ba*c&ed!' is passed as a param`, function () {
        let res = alpha(`f!2,ba*c&ed!`);
        expect(res).to.be.equal(`abcdef`);
    })
});

describe(`P2 Tests`, () => {
    it(`should return 6 when '4+2' is passed as a param`, function () {
        let expression = '4+2'
        let res = evaluate(expression)(parseInt(expression.charAt((0))), parseInt(expression.charAt(2)))
        expect(res).to.be.equal(6);
    })
    it(`should return 35 when '5*7' is passed as a param`, function () {
        let expression = '5*7'
        let res = evaluate(expression)(parseInt(expression.charAt((0))), parseInt(expression.charAt(2)))
        expect(res).to.be.equal(35);
    })
    it(`should return 5 when '6-1' is passed as a param`, function () {
        let expression = '6-1'
        let res = evaluate(expression)(parseInt(expression.charAt((0))), parseInt(expression.charAt(2)))
        expect(res).to.be.equal(5);
    })
    it(`should return 4.5 when '9/2' is passed as a param`, function () {
        let expression = '9/2'
        let res = evaluate(expression)(parseInt(expression.charAt((0))), parseInt(expression.charAt(2)))
        expect(res).to.be.equal(4.5);
    })
})
describe(`P3 Tests`, () => {
    it(`should return ['super', 'califragilisti', 'cexpialido', 'cious'] when 'supercalifragilisticexpialidocious' is passed as a param`, function () {
        let arr = `["super","califragilisti","cexpialido","cious"]`;
        let res = JSON.stringify(applyFunction(`supercalifragilisticexpialidocious`, lam1));
        expect(res).to.be.equal(arr);
    })
    it(`should return ['capri', 'cornissuper', 'cool'] when 'capricornissupercool' is passed as a param`, function () {
        let arr = `["capri","cornissuper","cool"]`;
        let res = JSON.stringify(applyFunction('capricornissupercool', lam1));
        expect(res).to.be.equal(arr);
    })
    it(`should return {originalString: capricornissupercool, modifiedString: cApricornissupercool, numberReplaced: 1, length: 20} when 'capricornissupercool' is passed as a param`, function () {
        let arr = `{"originalString":"capricornissupercool","modifiedString":"cApricornissupercool","numberReplaced":1,"length":20}`;
        let res = JSON.stringify(applyFunction('capricornissupercool', lam2));
        expect(res).to.be.equal(arr);
    })
    it(`should return {originalString: supercalifragilisticexpialidocious, modifiedString: supercAlifrAgilisticexpiAlidocious, numberReplaced: 3, length: 34} when 'supercalifragilisticexpialidocious' is passed as a param`, function () {
        let arr = `{"originalString":"supercalifragilisticexpialidocious","modifiedString":"supercAlifrAgilisticexpiAlidocious","numberReplaced":3,"length":34}`;
        let res = JSON.stringify(applyFunction('supercalifragilisticexpialidocious', lam2));
        expect(res).to.be.equal(arr);
    })
})


