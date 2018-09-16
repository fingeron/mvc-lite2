(function(global) {
    var Http = global.App.Utilities['Http'],
        TemplatesCache = {};

    var Template = function(options) {
        this.name = options.name;
        this.path = options.path;
    };

    Template.load = function(name, path, callback) {
        TemplatesCache[name] = {
            isLoading: true,
            pending: [callback]
        };
        Http.get(path, function(response) {
            var pending = TemplatesCache[name].pending, i,
                template = response;
            for(i = 0; i < pending.length; i++)
                pending[i](template);
            TemplatesCache[name] = template;
        });
    };

    Template.prototype.get = function(callback) {
        if(TemplatesCache[this.name]) {
            var cache = TemplatesCache[this.name];
            if(cache.isLoading) {
                cache.pending.push(callback);
            } else
                setTimeout(callback, 0, cache);
        } else
            Template.load(this.name, this.path, callback);
    };

    global.App.CreateEntity(Template);
})(window);