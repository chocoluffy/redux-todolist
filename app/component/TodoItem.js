import React, { Component } from 'react'
import actions from '../action/actions'

class TodoItem extends Component {
	constructor(props){
		super(props);
		this._onComplete = this._onComplete.bind(this);
		// this._onDelete = this._onDelete.bind(this);
	}

	_onComplete(){
		this.props.dispatch(actions.completeTodo(this.props.todo.id))
	}

	// _onDelete(){
	// 	this.props.dispatch(actions.removeTodo(this.props.todo.id))
	// }

	render(){
		console.log(this);
		return (
			<li>
				<div>{this.props.todo.text}</div>
				<button onClick={this._onComplete} >Complete</button>
			</li>
		)
	}
}

export default TodoItem
