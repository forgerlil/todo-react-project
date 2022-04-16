import React from 'react';
import NewToDo from './to-do-card';

const TODODATA = [
    {todo: 'First To-Do', id: 0},
    {todo: 'Second To-Do', id: 1},
    {todo: 'Third To-Do', id: 2},
    {todo: 'Fourth To-Do', id: 3},
    {todo: 'Fifth To-Do', id: 4},
    {todo: 'Sixth To-Do', id: 5}
  ]
  

function ToDoGrid() {
  return (
    <div className="to-do-grid mt-5 row">
      <NewToDo id={TODODATA[0].id} content={TODODATA[0].todo}/>
      <NewToDo id={TODODATA[1].id} content={TODODATA[1].todo}/>
      <NewToDo id={TODODATA[2].id} content={TODODATA[2].todo}/>
      <NewToDo id={TODODATA[3].id} content={TODODATA[3].todo}/>
      <NewToDo id={TODODATA[4].id} content={TODODATA[4].todo}/>
      <NewToDo id={TODODATA[5].id} content={TODODATA[5].todo}/>
    </div>
  )
}

export default ToDoGrid;