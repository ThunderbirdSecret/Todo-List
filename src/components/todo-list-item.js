import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoItem extends Component {
  state = {//инициализируем состояние на прямую только 1 раз!, в конструкторе или теле класса
    done: false,      
    priority: false
  }

  onLabelClick = () => {
    this.setState(({done}) => { // метод для изменения/обновления состояния
      return {
        done: !done
      }
    });
  };

  onMarkPriority = () => {
    this.setState(({priority}) => {
      return {
      priority: !priority
      }
    });
  };

  render () {
  const { label, onDeleted } = this.props;
  const { done, priority } = this.state;

  let classNames = 'todo-list-item';
    if (done) {
      classNames += ' done'; //!!
    }

    if (priority) {
      classNames += 'priority'
    }

  return (
    <span className={classNames}>
      <span 
        className="todo-list-item-label"
        onClick={ this.onLabelClick }> 
        { label } 
      </span>
    
      <button type="button"
              className="btn btn-outline-success btn-sm float-left"
              onClick={this.onMarkPriority}>
                {priority}
        <i className="fa fa-fire" />
      </button>

    <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted} >
              <i className="fa fa-times" />
            </button>
    </span>
  );
};
}