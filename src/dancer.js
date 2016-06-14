var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.isMovingCloser = false;
  this.nearestDancer = this.nearestNeighbor();
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //this.$node.toggle();
  if (this.isMovingCloser) {
    this.moveCloser(this.nearestDancer);
  }
};

Dancer.prototype.setSize = function(borderSize) {
    var radius =  {
      "border-width": borderSize + "px",
      "border-radius" : borderSize + "px"
    }
    this.$node.css(radius);
  };

Dancer.prototype.lineUp = function(newLeft) {
  this.setPosition(this.top, newLeft);
};

Dancer.prototype.setPosition = function(top, left) {
  this.top = top;
  this.left = left;

  this.styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(this.styleSettings);
};

Dancer.prototype.distanceTo = function(otherDancer){
  //otherDancer.top, otherDancer.left vs this this
  var horizontalDistance = this.left - otherDancer.left;
  var verticalDistance = this.top - otherDancer.top;
  var distance = Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));
  return distance;
};

Dancer.prototype.nearestNeighbor = function() {
  var currentDancer;
  var nearestDancer; //Dancer we save if distance is lower
  var lowestDistance; // distance to nearest dancer
  var currentDistance; // current lowest distance from distanceTo()

  for (var i = 0; i < window.dancers.length; i++) {
    currentDancer = window.dancers[i];
    currentDistance = this.distanceTo(currentDancer);

    if (lowestDistance === undefined) {
      lowestDistance = currentDistance;
      nearestDancer = currentDancer;
    } else {
      if (currentDistance < lowestDistance && currentDistance !== 0) {
        lowestDistance = currentDistance;
        nearestDancer = currentDancer;
      }
    }
  }

  return nearestDancer;
};


//moveCloser method
// nearestNeighbor returns the closest dancer
//this.nearestDancer = this.nearestNeighboer
//check difference between top and left properties
//if my .top is greater, then top--
//else increase my top++ && his top top--
//if .left is greater
//^^^^^

Dancer.prototype.moveCloser = function(otherDancer) {
  var jump = 20;
  if (this.top > otherDancer.top) {
    this.setPosition(this.top - jump, this.left);
  } else {
    this.setPosition(this.top + jump, this.left);
  }

  if (this.left > otherDancer.left) {
    this.setPosition(this.top, this.left - jump);
  } else {
    this.setPosition(this.top, this.left + jump);
  }

  if (this.distanceTo(otherDancer) < 20) {
    this.isMovingCloser = false;
  }
}


