import Validator from '../app';

test.each([
  ['J', true],
  ['J.Legis', true],
  ['123456', false],
  ['Kes_Pes', true],
  ['Kes-Pes', true],
])('regexp', (obj, expected) => {
  const result = new Validator(obj).validateUsername();
  expect(result).toBe(expected);
});
