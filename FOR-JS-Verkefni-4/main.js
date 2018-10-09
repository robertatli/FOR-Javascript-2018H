// define variable for ball count paragraph

var para = document.querySelector('p');
var h2 = document.querySelector('h2');
var count = 0;

// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;


// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}
// define shape constructor

function Shape(x, y, velX, velY, exists) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

// define Ball constructor, inheriting from Shape

function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);

  this.color = color;
  this.size = size;
}

Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// define ball draw method

Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

// define ball update method

Ball.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Ball.prototype.collisionDetect = function() {
  for(var j = 0; j < balls.length; j++) {
    if(!(this === balls[j])) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size && balls[j].exists) {
        balls[j].color = this.color = 'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')';
      }
    }
  }
};

// define array to store balls


// define EvilCircle constructor, inheriting from Shape

function EvilCircle(x, y,velY, exists) {
  Shape.call(this, x, y, 20, 20, exists);

  this.color = 'white';
  this.size = 10;
  this.velY = -10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;


// define EvilCircle draw method

EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 3;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
};


// define EvilCircle checkBounds method

EvilCircle.prototype.checkBounds = function() {
  if((this.x + this.size) >= width) {
    delete this;
  }

  if((this.x - this.size) <= 0) {
    delete this;
  }

  if((this.y + this.size) >= height) {
    delete this;
  }

  if((this.y - this.size) <= 0) {
    delete this;
  }
};


EvilCircle.prototype.update = function() {
 
  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.y += this.velY;
};


// define EvilCircle collision detection

EvilCircle.prototype.collisionDetect = function() {
  for(var j = 0; j < balls.length; j++) {
    if( balls[j].exists ) {
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].exists = false;
        evil = new EvilCircle(-999, -999,20, false);
        count--;
        para.textContent = 'Ball count: ' + count;
      }
    }
  }
};



var spaceship = {

    x: width / 2, y: height / 2,
    xs: width / 2, ys: -height / 10 + height,
    vx: 0, vy: 0,
    ax: 0, ay: 0,
    r: 0,

    draw: function(){

        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.save();
        
        ctx.translate(this.xs, this.ys);
        ctx.rotate(this.r);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 10, 24, 15);
        ctx.restore();
        ctx.save();
        
        ctx.translate(this.xs, this.ys);// byssa
        ctx.rotate(this.r);
        ctx.fillStyle = 'white';
        ctx.fillRect(9, 0, 7, 10);
        ctx.restore();
    }
};

function updatePosition(obj){
    //update velocity
    obj.vx = obj.ax * 400;
    
    //update position
    obj.xs += obj.vx;
}

//user interactivity

var keys = [];
document.addEventListener('keydown', function(e){
    keys[e.which] = true;
});
document.addEventListener('keyup', function(e){
    keys[e.which] = false;
});



var balls = [];
var winMessage = 0;

var evil = new EvilCircle();
var shot = 0;

function loop() {

  ctx.fillStyle = 'rgba(0,0,0,0.25)';
  ctx.fillRect(0,0,width,height);

  //rotation
    //if(keys[65]) spaceship.r -= 0.05;
    //if(keys[68]) spaceship.r += 0.05;

  //shoot
    if (keys[87] && shot == 0) {
      evil = new EvilCircle(spaceship.xs+12, spaceship.ys,20, true);
      shot = 1;
    }else if (!keys[87] && shot == 1) {
      shot = 0;
    }
    
    //thrust
    if(keys[65]){
        spaceship.ax = -Math.PI / 180;
    }else if (keys[68]) {
        spaceship.ax = Math.PI / 180;
    }
    else{
        spaceship.ax = 0;
    }

    

  while(balls.length < 25) {
    var size = random(10,20);
    var ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the adge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      true,
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      size
    );
    balls.push(ball);
    count++;
    para.textContent = 'Ball count: ' + count;
  }

  if (count == 0 && winMessage == 0) {
    console.log("þú vannst!");
    h2.textContent = 'Þú Vannst!!!';
    winMessage = 1;
  }


  for(var i = 0; i < balls.length; i++) {
    if(balls[i].exists) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }
  

  updatePosition(spaceship);
    spaceship.draw();
    evil.draw();
    evil.checkBounds();
    evil.update();
    evil.collisionDetect();
  requestAnimationFrame(loop);
}



loop();