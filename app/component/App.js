import React, { Component } from 'react';
import TextInput from './TextInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../action/actions';

class App extends Component {

  render() {
    return (
      <div>
        <TextInput addTodo={this.props.actions.addTodo}/>
        <TodoList todos={this.props.todos} actions={this.props.actions}/>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)