import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <div className="input-group">
        <span className="input-group-addon">
          <input
            type="checkbox"
          />
        </span>
          <input
            type="text"
            className="form-control"
          />
        <span className="input-group-btn">
          <button className="btn btn-danger">
            Delete
          </button>
        </span>
      </div>
    );
  }
}