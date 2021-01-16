import React from 'react';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
import { BrowserRouter as Router } from "react-router-dom";
import List from './components/List';
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-lg-8 offset-lg-2">
          <List />
        </div>
      </div>
    </Router >
  );
}

export default App;
