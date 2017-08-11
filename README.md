# Webpack for React setup

### Modules used
- React - used for building React applications
- React DOM - used for rendering React Components on the DOM
- Webpack - the build tool of choice for this project
- Babel Core - the babel transpiler itself
- Babel Loader - the webpack loader used to transform our JS files

> **Note:**
> - Babel is modular and is split up into plugins and presents
> - In order to compile various features in a React project, like JSX and ES2015, we'll need to install the Babel presets for React and ES2015

- Babel-Preset-React - used to transform JS within React
- Babel-Preset-ES2015 - used to translate ES2015 syntax into ES5

### Babel configuration
We need to instruct Babel to use the presets in our project. 
Therefore, a babel config file (`.babelrc`) is required.

### Webpack configuration
Information related to your build process will be defined within webpack.
Specifically in a file `webpack.config.js`

### Project Installation
Assuming you have Node and NPM installed, run: `npm install`

### Build project
To build the project, run: `npm run build` and then open index.html in a browser to see the application.