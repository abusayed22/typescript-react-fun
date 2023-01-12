import React from 'react';
import {Testing} from './components/Test';
import { Person } from './components/Person';
import PersonsList from './components/PersonsList';

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
      <Testing name= 'Sayed' msg={11} isLogged={false}/>
      <hr />
      <Person name={personName} />
      <PersonsList names={personsName} />
    </div>
  );
}

export default App;
