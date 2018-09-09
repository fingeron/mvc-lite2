(function(global) {
    var MVCLiteObject = function(name) {
        this._name = name;
    };

    MVCLiteObject.prototype = {
        error: function(msg) {
            throw {
                name: this._name + 'Error',
                message: msg,
                data: this
            };
        }
    };

    MVCLiteObject.inherits = function(obj) {
        obj.prototype = Object.create(MVCLiteObject.prototype);
        obj.prototype.constructor = obj;
    };

    global.App.Core.MVCLiteObject = MVCLiteObject;
})(window);