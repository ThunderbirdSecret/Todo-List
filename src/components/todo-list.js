import React from 'react';
import TodoItem from './todo-list-item';
import './todo-list.css';

const ToDoList = ({todos}) => {
  const elements = todos.map((Item) => {
    const { id, ...ItemProps} = Item;
    return (
    <li key={id} className="list-group-item">
      <TodoItem {... ItemProps} />
    </li>
    );
  });
  
  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
  };

  export default ToDoList;