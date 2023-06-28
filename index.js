const getUserInput = require('./lib/userInput');
const { Circle, Square, Triangle } = require('./lib/shapes');


async function run() {
    try {
      // Gather user input using the getUserInput function
      const userInput = await getUserInput();
  
      // Generate the SVG code based on user input
      let shape;
switch (userInput.shape) {
  case 'Circle':
    shape = new Circle();
    break;
  case 'Square':
    shape = new Square();
    break;
  case 'Triangle':
    shape = new Triangle();
    break;
  default:
    throw new Error('Invalid shape selected');
}

// Set the color of the shape based on user input
shape.setColor(userInput.shapeColor);

// Generate the SVG code for the shape
const svgCode = shape.render();

      // Use the selected shape class (Circle, Square, Triangle) to generate the SVG code
  
      const fs = require('fs');

      // Write the SVG code to a file named logo.svg
      fs.writeFileSync('logo.svg', svgCode);
      
  
      console.log('SVG logo generated successfully!');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  run();

  
  