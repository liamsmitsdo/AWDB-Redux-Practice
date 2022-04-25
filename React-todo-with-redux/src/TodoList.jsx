import React, {Component} from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from './actions'
import { Route } from "react-router-dom"
import NewTodoForm from './NewTodoForm'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(val){
        this.props.addTodo(val)
    }

    removeTodo(id){
        this.props.removeTodo(id)
    }

    render(){
        let todos = this.props.todos.map((todo, index) => <Todo removeTodo={this.removeTodo.bind(this, todo.id)} task={todo.task} key={index}/>)
        return (
            <div>
                <Route path="/todos/new" component={props => (
                    <NewTodoForm {...props} handleSubmit={this.handleAdd} />
                )} />
                <Route exact path="/todos" component={()=> <div><ul>{todos}</ul></div>} />
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps, { addTodo, removeTodo })(TodoList)