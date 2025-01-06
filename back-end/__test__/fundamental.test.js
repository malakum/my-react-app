const { copyArrayAndDoStuff , processUsers }  = require('../fundamental');

describe('copyArrayAndDoStuff', () => {
test('instruction return values are pushed to the new array', () => {
    // arrange
    const nums = [1, 2, 3];
    const doubleNum = (num) => num * 2;
    // act
    const actual = copyArrayAndDoStuff(nums, doubleNum);
    // assert
    const expected = [2, 4, 6];
    expect(actual).toEqual(expected);
  });
});

describe('processUsers', () => {
test('invokes the passed function once for each hacker', () => {
    // arrange
    const users = [
      { name: 'Mr. Robot', isHacker: true },
      { name: 'Legit user', isHacker: false },
    ];
    let hackerCount = 0;
    const countHackers = () => {
      hackerCount++;
    };
    // act
    processUsers(users, countHackers);
    // assert
    expect(hackerCount).toBe(1);
  });
  test('the passed function is invoked with the hacker', () => {
    // arrange
    const users = [
      { name: 'Mr. Robot', isHacker: true },
      { name: 'Legit user', isHacker: false },
    ];
    let hackers = [];
    const collectHackers = (hacker) => {
      hackers.push(hacker);
    };
    // act
    processUsers(users, collectHackers);
    // assert
    expect(hackers).toEqual([{ name: 'Mr. Robot', isHacker: true }]);
  });
  test('the passed function and jest function is invoked with the hacker', () => {
  const myFunc = jest.fn();

// myFunc('hello');
// myFunc('goodbye');

// // nested arrays containing the arguments passed to the mock on each call
// console.log(myFunc.mock.calls); // --> [['hello], ['goodbye']]

const doubleNumMock = jest.fn((num) => num * 2);

//console.log(doubleNumMock(5)); // -> 10

const sendAlertMock = jest.fn();
const users = [{ name: 'Mr. Hacker', isHacker: true }] // array of users, one of which is a 'hacker'
processUsers(users, sendAlertMock);

expect(sendAlertMock).toHaveBeenCalledTimes(1);
expect(sendAlertMock).toHaveBeenCalledWith({ name: 'Mr. Hacker', isHacker: true })
  });

  test('should log hello to the console', function () {
    const consoleSpy = jest.spyOn(console, 'log');
  
    console.log('hello');
  
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('hello');
  
    consoleSpy.mockRestore();
  });
  

});

describe('spying on console log', () => {
  let consoleSpy = null; // initialise variable to be accessible from all tests - its value will be reset between tests

  beforeEach(function () {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(function () {
    consoleSpy.mockRestore();
  });

  it('console log has been called once', () => {
   console.log('hello');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('hello');
  });

  it('console log has not been called', () => {
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});

  