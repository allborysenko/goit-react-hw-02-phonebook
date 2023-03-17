import { Component } from 'react';
import { Contact } from './Contact/Contact';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  addContact = (data) => {
    
    console.log('data', data);
 
}

  render() {
    return <>
      <Contact onSubmit={this.addContact} />
    </>;
  }
}
