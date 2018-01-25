function Queue(){
  this.queue =  [];
}

Queue.prototype.add = function(val){
  return this.queue.push(val);
}

Queue.prototype.get = function(){
  return this.queue.shift();
}

Queue.prototype.length = function(){
  return this.queue.length;
}

Queue.prototype.print = function(){
  return this.queue.join(' ');
}
