
import './App.css';

import { Todo } from './components/Todo';

function App() {
  return (
    <div className="App">

      {/* 
      <div className="TodoInputBox">
        <button className="AddToInputButton">+</button>
        <input className="TodoInput" type="text" placeholder="Add a to do....."/>
      </div>

      <div className="AllTodoBox">
        <div className="CheckboxTodoItemBox">
          <input className="CheckboxForDone" type="checkbox"/>
          <p className="DoneItem">ABCD</p>
        </div>
      </div>

      <div className="ShowCompleted">ABCD</div>

      <div className="ShowCompletedBox">

        <div className="CheckboxCompletedTodoBox">
          <input className="ChecboxDone" type="checkbox" />
          <div className="DoneItemByDoneBox">
            <p className="Done">ABCD</p>
            <p className="DoneBy">ABCD</p>
          </div>
          <button className = "DeleteTodoButton">Delete</button>
        </div>
        <div className="CheckboxCompletedTodoBox">
          <input className="ChecboxDone" type="checkbox" />
          <div className="DoneItemByDoneBox">
            <p className="Done">ABCD</p>
            <p className="DoneBy">ABCD</p>
          </div>
          <button className = "DeleteTodoButton">Delete</button>
        </div>
        <div className="CheckboxCompletedTodoBox">
          <input className="ChecboxDone" type="checkbox" />
          <div className="DoneItemByDoneBox">
            <p className="Done">ABCD</p>
            <p className="DoneBy">ABCD</p>
          </div>
          <button className="DeleteTodoButton">Delete</button>
        </div>
        <div className="CheckboxCompletedTodoBox">
          <input className="ChecboxDone" type="checkbox" />
          <div className="DoneItemByDoneBox">
            <p className="Done">ABCD</p>
            <p className="DoneBy">ABCD</p>
          </div>
          <button className = "DeleteTodoButton">Delete</button>
        </div>
        <div className="CheckboxCompletedTodoBox">
          <input className="ChecboxDone" type="checkbox" />
          <div className="DoneItemByDoneBox">
            <p className="Done">ABCD</p>
            <p className="DoneBy">ABCD</p>
          </div>
          <button className = "DeleteTodoButton">Delete</button>
        </div>
        <div className="CheckboxCompletedTodoBox">
          <input className="ChecboxDone" type="checkbox" />
          <div className="DoneItemByDoneBox">
            <p className="Done">ABCD</p>
            <p className="DoneBy">ABCD</p>
          </div>
          <button className = "DeleteTodoButton">Delete</button>
        </div>
        <div className="CheckboxCompletedTodoBox">
          <input className="ChecboxDone" type="checkbox" />
          <div className="DoneItemByDoneBox">
            <p className="Done">ABCD</p>
            <p className="DoneBy">ABCD</p>
          </div>
          <button className = "DeleteTodoButton">Delete</button>
        </div>
      </div> 
      */}

      <Todo />
    </div>
  );
}

export default App;