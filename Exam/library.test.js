let { expect } = require('chai');
const { library } = require('./library.js')

describe('test library', () => {
    describe('calcPriceOfBook', ()=> {
        it('if not a number > error', ()=> {  // tuka moje da ima neshto gotoo
            expect(() => library.calcPriceOfBook(69,'monster')).to.throw();
            expect(() => library.calcPriceOfBook('69',3.14)).to.throw();
            expect(() => library.calcPriceOfBook('69',true)).to.throw();
            expect(() => library.calcPriceOfBook(undefined, undefined)).to.throw();
            expect(() => library.calcPriceOfBook('monster', 'monster')).to.throw();
            expect(() => library.calcPriceOfBook(69, 69)).to.throw();
        });
        it('if year <= 1980', ()=> { // gotoo
            expect(library.calcPriceOfBook('monster', 69)).to.equal('Price of monster is 10.00');
            expect(library.calcPriceOfBook('monster', 1980)).to.equal('Price of monster is 10.00');
        });
        it('if all true, return', () =>{ // gotoo
            expect(library.calcPriceOfBook('monster', 1981)).to.equal('Price of monster is 20.00');
        });
    })
    describe('findBook', () => {  // na vtoro it ne sam sig
        it('throw Error', () => { // gotoo
            expect(() => library.findBook([], 'monster')).to.throw();
            expect(() => library.findBook('monster', 'energy')).to.throw();
        });
        it('if present return wanted book', () => {  // gotoo
            expect(library.findBook(['monster', 'energy'], 'monster')).to.equal("We found the book you want.");
        });
        it('otherwise the function return', () => {  //gotoo
            expect(library.findBook(['monster', 'monster'], 'ken')).to.equal("The book you are looking for is not here!");
        });
    })
    describe('arrangeTheBooks', () => {  // napravi 4 v 1 it 
        it('if invalid > error', () => { // neshto propuskai tuka mai
            expect(() => library.arrangeTheBooks('69')).to.throw();
            expect(() => library.arrangeTheBooks(-69)).to.throw();
            expect(() => library.arrangeTheBooks(69.1)).to.throw();
        });
        it('if all the books are arranged on the shelves', () => {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });
        it('otherwise if no space has been reached', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    })
})