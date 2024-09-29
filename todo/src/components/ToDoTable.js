import '../styles/ToDoTable.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DuplicateWarningPopup({ setShowDuplicateWarning, handleAddToDo }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>Duplicate Todo</h2>
        <p>This todo already exists. Do you want to proceed?</p>
        <div className='buttons'>
        <button onClick={() => setShowDuplicateWarning(false)}>Cancel</button>
        <button onClick={handleAddToDo}>Add Anyway</button>
        </div>
      </div>
    </div>
  );
}

function ToDoTable() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showDuplicateWarning, setShowDuplicateWarning] = useState(false);
  const [sortOrder, setSortOrder] = useState('asc');

 const handleDeleteTodo = async (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this todo?');
    if (shouldDelete) {
      try {
        await axios.delete(`http://localhost:5000/todo/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

const handleEditTodo = async (id) => {
  const shouldEdit = window.confirm('Are you sure you want to edit this todo?');
  if (shouldEdit) {
    const updatedTodoText = prompt('Enter new todo text:');
    if (updatedTodoText !== null && updatedTodoText !== '') {
      try {
        const response = await axios.put(`http://localhost:5000/todo/${id}`, { todo_text: updatedTodoText });
        const updatedTodoItem = response.data;
        setTodos(todos.map(todo => todo.id === updatedTodoItem.id ? updatedTodoItem : todo));
      } catch (error) {
        console.log(error);
      }
    }
  }
};

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/todo');
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const checkDuplicateTodo = () => {
    const isDuplicate = todos.some(todo => todo.todo_text === newTodo);
    if (isDuplicate) {
      setShowDuplicateWarning(true);
    } else {
      handleAddToDo();
    }
  }

const handleAddToDo = async () => {
    try {
      if (newTodo.trim !== '') {
        const response = await axios.post('http://localhost:5000/todo', { todo_text: newTodo });
        const newTodoItem = response.data;
        setTodos(prevTodos => [...prevTodos, newTodoItem]);
        setNewTodo('');
      } else {
        const shouldEdit = window.confirm('You cannot add an empty todo!');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setShowDuplicateWarning(false);
    }
  };


  
 const handleKeyDown = event => {
    if (event.key === 'Enter') {
      checkDuplicateTodo();
    }
  };

const sortTodos = (todos, sortOrder) => {
  const sortedTodos = [...todos];
  sortedTodos.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.todo_text.localeCompare(b.todo_text);
    } else {
      return b.todo_text.localeCompare(a.todo_text);
    }
  });
  return sortedTodos;
};

const sortedTodos = sortTodos(todos, sortOrder);

return (
    <div className="todo-container">
      <h2 className='title'>ToDo List</h2>
      <div className="input-container">
        <input
          placeholder="Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={checkDuplicateTodo}>Add todo</button>
      </div>
      
      <div className="sort-buttons">
        <button onClick={() => setSortOrder('asc')}>Sort A-Z</button>
        <button onClick={() => setSortOrder('desc')}>Sort Z-A</button>
      </div>
      
      <div className="task-container">
        {showDuplicateWarning && (
          <DuplicateWarningPopup
            setShowDuplicateWarning={setShowDuplicateWarning}
            handleAddToDo={handleAddToDo}
          />
        )}
        {todos.length !== 0 ? (
          sortedTodos.map(todo => (
            <div className='single-task' key={todo.id}>
              <h1>{todo.todo_text}</h1>
              <button onClick={() => handleEditTodo(todo.id)}>&#9998;</button>
              <button onClick={() => handleDeleteTodo(todo.id)}>&#128465;</button>
            </div>
          ))
        ) : (
          <h1 className='no-ToDo-text'>No ToDo</h1>
        )}
      </div>
    </div>
  );
}

export default ToDoTable;
