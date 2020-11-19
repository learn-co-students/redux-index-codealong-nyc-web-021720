import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {
 
	render() {
	console.log(this.props.todos)
    return(
	<div>{this.props.todos.map(todo => <Todo text={todo}/>)}</div>
    );
  }
};
 
const mapStateToProps = state => {
	return {
	  todos: state.todos
	}
  }
   
  export default connect(mapStateToProps)(TodosContainer);