const { capitalizeAndFilter } = require('./capitalizeAndFilter.js');
describe('capitalize and filter strings', () => {
  it('should iterate through array capitalize and filter all strings that start with f', () => {
    const array = [
      'hello',
      'world',
      'far',
      'near',
      'field'
    ];
    const processedArray = capitalizeAndFilter(array);
    console.log(processedArray);
    expect(processedArray).toEqual(['HELLO', 'WORLD', 'NEAR']);
  });
});
