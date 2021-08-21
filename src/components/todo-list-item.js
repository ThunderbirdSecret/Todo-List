import React from 'react';
import './todo-list-item.css';

const TodoListItem = ({ important, done,
  label, onToggleImportant, onToggleDone, onDelete }) => {

let classNames = 'todo-list-item';
if (important) {
classNames += ' important';
}

if (done) {
classNames += ' done';
}


return (
<span className={classNames}>
  <span
    className="todo-list-item-label"
    onClick={onToggleDone}>{label}</span>

  <button type="button"
          className="btn btn-outline-warning btn-sm float-left"
          onClick={onToggleImportant}>
    <i className="fa fa-flag"></i>
  </button>

  <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDelete}>
    <i className="fa fa-times"></i>
  </button>
</span>
);
};

export default TodoListItem;
