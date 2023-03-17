import { Component } from 'react';
import { Contact } from './Contact/Contact';
import { Section } from './Section/Section';


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
    return (
      <>
        <Section title="Phonebook" />
        <Contact onSubmit={this.addContact} />
        <Section title="Contacts" />
      </>
    );
  }
}
