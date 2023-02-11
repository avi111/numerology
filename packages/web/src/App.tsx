import './App.css';

import React, {useEffect, useState} from 'react';
// import firebase from "./firebase";

// firebase.functions().
const App = () => {
    const [response, setResponse] = useState();
    useEffect(() => {
        fetch("/api/v1/").then(res => res.json()).then(res => setResponse(res))
    })

    useEffect(() => {
        console.log(response);
    }, [response])

    return (
        <div className="App">
            <header className="App-header">
                {response && JSON.stringify(response)}
            </header>
        </div>
    )
};

export default App;
