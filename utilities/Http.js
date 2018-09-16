(function(global) {
    var Request = function(options) {
        this.method = options.method;
        this.path = options.path;
        this.type = options.type || Request.type.json;

        if(typeof options.params === 'object')
            this.applyParams(options.params);
    };

    Request.method = {
        get: 'GET',
        post: 'POST'
    };

    Request.type = {
        json: 1,
        form: 2
    };

    Request.parseResponse = function(xhr) {
        var status = xhr.status,
            data = xhr.responseText;

        if(status === 200)
            return data;
    };

    Request.prototype.send = function(data, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open(this.method, this.path, true);
        xhr.onreadystatechange = function() {
            // Request finished
            if(xhr.readyState === 4)
                // Handling request status
                callback(Request.parseResponse(xhr));
        };
        xhr.send(data);
    };

    Request.prototype.applyParams = function(paramsObj) {
        var paramsStr = '?';
        for(var param in paramsObj)
            if(paramsObj.hasOwnProperty(param))
                paramsStr += param + paramsObj[param] + '&';
        this.path += paramsStr.length > 1 ? paramsStr.slice(0, paramsStr.length-1) : '';
    };

    function get(options, callback) {
        // Dict options with support for path string only
        if(typeof options === 'string')
            options = { path: options };

        options.method = Request.method.get;
        var req = new Request(options);
        req.send('', callback);
    }

    var Http = {
        name: 'Http',
        Entities: {
            Request: Request
        },
        get: get
    };

    global.App.AddUtility(Http);
})(window);