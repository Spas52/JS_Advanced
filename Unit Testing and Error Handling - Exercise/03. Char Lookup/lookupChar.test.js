const { expect } = require('chai');
const lookupChar = require('./lookupChar');

describe('Retrieving a character', () => {

    it('checking arguments', () => {
        expect(lookupChar(undefined, 1)).to.equal(undefined);
        expect(lookupChar(1, 1)).to.equal(undefined);
        expect(lookupChar('Rebeca', 1.121)).to.equal(undefined);
    });

    it('both params ara correct but index is out', () => {
        expect(lookupChar('Reb', 4)).to.equal('Incorrect index');
        expect(lookupChar('Reb', -1)).to.equal('Incorrect index');
        expect(lookupChar('Reb', 3)).to.equal('Incorrect index');
    })

    it('operation complete', () => {
        expect(lookupChar('Reb', 1)).to.equal('e');
    })
})