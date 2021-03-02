import logo from './logo.svg'
import './App.css'
import {Profile} from "./numerologyEngine";
import { Button } from '@material-ui/core';

function App() {
  const props = {
    birthDate: new Date('1980-9-16'),
    familyName: 'לבקוביץ',
    fatherName: 'יעקב',
    fatherNameAtBirthOfPatient: '',
    firstName: 'אבי',
    firstNameAtBirth: '',
    gender: 'male',
    motherName: 'טובה',
    motherNameAtBirthOfPatient: '',
    birthHour: false,
  };

  const profile = new Profile(props);

  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(profile.props.firstName)}</p>
        <Button>goliath</Button>
      </header>
    </div>
  );
}

export default App;
