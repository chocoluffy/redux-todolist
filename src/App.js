import React, { Component } from 'react';
import TextInput from './TextInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';

export default class App extends Component {

  constructor(props){
  	super(props);
  	this.state={
  		title: 'hello world',
      todos: [{id: 1,text: 'first thing to do.'}]
  	}
  }

  render() {
    return (
      <div>
        <TextInput/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
};