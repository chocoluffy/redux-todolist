import React, { Component } from 'react';
import TextInput from './TextInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../action/actions';
import UserInfo from './UserInfo';


class App extends Component {

  render() {
    return (
      <div>
      	<UserInfo user={this.props.user} changeUserID={this.props.actions.changeUserID}/>
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