import React from 'react';
import './todo-list-item.css';

const TodoItem = ( {label, Im = false }) => {

  const Style = {
    color: Im ? 'pink' : 'black',
    fontWeight: Im ? 'bold' : 'normal'
  };

  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label"
        style={Style}> 
        { label } 
      </span>
    
      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

    <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
              <i className="fa fa-trash-o" />
            </button>
    </span>
  );
};

export default TodoItem;