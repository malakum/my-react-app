const cal_num = require('../cal_num')

    

describe('cal_num', () => {
  test('returns a single passed number', () => {
    const actual = cal_num(1);
    const expected = 1;
   // console.log(actual);
    expect(actual).toBe(expected);
  });
});