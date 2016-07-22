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

### Pressing "enter" don't automatically submit the input

It's more like a UX experience than a problem. In the traditional input and button structure:
```javascript
<input 
	placeholder="typing something here..."
	value={this.state.inputText}
	onChange={this._onChange}
/>
<button onClick={this._onClick}>Submit</button>
```
However, after user types in something in the input box, pressing "enter" key won't directly submit the input. Thus, we want to improve it by converting it into a form style to automate whole process:
```javascript
<form onSubmit={this._onClick}>
	<input 
		placeholder="typing something here..."
		value={this.state.inputText}
		onChange={this._onChange}
	/>
	<input type="submit" text="Submit"/>
</form>
```
Then, pressing "enter" key right after you finish typing should work!

### Render JSX with if-else logic control

Sometimes, we just want to render JSX depending on some state values like in Angular. We can simple assign JSX to variable inside `render()`, and note that we need a parathesis around JSX for assignment. This code snippet is used in [redux-todolist](https://github.com/chocoluffy/redux-todolist). Do note that to avoid confusion, I still use `.bind(this)` syntax below, but I recommend to put binding logic inside `constructor()`. 
```javascript
render(){
	var todoText;
	if(this.props.todo.isCompleted){
		todoText = (
			<div><s>{this.props.todo.text}</s></div>
		)
	}
	else{
		todoText = (
			<div>{this.props.todo.text}</div>
		)
	}
	return (
		<li>
			{todoText}
			<button onClick={this._onComplete.bind(this)} >Complete</button>
		</li>
	)
}
```
Some other times, in order to keep render function clean, we will move the render logic into another function to return JSX syntax and call that function inside `render()`, note that we don't need the `.bind(this)` syntax in this case! Because, the whole reason of using `.bind(this)` is that inside the _onClick handler function, the `this` will points to nothing(null), instead of the React component, which may causes the "this.props" not found error and the like. However, in this case, we simply return JSX syntax based on if-else logic, and we won't need the binding.
```javascript
renderTodoText(){
	if(this.props.todo.isCompleted){
		 return (
			<div><s>{this.props.todo.text}</s></div>
		)
	}
	else{
		return (
			<div>{this.props.todo.text}</div>
		)
	}
}

render(){
	return (
		<li>
			{this.renderTodoText()}
			<button onClick={this._onComplete} >Complete</button>
			<button onClick={this._onDelete}>Delete</button>
		</li>
	)
}
```
Check more information in [this post](http://devnacho.com/2016/02/15/different-ways-to-add-if-else-statements-in-JSX/).

