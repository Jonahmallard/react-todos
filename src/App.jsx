import { useState } from 'react';
import styles from './App.module.css';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ todo: '', completed: false });

  const handleSubmit = () => {
    setTodos([...todos, newTodo]);
    setNewTodo({
      todo: '', completed: false
    })
    // const updatedTodos = [...todos];
    // updatedTodos.push(newTodo);
    // setTodos(updatedTodos);
  }

  const handleToggle = idx => {
    const todosCopy = [...todos];
    todosCopy[idx].completed = !todosCopy[idx].completed;
    setTodos(todosCopy);
  } 

  return (
    <div className="App">
      <h1>Todos</h1>
      <div>
        <input type="text" value={newTodo.todo} onChange={evt => setNewTodo({...newTodo, ...{todo: evt.target.value}})}/>
        <button onClick={handleSubmit} className={styles.button}>Add</button>
      </div>
      {todos.length ? (
        <div>
          <h2>Here are your todos!</h2>
          {todos.map((todo, idx) => (
            <div
              style={{ color: todo.completed ? 'green' : 'red' }}
              onClick={() => handleToggle(idx)}
              className='toggle'
            >
              {todo.todo}
            </div>
          ))}
        </div>
      ) : (
        <h2>No Todos yet!</h2>
      )}
    </div>
  );
}

export default App;
