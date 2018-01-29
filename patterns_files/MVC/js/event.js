//Here we
var Event = function(sender){
  this._sender = sender;
  this._listeners = [];
}

Event.prototype = {
  attach: function(listener){
    this._listeners.push(listener);
  }
}
