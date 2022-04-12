import React from 'react';

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
        <div className="row mb-3 to-do-input-section">
          <div className="input-group todo-input-wrapper">
            <input type="text" className="form-control to-do-input" placeholder="Type in To-Do here" aria-label="To-Do input" />
            <button className="btn btn-secondary add-todo-btn" type="button">Add To-Do</button>
          </div>
          <div className="error-msg"></div>
        </div>
        <div className="row">
          <div className="filter-wrapper p-0" aria-label="Filter to-dos">
            <button type="button" className="btn btn-outline-secondary filter-btn current active">Active</button>
            <button type="button" className="btn btn-outline-secondary filter-btn complete">Complete</button>
            <button type="button" className="btn btn-outline-secondary filter-btn all-todos">All To-Dos</button>
          </div>
        </div>
        <div className="to-do-grid mt-5 row">
          <div className="to-do-card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card to-do-card px-2 py-1" id="card1">
              <div className="card-body">
                <input type="checkbox" name="to-do-checkbox" id="to-do-checkbox1" className="to-do-checkbox" />
                <label for="to-do-checkbox1" className="card-body">Lorem ipsum dolor sit amet</label>
             </div>
           </div>
          </div>
          <div className="to-do-card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card to-do-card px-2 py-1" id="card2">
              <div className="card-body">
                <input type="checkbox" name="to-do-checkbox" id="to-do-checkbox2" className="to-do-checkbox" />
                <label for="to-do-checkbox2" className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</label>
              </div>
            </div>
          </div>
          <div className="to-do-card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card to-do-card px-2 py-1" id="card3">
              <div className="card-body">
                <input type="checkbox" name="to-do-checkbox" id="to-do-checkbox3" className="to-do-checkbox" />
                <label for="to-do-checkbox3" className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet</label>
              </div>
            </div>
          </div>
          <div className="to-do-card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card to-do-card px-2 py-1" id="card4">
              <div className="card-body">
                <input type="checkbox" name="to-do-checkbox" id="to-do-checkbox4" className="to-do-checkbox" />
                <label for="to-do-checkbox4" className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</label>
              </div>
            </div>
          </div>
          <div className="to-do-card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card to-do-card px-2 py-1" id="card5">
              <div className="card-body">
                <input type="checkbox" name="to-do-checkbox" id="to-do-checkbox5" className="to-do-checkbox" />
                <label for="to-do-checkbox5" className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</label>
              </div>
            </div>
          </div>
          <div className="to-do-card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
            <div className="card to-do-card px-2 py-1" id="card6">
              <div className="card-body">
                <input type="checkbox" name="to-do-checkbox" id="to-do-checkbox6" className="to-do-checkbox" />
                <label for="to-do-checkbox6" className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit</label>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-light">
        <p>Check the code on our repository on Github:</p>
        <a className="mb-2" href="https://github.com/forgerlil/todo-oop-react">
          <img src="pictures/github.svg" alt="Github Logo"/>
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
