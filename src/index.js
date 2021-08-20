import React, { Component } from 'react';
import ReactDom from 'react-dom';
import HeadApp from './components/head-app';
import ToDoList from './components/todo-list';
import InputApp from './components/input-app';
import ItemStatus from './components/item-status';
import ItemAddForm from './item-add'; 
import './index.css';

export default  class App extends Component {

  maxId = 100;
  
  state = { 
    todoData: [
      { label: 'Walk with dog morning', Im: false, id: 1 },
      { label: 'Drink tea with sugar', Im: false, id: 2  },
      { label: 'Create app', Im: false, id: 3 }
  ] 
};

 deleteItem = (id) => {
  this.setState(( { todoData }) => {
    const idfind = todoData.findIndex((el) => el.id === id);

    const newtodoData = [
      ...todoData.slice(0, idfind), 
      ...todoData.slice(idfind + 1)
    ];

    return {
      todoData: newtodoData
    }  
  });
};

addItem = (text) => {
  const newItem = {//генерировать id
    label: text,
    priority: false,
    id: this.maxId++
  }
  
  this.setState(({todoData}) => { //добавить эл в массив
    const newAdd = [ 
      ...todoData,
      newItem
    ];
    return { todoData: newAdd }
  })
};

  render(){
     return (  
      <div className="todo-app">
      <HeadApp toDo={1} done={3} />
      <div className="top-panel d-flex">
      <InputApp />    
      <ItemStatus />
      </div>

      <ToDoList todos={this.state.todoData}
      onDeleted={ this.deleteItem} />
      < ItemAddForm addItem={ this.addItem } />
      </div>

      
    );
  };
}
//const el = React.createElement('h2', null, 'look at me!');

ReactDom.render(<App />, document.getElementById('root')); 