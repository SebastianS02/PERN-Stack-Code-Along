import React, { Fragment } from "react";
import './App.css';

//components

import InputTodo from "./components/InputTodos";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div classname="container">
      <InputTodo />
      <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
