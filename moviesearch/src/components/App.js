import '../App.css';
import React from 'react'
import Nav from './Nav'
import Search from './Search';

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Nav />
      <Search />

    </div>
  );
  }
}

export default App;
