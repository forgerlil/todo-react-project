import React from 'react';

function Filters () {
  

  return (
    <div className="row">
      <div className="filter-wrapper p-0" aria-label="Filter to-dos">
        <button type="button" className="btn btn-outline-secondary filter-btn current active">Active</button>
        <button type="button" className="btn btn-outline-secondary filter-btn complete">Complete</button>
        <button type="button" className="btn btn-outline-secondary filter-btn all-todos">All To-Dos</button>
      </div>
    </div>
  )
}

export default Filters;