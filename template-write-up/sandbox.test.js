'use strict';

/*

*/


/*
for (const solution of []) {
  describe(`${solution.name}: ___`, () => {
    describe('_', () => {
      it('_', () => {
        expect(solution(_)).toEqual(_);
      });
    });
  });
}
*/
function addUp(num) {
	
  let sum = 0;
  
    for(let i = 1 ; i <= num ; i++){
       sum += i ;
    }
    return sum ;
  }

describe('Take a number and add all numbers starting from 1 to this number', () => {
  it('should return 10 when 4 is passed', () => {
    expect(addUp(4)).toEqual(10);
  });
  it('should return 91 when 13 is passed', () => {
    expect(addUp(13)).toEqual(91);
  });
  it('should return 1 when 1 is passed', () => {
    expect(addUpp(1)).toEqual(1);
  });
});