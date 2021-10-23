const { expect } = require('chai');
const sum = require('./sumNumbers');

describe('sum numbers', () => {
    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
});