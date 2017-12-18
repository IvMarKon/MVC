/**
 * @fileOverview Widget core file
 * @author <a href="https://github.com/IvMarKon">Ivan Markov</a>
 * @version 1.2
 */
$.widget("custom.dragndrop", {
    /** Widgets options */
    options: {
        container: "body",
        parent: "body",
        itemExist: false,
        body: $("body"),
        drag_container: '<div id="drag-container"></div>'
    },
    /** 
     * @function _create
     * @description Function constructor - creates the new widget
     * @param {object} {container:"selector"} Selector where widget will be appended
     * @returns {object} The new widget
     */
    _create: function () {
        if (this.options.container == "body") {
            this.options.body.append(this.options.drag_container);
        } else if (this.options.container != "body" && $("." + this.options.container)[0] != undefined) {
            $("." + this.options.container).append(this.options.drag_container);
        } else if (this.options.container != "body" && $("#" + this.options.container) != undefined) {
            $("#" + this.options.container).append(this.options.drag_container);
        }
    },
    /** 
     * @function _getCoords
     * @description Get coordinates of the movable element
     * @param {object} elem Element which coordinates we will get
     * @returns {object} Object with properties - coordinates top and left
     */
    _getCoords: function (elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    },
    /** 
     * @function _makeItDraggable
     * @description Restyle element for drag n drop event
     * @param {object} el Element where we change styles
     */
    _makeItDraggable: function (el) {
        $(el).css({
            zIndex: 1000,
            position: "absolute",
            boxShadow: "rgb(197, 49, 46) -6px 6px 20px 0"
        });
    },
    /** 
     * @function _putDragBack
     * @description Restore drag n drop element styles and put element back to container
     * @param {object} container Container where element will be appended
     * @param {object} el Element which styles we change and append back to container
     */
    _putDragBack: function (container, el) {
        container.append(el);
        $(el).css({
            top: 0,
            left: 0,
            boxShadow: "none"
        });
    },
    /** 
     * @function init
     * @description Initialization draggable element in widget container
     * @returns {object} Object - drag n drop element
     */
    init: function () {
        var widget_prop = this;

        if (this.options.itemExist == false) {
            $("#drag-container").append(`<div class="fixed" id="drag-element"><img src="/move.svg" alt=""></div>`);

            //specifing namespace for multiple events in widget with div depending on its selector
            $("div").on("custom.dragndrop", function (e) {

                if ($(this).attr("id") == "drag-element") {

                    $(this).on("mousedown", function (e) {
                        var that = this;
                        var coords = widget_prop._getCoords(this);
                        var shiftX = e.pageX - coords.left;
                        var shiftY = e.pageY - coords.top;

                        function moveAt(e) {
                            var posX = e.pageX - shiftX;
                            var posY = e.pageY - shiftY;
                            if (posX >= 0 && posY >= 0 && posX < widget_prop.options.body.width() && posY < widget_prop.options.body.height()) {
                                $(that).css({
                                    left: posX,
                                    top: posY
                                });
                            }
                        }
                        widget_prop._makeItDraggable(this);
                        widget_prop.options.body.append(this);
                        moveAt(e);

                        $(document).on("mousemove", function (e) {
                            moveAt(e);
                        });
                        $(this).on("mouseup", function () {
                            $(document).off("mousemove");
                            $(this).off("mouseup");
                            widget_prop._putDragBack($("#drag-container"), that);
                        });
                        //bug-fix in browser
                        $(this).on("dragstart", function () {
                            return false;
                        });
                    });
                }
            });
            this.options.itemExist = true;

            $("#drag-element").trigger("custom.dragndrop");

        } else if (this.options.itemExist == true) {
            return null;
        }
    },
    /** 
     * @function remove
     * @description Remove draggable element from widget container
     */
    remove: function () {
        this.options.itemExist = false;
        $("#drag-element").remove();
    },
    /** 
     * @function _destroy
     * @description Destroy widget method
     */
    _destroy: function () {
        $("div").unbind("custom.dragndrop");
        $("#drag-element").unbind("custom.dragndrop");
        $("#drag-container").remove();
    }
});

console.log(111);