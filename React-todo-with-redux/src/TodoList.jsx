import React, {Component} from 'react'
import Todo from './Todo'
import { connect } from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        let todos = this.state.todos.map((todo, index) => <Todo task={todo} key={index}/>)
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

export default connect()(TodoList)