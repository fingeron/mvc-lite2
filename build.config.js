const CONFIG = {
    AppFilesPath: './app/**/*.js',
    BuildDestination: './dist/',
    BuildOrder: [
        // Father object
        './core/MVCLite.js',

        // Framework Utilities
        './utilities/Http.js',

        // Base Objects
        './core/MVCLiteObject.js',
        './core/DynamicNode.js',

        // Core Entities
        './core/Template.js',
        './core/Component.js'
    ]
};

module.exports = CONFIG;