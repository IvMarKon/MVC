/**
 * File with types of ball
 */

ball.fire = function () {
  //prototype shows previous states
  this.prototype = ball;
  this.color = "red";
  this.effect = "fire";
  this.attack = "10 points";
  this.getAttack = function () {
    console.log("%cThis ball has effect of " + this.effect + " and gives +" + this.attack + " to attack !!!", color_log(this.color));
    return this;
  };
  this.bonus = function () {
    console.log("%cFIRE!!!!!!!", color_log(this.color));
  }
}

ball.ice = function () {
  //prototype shows previous states
  this.prototype = ball;
  this.color = "blue";
  this.effect = "ice";
  this.attack = "30 points";
  this.getAttack = function () {
    console.log("%cThis ball has effect of " + this.effect + " and gives +" + this.attack + " to attack !!!", color_log(this.color));
    return this;
  };
  this.bonus = function () {
    console.log("%cCOLD!!!!!!!", color_log(this.color));
  }
}

ball.light = function () {
  //prototype shows previous states
  this.prototype = ball;
  this.color = "#ffc107";
  this.effect = "light";
  this.attack = "50 points";
  this.getAttack = function () {
    console.log("%cThis ball has effect of " + this.effect + " and gives +" + this.attack + " to attack !!!", color_log(this.color));
    return this;
  };
  this.bonus = function () {
    console.log("%cLIGHTNING!!!!!!!", color_log(this.color));
  }
}
