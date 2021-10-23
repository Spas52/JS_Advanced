const { expect } = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe(`testing calculator functionality`, () => {
    it(`if passing parameters are not string`, () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });

    it(`string with even length`, () => {
        expect(isOddOrEven('dodo')).to.equal('even');
    });

    it(`string with odd length`, () => {
        expect(isOddOrEven('lik')).to.equal('odd');
    });
});