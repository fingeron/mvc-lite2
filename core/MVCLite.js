(function(global) {
    var App = {
        Entities: {},
        Components: {},

        /* Add an entity to framework pool */
        CreateEntity: addEntity,
        /* Create a component in framework */
        Component: createComponent,
        /* Bootstrap app / component */
        Bootstrap: bootstrap
    };

    function addEntity(entity) {
        App.Entities[entity.name] = entity;
    }

    function createComponent(options) {
        var newComponent = new App.Entities['Component'](options);
        console.log(newComponent);
    }

    function bootstrap(name) {
        var appRoot = document.querySelector(name);
        console.log(appRoot);
    }

    global.App = App;
})(window);