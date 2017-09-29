
import App from 'app';

// for babel-node testing
console.log(App.authentication.constructor === ({}).constructor);
if (!global.test) global.test = () => ({});

test('should be the same constructor', () => {
  expect(App.authentication.constructor).toEqual(({}).constructor);
});
