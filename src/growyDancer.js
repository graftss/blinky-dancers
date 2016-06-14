
var GrowyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer growydancer"></span>');
  //array of l or r , and top or bottom
  //choose random number
  this.increaseNextStep = true;
  this.bigSize = (Math.random() * (30 - 15)) + 15;
  this.littleSize = (Math.random() * (15 - 0)) + 0;


  //this.startingSize = {boder: top, left: left};
  //this.setPosition(this.top+10, this.left+10);


  this.$node.css(this.styleSettings);


};

GrowyDancer.prototype = Object.create(Dancer.prototype);

GrowyDancer.prototype.constructor = GrowyDancer;

GrowyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //this.$node.toggle();

  //Math.floor(Math.random() * (max - min)) + min;

    if (this.increaseNextStep){
      this.setSize(this.bigSize);
      //this.css(this.setSize())

    } else {
      this.setSize(this.littleSize);
    }

    this.increaseNextStep = !this.increaseNextStep;



};
