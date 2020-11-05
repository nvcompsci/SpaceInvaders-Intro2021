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
  else if (a.y > height) {
    console.log("You lose!")
    noLoop()
  }
}

function drawAlien(a) {
  fill("green")
  circle(a.x, a.y, a.width)
}

function updateSprite(s) {
  s.x += s.vx
  s.y += s.vy
}

function spawnAliens() {
  for (let i=0; i<10;i++) {
    let alien = {}
    alien.x = (i * 33) + 16
    alien.y = 16
    alien.width = 30
    alien.height = 30
    alien.vx = 2
    alien.vy = 0.2
    //put new alien in array
    aliens.push(alien)
  }
}




