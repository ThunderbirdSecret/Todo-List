import React from 'react';
import './head-app.css';

const HeadApp = ({toDo, done}) => {
  return ( <div className="head-app d-flex">
  <h1>TodoList</h1>
  <h2> {toDo} give me more, {done} done</h2>
  </div>
  );
};

export default HeadApp;