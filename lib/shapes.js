class Shape {
  constructor(color) {
    this.color = color;
    this.dimensions = {};
  }

  setColor(color) {
    this.color = color;
  }

  setDimensions(dimensions) {
    this.dimensions = dimensions;
  }

  getInfo() {
    return `Color: ${this.color}, Dimensions: ${JSON.stringify(this.dimensions)}`;
  }

  render() {
    // This is a placeholder method in the parent class.
    // Each shape class will override this method with its own implementation.
  }
}

class Triangle extends Shape {
  constructor(color) {
    super(color);
    this.type = 'triangle';
  }

  render() {
    const { base, height } = this.dimensions;
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color);
    this.type = 'circle';
  }

  render() {
    const { radius } = this.dimensions;
    return `<circle cx="150" cy="100" r="${radius}" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor(color) {
    super(color);
    this.type = 'square';
  }

  render() {
    const { side } = this.dimensions;
    return `<rect x="75" y="75" width="${side}" height="${side}" fill="${this.color}" />`;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};
