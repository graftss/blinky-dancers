
var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("blinkydancer");
  this.disappear = true;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){

  Dancer.prototype.step.call(this);
  //setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //this.$node.toggle();
  if (this.disappear){
    this.$node.css("opacity", 0);
  }else {
    this.$node.css("opacity", 1);
  }
  this.disappear = !this.disappear;

};
/*
      $(this).fadeOut(1000, function() {
        $(this).css("background-color","transparent")});
        $(this).fadeIn(1000);
        });
*/
