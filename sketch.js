//create array
let aliens = []
let lasers = []

let player = {}

function setup() {
  createCanvas(400, 400);
  spawnAliens()
  spawnPlayer()
  console.log(aliens)
}

function draw() {
  background(220);
  for (let i=0;i<aliens.length;i++) {
    updateSprite(aliens[i])
    alienVsWalls(aliens[i])
    drawAlien(aliens[i])
    for (let j = 0;j<lasers.length;j++) {
      laserVsAlien(lasers[j],aliens[i])
    }
  }
  for (let i = 0; i < lasers.length; i++) {
    updateSprite(lasers[i])
    drawLaser(lasers[i])
  }
  
  updateSprite(player)
  drawPlayer()
  //only keep the sprites that are still active
  aliens = aliens.filter(a => a.active)
  lasers = lasers.filter(l => l.active)
}

function laserVsAlien(l,a) {
  if (rectVsRect(l,a)) {
    l.active = false
    a.active = false
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

function drawPlayer() {
  fill("blue")
  rect(player.x, player.y, player.width, player.height)
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
    alien.active = true
    //add this alien to array
    aliens.push(alien)
  }
  
}

function keyPressed() {
  if (keyCode == 65)
    player.vx = -3
  else if (keyCode == 68)
    player.vx = 3
}

function keyReleased() {
  if (keyCode == 32) {
    fireLaser()
  }
  else
    player.vx = 0
}

function fireLaser() {
  let laser = {}
  laser.x = player.x + player.width / 2
  laser.height = 10
  laser.y = player.y - laser.height
  laser.width = 2  
  laser.vx = player.vx * 0.25
  laser.vy = -3
  laser.active = true
  
  lasers.push(laser)
}

function spawnPlayer() {
  player.x = width / 2
  player.y = height - 50
  player.width = 20
  player.height = 50
  player.vx = 0
  player.vy = 0
  player.hp = 5
}



