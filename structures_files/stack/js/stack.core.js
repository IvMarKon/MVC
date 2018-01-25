function Stack(){
  this.stack =  [];
}

Stack.prototype.add = function(val){
  return this.stack.unshift(val);
}

Stack.prototype.get = function(){
  return this.stack.shift();
}

Stack.prototype.length = function(){
  return this.stack.length;
}

Stack.prototype.print = function(){
  return this.stack.join(' ');
}
