// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/polyfill");
require("@babel/register")({
  "presets": ["@babel/preset-env", "@babel/preset-react"]
});

// Import the rest of our application.
module.exports = require('./bin/www');
