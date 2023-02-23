import React, {useState} from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const[todos, setTodos] = useState ([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'Abdulloh' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'Abdurrohman' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'Abdulloh' },
    { rowNumber: 4, rowDescription: 'Charge phone battery', rowAssigned: 'Abdurrohman' }
  ]
  )

  const addTodo = (description, assigned) => {
    if (todos.length > 0){
      const newTodo = {
        rowNumber:todos.length+1,
        rowDescription: description,
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo])
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm/>
        </div>
      </div>
    </div>
  );
}

export default App;
