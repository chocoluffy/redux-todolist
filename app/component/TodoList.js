import React, { Component } from 'react'
import actions from '../action/actions'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
	constructor(props){
		super(props);
		this._onClick = this._onClick.bind(this);
	}

	_onClick(event){
		event.preventDefault();
		this.props.actions.removeAll()
	}

	render(){
		return (
			<div>
				<ul>
				{
					this.props.todos.map((todo) => {
						return (
							<TodoItem key={todo.id} todo={todo} actions={this.props.actions} />
						)
					})
				}
				</ul>
				<button onClick={this._onClick}>Remove All</button>
			</div>
		)
	}
}