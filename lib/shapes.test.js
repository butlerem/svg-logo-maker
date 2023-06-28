const { Triangle, Circle, Square } = require('../lib/shapes');
const { expect } = require('expect');

test('Triangle renders correct SVG code', () => {
  const shape = new Triangle();
  shape.setColor('#ffc0cb');
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#ffc0cb" />');
});

test('Circle renders correct SVG code', () => {
  const shape = new Circle();
  shape.setColor('#c6e2ff');
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="#c6e2ff" />');
});

test('Square renders correct SVG code', () => {
  const shape = new Square();
  shape.setColor('#b4eeb4');
  expect(shape.render()).toEqual('<rect x="75" y="75" width="150" height="150" fill="#b4eeb4" />');
});
