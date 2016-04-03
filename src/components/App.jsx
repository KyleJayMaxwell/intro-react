import React from 'react';
import { Component } from 'react';

import Header from './header';
import List from './list';

export default class App extends Component {
 constructor(props) {
   super(props)
   this.state = {
     items: []
   }

   this.onAddClick = this.onAddClick.bind(this);
 }

 onAddClick(newItem) {
   this.setState({
     items: this.state.items.concat([newItem])
   });
 }

 render() {
   return (
     <div className="text-center">
       <h1>My Todo List</h1>
       <Header add={this.onAddClick} />
       <List items={this.state.items}/>
     </div>
   );
 }
}