//node-modules/packages
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
// resources
import './App.css';

//custom
import Banner from './navigation/Banner';
import Nav from './navigation/Nav';
import Content from './content';

function App() {
  return (
    <div className="App">
        <Banner />
        <Router>
            <div>
            <Nav />
            <Content />
            </div>
        </Router>
    
    </div>
  );
}

export default App;
