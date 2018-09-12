(function(global) {
    var MVCLiteObject = function(name) {
        this._name = name;
    };

    // Static functions
    MVCLiteObject.inherits = function(obj) {
        obj.prototype = Object.create(MVCLiteObject.prototype);
        obj.prototype.constructor = obj;
    };

    // Object functions
    MVCLiteObject.prototype.error = function(msg) {
        throw {
            name: this._name + 'Error',
            message: msg,
            data: this
        };
    };

    global.App.CreateEntity(MVCLiteObject);
})(window);