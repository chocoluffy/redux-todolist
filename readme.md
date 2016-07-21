## Trouble Shooting

### Why my jsx element not showing correctly?
[config sublime text to highlight jsx](http://gunnariauvinen.com/getting-es6-syntax-highlighting-in-sublime-text/)

### Anything about ES6 syntax error by browser.
For example, `store.js:1 Uncaught SyntaxError: Unexpected token import`, check[this post](http://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token) for more information about babel plugins, however, we also need to pay attention to the path that plugins take effect. For example, in the "webpack.config.js" file, the module part looks like this:
```javascript
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    }]
  }
```
It means that "react-hot" && "babel" will collect files from "/src" folder and apply two loaders on it. Thus, any folder outside the path the "/src" will be ignored by loaders. In our original example, store.js is located outside "/src", thus the `import` syntax will not be converted into es2015 that browser can recognize, thus gives such error. 