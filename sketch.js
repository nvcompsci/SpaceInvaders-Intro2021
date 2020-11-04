//create array
let aliens = []
let lasers = []

function setup() {
  createCanvas(400, 400);
  spawnAliens()
  console.log(aliens)
}

function draw() {
  background(220);
  for (let i=0;i<aliens.length;i++) {
    updateSprite(aliens[i])
    alienVsWalls(aliens[i])
    drawAlien(aliens[i])
  }
  for (let i = 0; i < lasers.length; i++) {
    updateSprite(lasers[i])
    drawLaser(lasers[i])
  }
}

function alienVsWalls(a) {
  if (a.x > width || a.x < 0) {
    a.vx *= -1
  }
  else if (a.y > height) {
    console.log("GAME OVER")
    noLoop()
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

function drawLaser(laser) {
  fill("red")
  noStroke()
  rect(laser.x, laser.y, laser.width, laser.height)
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

function keyReleased() {
  if (keyCode == 32) {
    fireLaser()
  }
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





