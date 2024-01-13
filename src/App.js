import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDo, setTodo] = useState('');
  const [toDos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const handleDeleteItem = (id) => {
    setTodos(toDos.filter((obj) => obj.id !== id));
    setCompletedTodos(completedTodos.filter((obj) => obj.id !== id));
  };

  const handleCheckboxChange = (id, checked) => {
    setTodos(
      toDos.map((obj) => {
        if (obj.id === id) {
          obj.status = checked;
        }
        return obj;
      })
    );

    if (checked) {
      const completedTodo = toDos.find((obj) => obj.id === id);
      setCompletedTodos([...completedTodos, completedTodo]);
    } else {
      setCompletedTodos(completedTodos.filter((obj) => obj.id !== id));
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([
              ...toDos,
              { id: Date.now(), text: toDo, status: false },
            ])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className="todo" key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => handleCheckboxChange(obj.id, e.target.checked)}
                checked={obj.status}
                type="checkbox"
                name=""
                id=""
              />
              <p>{obj.text}</p>
            </div>
            <div className="right" onClick={() => handleDeleteItem(obj.id)}>
              <i className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
      <div className="completedTodos">
        <h3>Completed Tasks</h3>
        {completedTodos.map((obj) => (
          <div className="completedTodo" key={obj.id}>
            <p>{obj.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
