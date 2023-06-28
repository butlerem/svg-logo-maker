const fs = require('fs');
const { prompt } = require('./lib/userInput');
const { Circle, Square, Triangle } = require('./lib/shapes');

async function run() {
  const shapeType = await prompt('Enter the shape type (circle, square, triangle): ');

  let shape;
  switch (shapeType.toLowerCase()) {
    case 'circle':
      shape = new Circle();
      break;
    case 'square':
      shape = new Square();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    default:
      console.log('Invalid shape type!');
      return;
  }

  const color = await prompt('Enter the color: ');
  shape.setColor(color);

  const dimensions = await prompt('Enter the dimensions: ');
  shape.setDimensions(dimensions);

  const svgContent = shape.render();
  const svgData = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${svgContent}</svg>`;

  fs.writeFile('logo.svg', svgData, (err) => {
    if (err) {
      console.error('Error creating logo.svg:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

run();

  