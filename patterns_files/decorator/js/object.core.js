//basic object
var ball = {
  color: "white",
  shape: "round",
  effect: "none",
  attack: "0 points"
}

//create showAll property, that we can't trace with for..in
Object.defineProperty(ball, 'showAll', {
  value: function () {
    for (key in this)
      if (typeof this[key] !== "function") {
        console.log("%cBall " + key + " is: " + this[key], color_log("orange"));
      } else {
        console.log("%cBall object has method: " + key + "()", color_log("purple"));
      }
  },
  writable: false,
  enumerable: false,
  configurable: false
});
