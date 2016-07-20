import React, { Component } from 'react'

export default class TextInput extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			
			<div>
				<input placeholder="typing something here..."></input>
				<button>Submit</button>
			</div>
		)
	}
}