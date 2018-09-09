(function(global) {
    global.App = {
        Core: {}
    };
})(window);
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
(function(global) {
    var DynamicNode = function (options) {
        // This object can be initialized empty
        options = options || {};

        // Parent object constructor
        global.App.Core.MVCLiteObject.call(this, 'DynamicNode');

        this.parent = options.parent;
        this.children = options.children || [];
    };

    // Inherits from MVCLiteObject
    global.App.Core.MVCLiteObject.inherits(DynamicNode);
    global.App.Core.DynamicNode = DynamicNode;

    // Object functions
    DynamicNode.prototype.childAfter = function(child) {
        var i = this.children.indexOf(child);
        if(i > -1)
            return this.children.length > i ? this.children[i+1] : undefined;
        this.error(child + ' is not a child of this node.');
    };

    DynamicNode.prototype.childBefore = function(child) {
        var i = this.children.indexOf(child);
        if(i > -1)
            return i > 0 ? this.children[i-1] : undefined;
        this.error(child + ' is not a child of this node.');
    };

    DynamicNode.prototype.insertAfter = function(child, newChild) {
        var i = this.children.indexOf(child);
        if(i > -1)
            this.children.splice(i+1, 0, newChild);
        else
            this.error(child + ' is not a child of this node.');
    };

    DynamicNode.prototype.insertBefore = function(child, newChild) {
        var i = this.children.indexOf(child);
        if(i > -1)
            this.children.splice(i, 0, newChild);
        else
            this.error(child + ' is not a child of this node.');
    };

    DynamicNode.prototype.removeChild = function(child) {
        var i = this.children.indexOf(child);
        if(i > -1)
            this.children.splice(i, 1);
        else
            this.error(child + ' is not a child of this node.');
    };

})(window);