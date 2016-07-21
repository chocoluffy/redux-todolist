import React, { Component } from 'react'
import actions from '../action/actions'

export default class TodoList extends Component {
	constructor(props){
		super(props);
		this._onClick = this._onClick.bind(this);
	}

	_onClick(event){
		event.preventDefault();
		this.props.dispatch(actions.removeAll())
	}

	render(){
		return (
			<div>
				<ul>
				{
					this.props.todos.map((todo) => {
						return (
							<li key={todo.id}>{todo.text}</li>
						)
					})
				}
				</ul>
				<button onClick={this._onClick}>Remove All</button>
			</div>
		)
	}
}