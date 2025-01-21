/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

describe('Basic Types', () => {
  it('Implicit Types', () => {
    const num1 = 12;
    const num2 = 10;
    const answer = num1 + num2;

    let age: string | number;
    age = 'older';
    age = 'older even';

    let friends: string[];

    friends = ['Bob', 'Sally', 'Steve'];

    let luckyNumbers = getLuckyNumbers();

    expect(age).toBeDefined();

    expect(answer).toBe(22);
  });
});

function getLuckyNumbers() {
  return [1, 8, 20, 108];
}
