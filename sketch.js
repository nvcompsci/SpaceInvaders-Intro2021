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
    drawAlien(aliens[i])
    alienVsWalls(aliens[i])
    updateSprite(aliens[i])
    
  }
}

function drawAlien(a) {
  fill("green")
  circle(a.x,a.y,a.width)
}

function updateSprite(s) {
  s.x += s.vx
  s.y += s.vy
}

function alienVsWalls(a) {
  if (a.x > width || a.x < 0 ) {
    a.vx *= -1
  }
  else if (a.y > height) {
    console.log("You lose!")
    noLoop()
  }
}

function spawnAliens() {
  for (let i=0;i<10;i++) {
    let alien = {}
    alien.x = i * 33 + 18
    alien.y = 18
    alien.width = 30
    alien.height = 30
    alien.vx = 3
    alien.vy = 0.2
    //add new alien to array
    aliens.push(alien)
  }
}


