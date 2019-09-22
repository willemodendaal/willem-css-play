//Imports: Dependencies (note we use ES6 in this file, allowed by the babel-register package).
const path = require('path');
require('babel-register');

//Webpack config
const config = {
    //Entry not required. Webpack4 reads /src/index.js as default entry file.
    //Output file config not required. Webpack4 outputs to /dist/main.js by default.
    //Minification/uglification config not required. Webpack4 'production' mode does optimization by default.
};

//Exports
module.exports = config;