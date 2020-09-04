const { copyAndPush } = require('./copyAndPush.js');
describe('copy and push function', () => {
  it('creates new array and adds item pushed item', () => {
    const array = [
      1, 2, 3, 4, 5
    ];
    const pushedArray = copyAndPush(array, 6);
    expect(array).toEqual([1, 2, 3, 4, 5]);
    expect(pushedArray).toEqual([1, 2, 3, 4, 5, 6]);
  });
});


