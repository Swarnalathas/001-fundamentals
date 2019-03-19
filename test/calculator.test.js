const calculator = require('../app/calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 4 - 2 to equal 2', () => {
  expect(calculator.Subtract(4, 2)).toBe(2);
});


test('multifly 4 * 2 to equal 8', () => {
  expect(calculator.Multiply(4, 2)).toBe(8);
});

test ('IsOdd funtion if Result is odd return true', () => {
  expect(calculator.isOdd(5)).toBe(true);
});

test ('IsEven funtion if Result is Even return true', () => {
  expect(calculator.isEven(6)).toBe(true);
});

test ('divisibleBy check the numbers ', () => {
  expect(calculator.divisibleBy(10,5)).toBe(true);
});

test('Square of the given number',()  => {
 expect(calculator.squareOf(10)).toBe(100);
});



describe('my beverage', () => {
  test('is delicious', () => {
    expect(calculator.myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(calculator.myBeverage.sour).toBeFalsy();
  });
});