import React          from 'react';
import {RouteHandler} from 'react-router';
import Navbar         from './Navbar';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar fadeIn animated">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 xmargbot">
              <span className='navbar-header shake animated'>
                  <img id='name-brand' className=' col-xs-12 shake animated-8' src='/img/nameBrand.png'/>
              </span>
            </div>
          </div>
        </nav>
        <div className='container fadeIn animated'>
          <div className='col-xs-10 col-sm-10 col-md-8 col-md-offset-2' style={{paddingBottom: '200px;'}}>
            <div className="panel panel-default text-center">
              <br></br>
              <text className='project-title'>Under Construction...Please Check out my  <a href="https://www.linkedin.com/in/jayteesanchez">Linked-In!</a></text>
              <br></br>
              <br></br>
            </div>      
          </div>      
        </div>
      </div>
    );
  }
}

export default App;
