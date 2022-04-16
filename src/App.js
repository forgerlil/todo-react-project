import React, {useState} from 'react';
import NavBar from './components/nav-bar'
import ToDoGrid from './components/to-do-list';
import AddForm from './components/to-do-form';
import Filters from './components/filter-section';
import Footer from './components/footer';


function App() {
  const [todos, setTodos] = useState([]);

  function addToDos (todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <>
      <NavBar />
      <main className="container overflow-hidden">
        <AddForm newToDo={addToDos}/>
        <Filters />
        <ToDoGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
