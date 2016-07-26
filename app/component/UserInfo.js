import React, { Component } from 'react'
import actions from '../action/actions'

class UserInfo extends Component {
	constructor(props){
		super(props);
		this._onClick = this._onClick.bind(this);
	}

	_onClick(event){
		event.preventDefault();
		this.props.changeUserID();
	}

	render(){
		return (
			<div>
				<h1>{this.props.user.username}</h1>
				<h2>{this.props.user.userID}</h2>
				<button onClick={this._onClick}>Change User ID</button>
			</div>
		)
	}
}

export default UserInfo
