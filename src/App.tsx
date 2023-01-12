import React from 'react';
import {Testing} from './components/Test';
import { Person } from './components/Person';
import PersonsList from './components/PersonsList';
import AddvanceProps from './components/AddvanceProps';
import Heading from './components/reactnode/Heading';
import Button from './components/events/Button';
import Input from './components/events/Input';
import Container from './components/style/Container';
import User from './components/state/User';

const personName= {
  first: 'Mosh',
  last: 'Ali'
}
const personsName = [
  {
    first:'Kuddos',
    last: 'Ali'
  },
  {
    first: 'Umme',
    last: 'Habiba'
  }, 
  {
    first: 'Monir',
    last: 'Uddin'
  }
]

function App() {

  return (
    <div className="App">
      <Testing name= 'Sayed' msg={4} isLogged={true}/>
      <hr />
      <Person name={personName} />
      <PersonsList names={personsName} />
      <AddvanceProps />
      <Heading />
      <Button clickHandler={(event,id) => console.log('hello clicked',event,id)} />
      <Input value='hello world' changeHandler={(e) => console.log(e)} />
      <Container styles={{border:'1px solid red', padding:'1px'}} />
      <User name='sabbir' email='sabbirA@exple.com' />
    </div>
  );
}

export default App;
