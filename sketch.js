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
  for (let i = 0; i < 10; i++) {
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
  } else if (a.y > height) {
    console.log("You lose!")
    noLoop()
  }
}

function laserVsAlien(l, a) {
  if (3 > 2) {

  }
}

function rectVsRect(rect1, rect2) {
  if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y) {
    return true;
  } else return false;
}

function drawAlien(a) {
  fill("green")
  circle(a.x, a.y, a.width)
}

function drawLaser(l) {
  fill("red")
  rect(l.x, l.y, l.width, l.height)
}

function updateSprite(s) {
  s.x += s.vx
  s.y += s.vy
}

function spawnAliens() {
  for (let i = 0; i < 10; i++) {
    let alien = {}
    alien.x = (i * 33) + 16
    alien.y = 16
    alien.width = 30
    alien.height = 30
    alien.vx = 3
    alien.vy = 0.2
    //put new alien in array
    aliens.push(alien)
  }
}

function keyReleased() {
  fireLaser()
}

function fireLaser() {
  let laser = {}
  laser.x = width / 2
  laser.y = height - 10
  laser.width = 2
  laser.height = 10
  laser.vx = 0
  laser.vy = -5

  lasers.push(laser)
}
