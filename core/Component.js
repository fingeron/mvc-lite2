(function(global) {

    var Component = function(options) {
        this.name = options.name;
    };

    global.App.CreateEntity(Component);

})(window);