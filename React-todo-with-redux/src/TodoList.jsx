import React, {Component} from 'react'
import Todo from './Todo'
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            task: ""
        }
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.dispatch({
            type: 'ADD_TODO',
            task: this.state.task
        })
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        let todos = this.props.todos.map((todo, index) => <Todo task={todo} key={index}/>)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task"> Task </label>
                    <input type="text"
                            name='task'
                            id='task' 
                            onChange={this.handleChange}/>
                    <button>Add a Todo</button>
                </form>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        todos: reduxState.todos
    }
}

export default connect(mapStateToProps)(TodoList)