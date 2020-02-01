import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container'
import List from './components/List'

function App() {
  return (
    <div>
      <h1>from component proj</h1>
      <Container>
        <List/>
      </Container>
    </div>
  );
}

export default App;
