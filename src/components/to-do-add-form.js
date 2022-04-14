import React, {useState} from 'react';

function Form (props) {
  const [getInput, setGetInput] = useState('');

  const handleChange = e => {
    if (getInput === '') {
    } else {
      setGetInput(e.target.value);
    }
  }

  const handleSubmit = e => {
      e.preventDefault();
  }

  return (
    <div className="row mb-3 to-do-input-section">
      <div className="input-group todo-input-wrapper">
        <form className="input-form" aria-label="Add To Do Form" onSubmit={handleSubmit}>
          <input type="text" className="form-control to-do-input" placeholder="Type in To-Do here" aria-label="To-Do input" value={getInput} onChange={handleChange}/>
          <button className="btn btn-secondary add-todo-btn" type="submit">Add To-Do</button>
        </form>
      </div>
      <div className="error-msg"></div>
    </div>
  )
}

export default Form;