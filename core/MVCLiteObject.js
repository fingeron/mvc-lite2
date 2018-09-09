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