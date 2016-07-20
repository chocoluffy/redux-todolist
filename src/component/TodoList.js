import React, { Component } from 'react'

export default class TodoList extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<ul>
			
			{
				this.props.todos.map((todo) => {
					return (
						<li key={todo.id}>{todo.text}</li>
					)
				})
			}
			</ul>
		)
	}
}