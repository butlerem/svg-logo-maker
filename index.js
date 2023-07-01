const fs = require('fs');
const { prompt } = require('./lib/userInput');
const { Triangle, Circle, Square } = require('./lib/shapes');

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

  const shapeColor = await prompt('Enter the color of the shape: ');
  shape.setColor(shapeColor);

  const text = await prompt('Enter up to 3 letters of text inside the shape: ');

  const textColor = await prompt('Enter the color of the text: ');

  shape.setText(text, textColor);

  const svgContent = shape.render();
  const svgData = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 200 200">${svgContent}</svg>`;

  fs.writeFile('logo.svg', svgData, (err) => {
    if (err) {
      console.error('Error creating logo.svg:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
}

run();


  