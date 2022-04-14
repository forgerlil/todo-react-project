import React, {useState} from 'react';
import GitHubLogo from './pictures/github.svg';
import ToDoCard from './components/to-do-card';
import AddForm from './components/to-do-add-form';

// let incrementalId = 0;
const TODODATA = [
  {todo: 'Something', id: 0}

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
          <ToDoCard id={0} content='Text filler1'/>
          <ToDoCard id={1} content='Text filler2'/>
          <ToDoCard id={2} content='Text filler3'/>
          <ToDoCard id={3} content='Text filler4'/>
          <ToDoCard id={4} content='Text filler5'/>
          <ToDoCard id={5} content='Text filler6'/>
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
