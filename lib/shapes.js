class Shape {
  constructor() {
    this.color = '';
    this.text = '';
    this.textColor = '';
  }

  setColor(color) {
    this.color = color;
  }

  setText(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }

  render() {
    // This is a placeholder method in the parent class.
    // Each shape class will override this method with its own implementation.
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }

  render() {
    const { color, text, textColor } = this;
    return `<polygon points="100,18 194,182 -4,182" style="fill:blue;" />`;
  }
}

class Circle extends Shape {
  constructor() {
    super();
  }

  render() {
    const { color, text, textColor } = this;
    return `
      <circle cx="100" cy="100" r="80" style="fill:${color};" />
      <text x="100" y="115" text-anchor="middle" font-size="50" fill="${textColor}">${text}</text>
    `;
  }
}

class Square extends Shape {
  constructor() {
    super();
  }

  render() {
    const { color, text, textColor } = this;
    return `
      <rect x="40" y="40" width="120" height="120" style="fill:${color};" />
      <text x="100" y="115" text-anchor="middle" font-size="50" fill="${textColor}">${text}</text>
    `;
  }
}

module.exports = {
  Triangle,
  Circle,
  Square,
};

