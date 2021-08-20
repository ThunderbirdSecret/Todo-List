import React, {Component} from 'react';
//import './item-status.css';

export default class ItemStatus extends Component {
render() {
  return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-secondary">All</button>
        <button type="button"
                className="btn btn-outline-secondary">Active</button>
        <button type="button"
                className="btn btn-outline-secondary">Done</button>
      </div>
    );
  };
}