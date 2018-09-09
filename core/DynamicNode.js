(function(global) {
    var DynamicNode = function (options) {
        global.App.Core.MVCLiteObject.call(this, options);

        this.parent = options.parent;
        this.children = options.children || [];
    };

    // Inherits from MVCLiteObject
    global.App.Core.MVCLiteObject.inherits(DynamicNode);
})(window);