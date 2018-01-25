function Node(data){
	this.data = data;
	this.next = null;
}

function SingleLinkedList(){
	this.head = null;
	this.tail = null;
	this.counter = 0;
}

SingleLinkedList.prototype.add = function(data){
	var node = new Node(data);
	if(!this.head){
		this.head = node;
		this.tail = node;
	}else{
		this.tail.next = node;
		this.tail = node;
	}
	this.counter++;
}

SingleLinkedList.prototype.remove = function(data){
  var previous = this.head;
  var current = this.head;
  while(current) {
    if(current.data === data) {
      if(current === this.head) {
        this.head = this.head.next;
      }
      if(current === this.tail) {
        this.tail = previous;
      }else{
        previous.next = current.next;
      }
      this.counter--;
    }
    previous = current;
    current = current.next;
  }
}

SingleLinkedList.prototype.insertAfter = function(data, toNodeData){
  var current = this.head;
  while(current) {
    if(current.data === toNodeData) {
      var node = new Node(data);
      if(current === this.tail) {
        this.tail.next = node;
        this.tail = node;
      } else {
        node.next = current.next;
        current.next = node;
      }
      this.counter++;
    }
    current = current.next;
  }
}

SingleLinkedList.prototype.traverse = function(fn){
	var current = this.head;
	while(current){
		if(fn){
			fn(current);
		}
		current = current.next;
	}
}

SingleLinkedList.prototype.length = function() {
  return this.counter;
}

SingleLinkedList.prototype.print = function() {
  var string = '';
  var current = this.head;
  while(current) {
    string += current.data + ' ';
    current = current.next;
  }
  console.log(string.trim());
}
