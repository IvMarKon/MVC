var tree = new Tree();
for(var i = 0;i<100;i++){
  tree.addValue(Math.floor(Math.random() * (100 - 10)) + 100);
}
console.log('============<  Tree  >==============');
console.dir(tree);
console.log('====================================');
console.log('============<  Node  >==============');
console.dir(tree.search(164));
console.log('===<Left Node>======<Right Node>====');
console.dir(tree.search(164).left.value+' '+tree.search(164).right.value);
console.log('====================================');
