const { expect } = require('chai');
const isSymmetric = require('./symmetry');

describe('Symmetry Checker', () => {

    it('argument is array', () => {
        expect(isSymmetric([1, 1])).to.true
    });

    it('false for inncorect type', () => {
        expect(isSymmetric(1)).to.false
    });

    it('true if the array is symmetric', () => {
        expect(isSymmetric([1, 1])).to.true
    });
    
    it('false if the array is symmetric', () => {
        expect(isSymmetric([1, 1, 2])).to.false
        expect(isSymmetric([1, 1, '1'])).to.false
    });
})