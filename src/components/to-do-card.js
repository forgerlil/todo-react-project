import React from 'react';

// props needs to be the input from the add-to-do-input field
// this is called on an onClick/Enter keypress on the add-to-do-input field or add-to-do-input btn
function NewToDo (props) {
  let CheckboxId = `to-do-checkbox${props.id}`;
  let CardId = `card${props.id}`;
  let toDoContent = props.content;
  
  return (
    <div className="to-do-card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className="card to-do-card px-2 py-1" id={CardId}>
        <div className="card-body">
          <input type="checkbox" name="to-do-checkbox" id={CheckboxId} className="to-do-checkbox" />
          <label htmlFor={CheckboxId} className="card-body">{toDoContent}</label>
        </div>
      </div>
    </div>
  )
}

export default NewToDo;