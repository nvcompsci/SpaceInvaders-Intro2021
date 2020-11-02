//create array
let aliens = []

function setup() {
  createCanvas(400, 400);
  spawnAliens()
  console.log(aliens)
}

function draw() {
  background(220);
  for (let i=0;i<10;i++) {
    updateSprite(aliens[i])
    alienVsWalls(aliens[i])
    drawAlien(aliens[i])
  }
}

function alienVsWalls(a) {
  if (a.x > width || a.x < 0) {
    a.vx *= -1
  }
}

function updateSprite(s) {
  s.x += s.vx
  s.y += s.vy
}

function drawAlien(a) {
  fill("green")
  circle(a.x,a.y,a.width)
}

function spawnAliens() {
  
  for (let i=0;i<10;i++) {
    let alien = {}
    alien.x = i * 32
    alien.y = 10
    alien.vx = 1
    alien.vy = 0.5
    alien.width = 30
    alien.height = 30
    //add this alien to array
    aliens.push(alien)
  }
  
}
