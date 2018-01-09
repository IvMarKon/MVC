//logger module
var logger = (function () {
  //buffer creating
  var logger = "";

  return {
    //push new message to message stack
    add: function (msg) {
      logger += msg + "\n";
    },
    //show full stack of messages if it is not empty
    show: function () {
      if (logger != "") {
        console.log(logger);
        //clear stack after its output
        logger = "";
      }
    }
  }
})();
