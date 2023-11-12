import Counter from './Counter.js'
import './App.css';
import Todolist from './TodoList.js';
import NoteList from './NoteList.js';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Counter/>
        </div>
        <div className="col-3">
          <Todolist/>
        </div>
        <div className="col-3">
          <NoteList/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
