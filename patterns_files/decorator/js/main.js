/**
 * Main output file
 */

//show all properties
ball.showAll();

//run all decorators
for (key in ball) {
  if (typeof ball[key] === "function") {
    console.warn("Create new " + key + " ball");
    if (key == "ice") {
      new ball[key]().getAttack().bonus();
    } else {
      new ball[key]().getAttack();
    }
  }
}
