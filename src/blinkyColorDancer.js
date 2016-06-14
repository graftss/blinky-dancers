var BlinkyColorDancer = function(top, left, timeBetweenSteps){
  this.colorArray = ['green', 'blue', 'pink', 'red'];
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
};

BlinkyColorDancer.prototype = Object.create(BlinkyDancer.prototype);

BlinkyColorDancer.prototype.constructor = BlinkyColorDancer;

BlinkyColorDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.colorChange();

};


BlinkyColorDancer.prototype.colorChange = function() {
  var randomIndex = Math.floor(Math.random() * this.colorArray.length);
  var color = this.colorArray[randomIndex];

  this.$node.css('border-color', color);
};
