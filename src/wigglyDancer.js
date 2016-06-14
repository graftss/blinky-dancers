
var WigglyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);
  //array of l or r , and top or bottom
  //choose random number

  this.startingPosition = {top: top, left: left};
  //this.setPosition(this.top+10, this.left+10);

  this.randomWiggle = (Math.random() * (10 - -10)) + -10;
  this.$node.addClass("wigglydancer");



};

WigglyDancer.prototype = Object.create(Dancer.prototype);

WigglyDancer.prototype.constructor = WigglyDancer;

WigglyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //this.$node.toggle();

  //Math.floor(Math.random() * (max - min)) + min;
  if (this.startingPosition){
    if (this.top > this.startingPosition.top){
      this.setPosition(this.top-10, this.left + (this.randomWiggle))
    } else {
      this.setPosition(this.top+10, this.left - (this.randomWiggle));
    }
  }


};


// WigglyDancer.prototype.setPosition = function(top, left) {
//   this.top = top;
//   this.left = left;

//   this.styleSettings = {
//     top: top,
//     left: left
//   };

//   this.$node.css(this.styleSettings);
// };
