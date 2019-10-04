// Initial Setup
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

// Variables
let mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", function(event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

// Utility Functions
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(obj1, obj2) {
  const xDist = obj2.x - obj1.x;
  const yDist = obj2.y - obj1.y;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

// Objects
function Ball(x, y, v, radius, color) {
  this.x = x;
  this.y = y;
  this.v = v;
  this.radius = radius;
  this.color = color;

  this.update = function() {
    this.draw();

    this.x += Math.random() > 0.5 ? v : -v;
    this.y += Math.random() > 0.5 ? v : -v;
  };
}

Ball.prototype.draw = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
  c.fillStyle = this.color;
  c.fill();
  c.closePath();
};

// Implementation
let balls = [];
function init() {
  for (let i = 0; i < 100; i++) {}
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "rgba(0,0,0, 0.01)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  if (balls.length < 10000) {
    const v = randomIntFromRange(2, 4);
    balls.push(new Ball(canvas.width / 2, canvas.height / 2, v, 1, "blue"));
  }

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
  }
}
init();
animate();
