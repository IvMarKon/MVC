$(document).ready(function () {
    //Create new item on start
    var c_widget1 = $("body").dragndrop({
        container: "drag1"
    });
    c_widget1.dragndrop("init");
    $("#drag-element").append(`<img src="move.svg" alt="">`);

    //Mouse events
    $(".init").on("click", function () {
        c_widget1.dragndrop("init");
        $("#drag-element").append(`<img src="move.svg" alt="">`);
    });
    $(".delete").on("click", function () {
        c_widget1.dragndrop("remove");
    });

    console.log("Message from main file !");
});