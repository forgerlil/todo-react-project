import React, {useState} from 'react';
import {nanoid} from 'nanoid';

function Form ({addTodo}) {
  const [getInput, setGetInput] = useState({
    id: '', 
    todo: '', 
    completed: false
  });

  let errorMsg = '';

  const handleChange = e => {
    setGetInput({...getInput, todo: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (getInput.todo.trim()) {
      addTodo({...getInput, id:`todo-${nanoid()}`});
      setGetInput({...getInput, todo: ''});
    }
  }

  return (
    <div className="row mb-3 to-do-input-section">
      <form className="input-group todo-input-wrapper" aria-label="Add To Do Form" onSubmit={handleSubmit}>
        <input type="text" name="To-do input" className="form-control to-do-input" placeholder="Type in To-Do here" aria-label="To-Do input" value={getInput.todo} onChange={handleChange}/>
        <button className="btn btn-secondary add-todo-btn" type="submit">Add To-Do</button>
      </form>
      <div className="error-msg">{getInput === '' ? errorMsg : ''}</div>
    </div>
  )
}

export default Form;