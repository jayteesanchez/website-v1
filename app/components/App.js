import React          from 'react';
import {RouteHandler} from 'react-router';
import Navbar         from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <RouteHandler />
        <footer></footer>
      </div>
    );
  }
}

export default App;
