# [Add up the Numbers from a Single Number]([link-to-challenge](https://edabit.com/challenge/4gzDuDkompAqujpRi))

<!--
  describe the function's behavior in your own words.
  explain why someone might want to use this function
-->
 We create a function that takes a number as an argument, then we add up all the numbers from 1 up to this number passed to the function.
## Syntax

> addUp(`number`) -> `number`

### Parameters

**num**: `number`

<!--
  describe the parameter
-->
Any positive number that passed to the function.  
### Return Value: `number`

<!--
  describe the return value
-->
The sum of all numbers start from 1 up to the number passed. 
## Test Cases

<!--
  copy in the test cases from the original challenge

  if you write your own test cases in a sandbox file, include those too
-->
```js
// directly from edabit
Test.assertEquals(addUp(4), 10)
Test.assertEquals(addUp(13), 91)
Test.assertEquals(addUp(600), 180300)
Test.assertEquals(addUp(392), 77028)
Test.assertEquals(addUp(53), 1431)
Test.assertEquals(addUp(897), 402753)
Test.assertEquals(addUp(23), 276)
Test.assertEquals(addUp(1000), 500500)
Test.assertEquals(addUp(738), 272691)
Test.assertEquals(addUp(100), 5050)
Test.assertEquals(addUp(925), 428275)
Test.assertEquals(addUp(1), 1)
Test.assertEquals(addUp(999), 499500)
Test.assertEquals(addUp(175), 15400)
Test.assertEquals(addUp(111), 6216)



// refactored to use describe/it/expect (what you will be learning at HYF)
describe('Take a number and add all numbers starting from 1 up to this number', () => {
  it('should return 10 when 4 is passed', () => {
    expect(addUp(4)).toEqual(10);
  });
  it('should return 91 when 13 is passed', () => {
    expect(addUp(13)).toEqual(91);
  });
  it('should return 180300 when 600 is passed', () => {
    expect(addUpp(600)).toEqual(180300);
  });
  it('should return 77028 when 392 is passed', () => {
    expect(addUpp(392)).toEqual(77028);
  });
  it('should return 1431 when 53 is passed', () => {
    expect(addUpp(53)).toEqual(1431);
  });
   it('should return 402753 when 897 is passed', () => {
    expect(addUpp(897)).toEqual(402753);
  });
  it('should return 279 when 23 is passed', () => {
    expect(addUpp(23)).toEqual(276);
  });
  it('should return 500500 when 1000 is passed', () => {
    expect(addUpp(1000)).toEqual(500500);
  });
   it('should return 272691 when 738 is passed', () => {
    expect(addUpp(738)).toEqual(272691);
  });
  it('should return 5050 when 100 is passed', () => {
    expect(addUpp(100)).toEqual(5050);
  });
  it('should return 428275 when 925 is passed', () => {
    expect(addUpp(925)).toEqual(428275);
  });
  it('should return 1 when 1 is passed', () => {
    expect(addUpp(1)).toEqual(1);
  });
  it('should return 499500 when 999 is passed', () => {
    expect(addUpp(999)).toEqual(499500);
  });
  it('should return 15400 when 175 is passed', () => {
    expect(addUpp(175)).toEqual(15400);
  });
  it('should return 6216 when 111 is passed', () => {
    expect(addUpp(111)).toEqual(6216);
  });
});
```


## Use Cases

<!--
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->
 Trying to use negative number 
```js
const num = -4;
const addedUpNum = addUP(num);
console.log(addedUpNum); // 
```
Assume num = 1
```js
const num = 1;
const addedUpNum = addUp(num);
console.log(addedUpNum);

```
## Solution
```js
function addUp(num) {
	
let sum = 0;

  for(let i = 1 ; i <= num ; i++){
     sum += i ;
	}
	return sum ;
}
```
## Retrospective

<!--
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->

### Continue Doing

### Start Doing

### Stop Doing
