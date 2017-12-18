$(document).ready(function () {
    //Create new item on start
    var c_widget1 = $("body").dragndrop({
        container: "drag1"
    });
    c_widget1.dragndrop("init");

    //Mouse events
    $(".init").on("click", function () {
        c_widget1.dragndrop("init");
    });
    $(".delete").on("click", function () {
        c_widget1.dragndrop("remove");
    });
});