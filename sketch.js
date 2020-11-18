//create array
let aliens = []
let lasers = []
let bombs = []

let player = {}
let gameOver = false
let result

let imgs = {}

function preload() {
  imgs.alien = loadImage("https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/alien.png")
  imgs.bomb = loadImage("https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/bomb.png")
  imgs.laser = loadImage("https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/laser.png")
  imgs.player = loadImage("https://raw.githubusercontent.com/nvcompsci/SpaceInvaders-Intro2021/main/player.png ")
}

function setup() {
  createCanvas(400, 400);
  spawnAliens()
  spawnPlayer()
  console.log(aliens)
}

function draw() {
  background(0);
  drawStars()
  if (aliens.length == 0) {
    gameOver = true
    result = "You win!"
  }
  if (!gameOver) {
  for (let i=0;i<aliens.length;i++) {
    updateSprite(aliens[i])
    alienVsWalls(aliens[i])
    drawSprite(aliens[i])
    if (random() < 0.005)
      dropBomb(aliens[i])
    for (let j = 0;j<lasers.length;j++) {
      laserVsAlien(lasers[j],aliens[i])
    }
  }
  for (let i = 0; i < lasers.length; i++) {
    updateSprite(lasers[i])
    drawSprite(lasers[i])
  }
  for (let i = 0; i < bombs.length; i++) {
    updateSprite(bombs[i])
    drawSprite(bombs[i])
    bombVsPlayer(bombs[i])
  }

  
  updateSprite(player)
  drawSprite(player)
  //only keep the sprites that are still active
  aliens = aliens.filter(a => a.active)
  lasers = lasers.filter(l => l.active)
  bombs = bombs.filter(b => b.active)
  }
  else {
    text(result,width/2,height/2)
    noLoop()
  }
}

function drawStars() {
  stroke("white")
  for (let i=0; i < 30; i++) {
    point(random(width),random(height))
  }
}

function laserVsAlien(l,a) {
  if (rectVsRect(l,a)) {
    l.active = false
    a.active = false
  }
}

function bombVsPlayer(b) {
  if (rectVsRect(b,player)) {
    b.active = false
    player.hp--
    if (player.hp <= 0) {
      gameOver = true
      result = "You lose!"
    }
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
    gameOver = true
    result = "You lose!"
  }
}

function updateSprite(s) {
  s.x += s.vx
  s.y += s.vy
}

function drawSprite(s) {
  image(s.img,s.x,s.y,s.width,s.height)
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

function drawBomb(b) {
  fill("orange")
  circle(b.x, b.y, b.width)
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
    alien.img = imgs.alien
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
  laser.img = imgs.laser
  
  lasers.push(laser)
}

function dropBomb(a) {
  let bomb = {}
  bomb.x = a.x
  bomb.y = a.y + a.height / 2
  bomb.vx = a.vx
  bomb.vy = 5
  bomb.width = 15
  bomb.height = 15
  bomb.active = true
  bomb.img = imgs.bomb
  
  bombs.push(bomb)
}

function spawnPlayer() {
  player.x = width / 2
  player.y = height - 50
  player.width = 20
  player.height = 35
  player.vx = 0
  player.vy = 0
  player.hp = 5
  player.img = imgs.player
}



