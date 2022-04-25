import TodoList from './TodoList'
import {Link, Route, Redirect} from 'react-router-dom'
import NewTodoForm from './NewTodoForm'

function App() {

  return (
    <div className="App">
      <h1>See Our Todos!</h1>
      <p>
        <Link to="/todos">See my todos</Link>
      </p>
      <p>
        <Link to="/todos/new">Add a todos</Link>
      </p>
        <Route path="/todos" component = {TodoList}/>
        <Route exact path="/" render={() => <Redirect to="/todos"/>}/>
    </div>
  )
}

export default App
