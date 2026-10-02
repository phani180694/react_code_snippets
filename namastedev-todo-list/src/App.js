import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoItem = () => {
    if (input.trim() === "") return;
    const item = {
      id: todoList.length + 1,
      text: input,
      completed: false,
    };
    setTodoList((prev) => [...prev, item]);
    setInput("");
  };

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map((x) => {
        if (x.id === id) {
          return {
            ...x,
            completed: !x.completed,
          };
        } else {
          return x;
        }
      }),
    );
  };

  const deletetodo = (id) => {
    setTodoList(
      todoList.filter((x) => {
        return x.id !== id;
      }),
    );
    return todoList;
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={(e) => {
          addTodoItem();
        }}
      >
        add
      </button>
      <ul>
        {todoList.map((x) => (
          <li key={x.id}>
            <input
              type="checkbox"
              checked={x.completed}
              onChange={() => toggleCompleted(x.id)}
            />
            <span className={x.completed ? "strikeThrough" : ""}>{x.text}</span>
            <button onClick={(id) => deletetodo(x.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
