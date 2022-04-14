import React, {useState} from 'react';
import GitHubLogo from './pictures/github.svg';
import ToDoCard from './components/to-do-card';
import AddForm from './components/to-do-add-form';

// let incrementalId = 0;
const TODODATA = [
  {todo: 'First To-Do', id: 0},
  {todo: 'Second To-Do', id: 1},
  {todo: 'Third To-Do', id: 2},
  {todo: 'Fourth To-Do', id: 3},
  {todo: 'Fifth To-Do', id: 4},
  {todo: 'Sixth To-Do', id: 5}
]


function App() {



  return (
    <div>
      <header>
        <nav className="d-flex text-light">
          <h1 className="text-light">My To-Do List</h1>
          <form className="d-flex todo-search">
            <input className="form-control todo-search-input" type="search" placeholder="Search To-Dos" aria-label="Search" />
            <button className="btn btn-outline-light my-0 todo-search-btn" type="submit">Search</button>
          </form>
        </nav>
      </header>
      <main className="container overflow-hidden">
        <AddForm />
        <div className="row">
          <div className="filter-wrapper p-0" aria-label="Filter to-dos">
            <button type="button" className="btn btn-outline-secondary filter-btn current active">Active</button>
            <button type="button" className="btn btn-outline-secondary filter-btn complete">Complete</button>
            <button type="button" className="btn btn-outline-secondary filter-btn all-todos">All To-Dos</button>
          </div>
        </div>
        <div className="to-do-grid mt-5 row">
          <ToDoCard id={TODODATA[0].id} content={TODODATA[0].todo}/>
          <ToDoCard id={TODODATA[1].id} content={TODODATA[1].todo}/>
          <ToDoCard id={TODODATA[2].id} content={TODODATA[2].todo}/>
          <ToDoCard id={TODODATA[3].id} content={TODODATA[3].todo}/>
          <ToDoCard id={TODODATA[4].id} content={TODODATA[4].todo}/>
          <ToDoCard id={TODODATA[5].id} content={TODODATA[5].todo}/>
        </div>
      </main>
      <footer className="text-light">
        <p>Check the code on our repository on Github:</p>
        <a className="mb-2" href="https://github.com/forgerlil/todo-react-project">
          <img src={GitHubLogo} alt="Github Logo"/>
        </a>
        <p>© 2022 Copyright:</p>
        <div className="mb-2 collabs">
          <img src="https://avatars.githubusercontent.com/u/81853712?v=4" alt="Collaborator Lilian Forger" title="Collaborator Lilian Forger"/>
          <img src="https://avatars.githubusercontent.com/u/99274158?v=4" alt="Collaborator Maria Blanco" title="Collaborator Maria Blanco"/>
          <img src="https://avatars.githubusercontent.com/u/101398734?v=4" alt="Collaborator Nina Schmidt" title="Collaborator Nina Schmidt"/>
          <img src="https://avatars.githubusercontent.com/u/100858519?v=4" alt="Collaborator Uma Harish" title="Collaborator Uma Harish"/>
        </div>
      </footer>
      <script src="main.js"></script>
    </div>
  );
}

export default App;
