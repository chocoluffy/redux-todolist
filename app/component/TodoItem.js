import React, { Component } from 'react'
import actions from '../action/actions'

class TodoItem extends Component {
	constructor(props){
		super(props);
		this._onComplete = this._onComplete.bind(this);
		this._onDelete = this._onDelete.bind(this);
	}

	_onComplete(){
		this.props.dispatch(actions.completeTodo(this.props.todo.id))
	}

	_onDelete(){
		this.props.dispatch(actions.removeTodo(this.props.todo.id))
	}
	

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
				<button onClick={this._onComplete} >Complete</button>
				<button onClick={this._onDelete}>Delete</button>
			</li>
		)
	}
}

export default TodoItem
