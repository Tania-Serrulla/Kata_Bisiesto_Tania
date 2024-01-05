const funsion = require('./FizzBuzz');

test('Devuelve false para el año 1997', () => {
  expect(funsion(1997)).toEqual(false);
});

test('Devuelve true para el año 1996', () => {
  expect(funsion(1996)).toEqual(true);
});

test('Devuelve true para el año 1600', () => {
  expect(funsion(1600)).toEqual(true);
});

test('Devuelve false para el año 1800', () => {
  expect(funsion(1800)).toEqual(false);
});
/*
test('Devuelve "Buzz" para el numero 5', () => {
  expect(fizzbuzz(5)).toEqual('Buzz');
});

test('Devuelve "Buzz" para el numero 10', () => {
  expect(fizzbuzz(10)).toEqual('Buzz');
});

test('Devuelve "FizzBuzz" para el numero 15', () => {
  expect(fizzbuzz(15)).toEqual('FizzBuzz');
});

test('Devuelve "FizzBuzz" para el numero 30', () => {
  expect(fizzbuzz(30)).toEqual('FizzBuzz');
});


//npm run test + enter para ejecutar en terminal*/