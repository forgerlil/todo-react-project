import React from 'react';

function NavBar() {
  const handleSubmit = e => {
    e.preventDefault();
  }
  
  return (
    <nav className="d-flex text-light">
      <h1 className="text-light">My To-Do List</h1>
      <form className="d-flex todo-search" onSubmit={handleSubmit}>
        <input className="form-control todo-search-input" type="search" placeholder="Search To-Dos" aria-label="Search" />
        <button className="btn btn-outline-light my-0 todo-search-btn" type="submit">Search</button>
      </form>
    </nav>
  )
}

export default NavBar;