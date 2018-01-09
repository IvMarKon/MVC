//initialise new object
function Ball() {
  this.actions = [];
  this.events = [];
}

Ball.prototype = {
  //subscribe event to certain array, based on its type
  subscribe: function (fn) {
    if (fn() == "action") {
      this.actions.push(fn);
    } else if (fn() == "event") {
      this.events.push(fn);
    }
  },
  //find event in one of two arrays and unsubscribe it
  unsubscribe: function (fn) {
    if (fn() == "action") {
      // this.actions.push(fn);
      this.actions.splice(this.actions.indexOf(fn), 1);
    } else if (fn() == "event") {
      this.events.splice(this.events.indexOf(fn), 1);
    }
  },
  //find event in global object, based on its type and call it with event that we sent before
  fire: function (obj, prop) {
    for (var i = 0; i < this.actions.length; i++) {
      if (this.actions[0].name == obj) {
        this.actions[0].call(window, prop);
      }
    }
    for (var j = 0; j < this.events.length; j++) {
      if (this.events[0].name == obj) {
        this.events[0].call(window, prop);
      }
    }
  }
}
