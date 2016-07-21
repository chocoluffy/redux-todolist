import React, { Component } from 'react';
import TextInput from './TextInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
        <TextInput dispatch={this.props.dispatch}/>
        <TodoList todos={this.props.todos} dispatch={this.props.dispatch}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)