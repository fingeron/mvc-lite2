(function(global) {
    global.App = {

    };
})(window);
(function(global) {
    var MVCLiteObject = function(options) {
        this.name = options.name;
    };

    MVCLiteObject.prototype = {
        error: function(msg) {
            throw {
                name: '[' + this.name + 'Error]',
                message: msg,
                data: this
            };
        }
    };

    MVCLiteObject.inherits = function(obj) {
        obj.prototype = Object.create(MVCLiteObject.prototype);
        obj.prototype.constructor = obj;
    };

    global.App.Core = global.App.Core || {};
    global.App.Core.MVCLiteObject = MVCLiteObject;
})(window);
(function(global) {
    var DynamicNode = function (options) {
        global.App.Core.MVCLiteObject.call(this, options);

        this.parent = options.parent;
        this.children = options.children || [];
    };

    // Inherits from MVCLiteObject
    global.App.Core.MVCLiteObject.inherits(DynamicNode);
})(window);