const { Triangle } = require('./shapes');

test('Triangle render method should generate correct SVG content', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toEqual('<polygon points="100,18 194,182 -4,182" style="fill:blue;" />');
});
