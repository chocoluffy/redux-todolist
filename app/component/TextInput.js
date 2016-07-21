import React, { Component } from 'react'
import actions from '../action/actions'

export default class TextInput extends Component {
	constructor(props){
		super(props);
		this.state={
			inputText:''
		}
		this._onChange = this._onChange.bind(this);
		this._onClick = this._onClick.bind(this);
	}

	_onChange(event){
		this.setState({
			inputText: event.target.value
		})
	}

	_onClick(event){
		event.preventDefault();
		this.props.dispatch(actions.addTodo(this.state.inputText));
	}

	render(){
		return (
			
			<div>
				<input 
					placeholder="typing something here..."
					value={this.state.inputText}
					onChange={this._onChange}
				/>
				<button onClick={this._onClick}>Submit</button>
			</div>
		)
	}
}