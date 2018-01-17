//global object
document.addEventListener("DOMContentLoaded", function () {
  ball = new Ball();
});

var keyAction = function (side) {
  //returns type for subscriber
  if (side === undefined) {
    return "action";
  } else {
    //add event to logger on key press
    logger.add("The ball moves: " + side);
  }
};

var keyEvent = function (event) {
  //returns type for subscriber
  if (event === undefined) {
    return "event";
  } else {
    //add event to logger on key press
    logger.add("The ball make: " + event);
  }
};


var keyTrigger = function (kt, arg) {
  //detect event type and subscribe
  kt === "keyAction" ? ball.subscribe(keyAction) : ball.subscribe(keyEvent);
  //fire event
  ball.fire(kt, arg);
  //output logger
  logger.show();
  //remove event from object global array
  kt === "keyAction" ? ball.unsubscribe(keyAction) : ball.unsubscribe(keyEvent);
};

//list of registered keys
window.onkeypress = function (event) {
  if (event.keyCode === 32) {
    keyTrigger("keyEvent", "jumps");
  } else if (event.keyCode === 97) {
    keyTrigger("keyAction", "left");
  } else if (event.keyCode === 100) {
    keyTrigger("keyAction", "right");
  } else if (event.keyCode === 115) {
    keyTrigger("keyAction", "down");
  } else if (event.keyCode === 119) {
    keyTrigger("keyAction", "up");
  } else {
    //show code of undefined key
    console.warn("No event for this key(code: "+event.keyCode+") !");
  }
};
