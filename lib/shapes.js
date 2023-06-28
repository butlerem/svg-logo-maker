class Shape {
    constructor(color) {
      this.color = color;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // This is a placeholder method in the parent class.
      // Each shape class will override this method with its own implementation.
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  
    render() {
      return `<rect x="75" y="75" width="150" height="150" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Triangle,
    Circle,
    Square,
  };
  