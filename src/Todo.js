import React from "react";
import "./todo.css";
import uuid from 'uuid';
import {connect} from 'react-redux';
import {addTodo} from './actions/todoActions';
import {removeTodo} from './actions/todoActions';
import {changeTodo} from './actions/todoActions';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      list: [],
    };
  }
  Changeinput = e => {
    this.setState({
      text: e.target.value
    });
  };
  Addbutton = () => {
    let newTodo={
      text:this.state.text, 
      id:uuid(),
      complete:false

    };
    this.props.addNewTodo(newTodo);
    this.setState({text: "" });
      
  };
  
  complet = id => {
    this.props.ChangeTodo(id);
  };
  delete = id => {
    this.props.RemoveTodo(id);
  };
  render() {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 className="display-4">To-do App !</h1>
          <p>Add new to-Do</p>
          <input
            value={this.state.text}
            className="form-control form-control-lg"
            type="text"
            placeholder="Enter new task"
            onChange={this.Changeinput}
          />
          <a
            className="btn btn-primary btn-lg btt"
            href="#"
            role="button"
            onClick={this.state.text !== "" && this.Addbutton}
          >
            Add
          </a>
        </div>
        <h2>Let's get some work Done !</h2>
        {this.props.todos.map(el => (
          <div className="liste">
            <h5 className={el.complete ? "Complete" : "Undo"}>{el.text}</h5>
            <button onClick={() => this.delete(el.id)}>Delete</button>
            <button onClick={() => this.complet(el.id)}>
              {!el.complete ? "Complete" : "Undo"}
            </button>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todosReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewTodo: newTodo => dispatch(addTodo(newTodo)),
    RemoveTodo: id=> dispatch(removeTodo(id)),
    ChangeTodo: id=> dispatch(changeTodo(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);