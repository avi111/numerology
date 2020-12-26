import logo from './logo.svg'
import './App.css'
import {Profile} from "./numerologyEngine";

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
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
