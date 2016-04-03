import React from 'react';

import ListItem from './listItem';

export default class List extends React.Component {
 renderList() {
   return this.props.items.map((item) => {
     return <li key={item.id}>{item.text}</li>
   });
 }


 render() {
   return (
   <ul>
     {this.renderList()}
   </ul>
   );
 }
}