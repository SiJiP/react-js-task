import './todoListItems.scss'
import React from 'react';

const todoListItems = props => (
  <ul className="todoListItems">
    {
      props.items.map((item, index) => <li key={index}>{item}</li>)
    }
  </ul>
);

export default todoListItems;