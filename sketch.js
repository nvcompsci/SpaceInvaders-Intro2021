let aliens = []
let lasers = []

function setup() {
  createCanvas(400, 400);
  spawnAliens()
  console.log(aliens)
  frameRate(30)
}

function draw() {
  background(220);
  for (let i=0; i < aliens.length; i++) {
    updateSprite(aliens[i])
    alienVsWalls(aliens[i])
    drawAlien(aliens[i])
  }
  
  for (let i=0; i<lasers.length; i++) {
    drawLaser(lasers[i])
  }
}

function drawAlien(alien) {
  fill("green")
  circle(alien.x, alien.y,alien.width)
}

function drawLaser(laser) {
  fill("red")
  rect(laser.x, laser.y, laser.width, laser.height)
}

function alienVsWalls(a) {
  if (a.x > width || a.x < 0) {
    a.vx *= -1
  }
  else if (a.y > height) {
    console.log("Game Over!")
    noLoop()
  }
}

function updateSprite(s) {
  s.x += s.vx
  s.y += s.vy
}

function spawnAliens() {
  for (let i=0;i < 8;i++) {
    let alien = {}
    alien.x = (i+1) * 40
    alien.y = 40
    alien.vx = 3
    alien.vy = 0.5
    alien.width = 30
    alien.height = 30
    //add this alien to the array
    aliens.push(alien)
  }
}

function keyReleased() {
  if (keyCode == 32) fireLaser()
}

function fireLaser() {
  let laser = {}
  laser.x = width / 2
  laser.y = height - 10
  laser.width = 2
  laser.height = 10
  laser.vx = 0
  laser.vy = -3
  
  lasers.push(laser)
}



