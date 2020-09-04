const { getName } = require('./getName.js');
describe('function gets name from object', () => {
  it('finds name value in object', () => {
    const car = {
      make: 'Mazda',
      model: '3',
      year: 2012,
      name: 'slow car'

    };
    
    const name = getName(car);
    
    expect(name).toEqual('slow car');
  });
});
