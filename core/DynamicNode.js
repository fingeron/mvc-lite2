(function(global) {
    var MVCLiteObject = global.App.Entities['MVCLiteObject'];

    var DynamicNode = function (options) {
        // This object can be initialized empty
        options = options || {};

        // Parent object constructor
        MVCLiteObject.call(this, 'DynamicNode');

        this.parent = options.parent;
        this.children = options.children || [];
    };

    // Inherits from MVCLiteObject
    MVCLiteObject.inherits(DynamicNode);
    global.App.CreateEntity(DynamicNode);

    // Static functions
    DynamicNode.inherits = function(obj) {
        obj.prototype = Object.create(DynamicNode.prototype);
        obj.prototype.constructor = obj;
    };

    // Object functions
    DynamicNode.prototype.appendChild = function(child, pos) {
        if(!child instanceof DynamicNode)
            this.error("Cannot create parent-child relations with non DynamicNodes." + child);

        child.parent = this;
        if(typeof pos === 'number' && pos >= 0)
            this.children.splice(pos, 0, child);
        else
            this.children.push(child);
    };

    DynamicNode.prototype.removeChild = function(child) {
        var i = this.children.indexOf(child);
        if(i > -1)
            this.children.splice(i, 1);
        else
            this.error(child + ' is not a child of this node.');
    };

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
            this.appendChild(newChild, i);
        else
            this.error(child + ' is not a child of this node.');
    };

    DynamicNode.prototype.insertBefore = function(child, newChild) {
        var i = this.children.indexOf(child);
        if(i > -1)
            this.appendChild(newChild, i);
        else
            this.error(child + ' is not a child of this node.');
    };

})(window);