import React from 'react';
import ReactDom from 'react-dom';
import HeadApp from './components/head-app';
import ToDoList from './components/todo-list';
import InputApp from './components/input-app';
import ItemStatus from './components/item-status';
import './index.css';

const App = () => {
  const todoData = [
      { label: 'Walk with dog morning', Im: false, id: 1 },
      { label: 'Drink tea with sugar', Im: false, id: 2  },
      { label: 'Create app', Im: true, id: 3 }
  ];
   return (  
    <div className="todo-app">
    <HeadApp toDo={1} done={3} />
    <div className="top-panel d-flex">
    <InputApp />    
    <ItemStatus />
    </div>

    <ToDoList todos={todoData} />
    </div>
 );
};

//const el = React.createElement('h2', null, 'look at me!');

ReactDom.render(<App />, document.getElementById('root')); 