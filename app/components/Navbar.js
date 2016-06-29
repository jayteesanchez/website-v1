import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick() {
    document.getElementByClassName('container').classList.remove('fadeIn animated');
    document.getElementByClassName('container').classList.add('fadeOut animated');
  }

  render() {
    return (
       <nav className="navbar fadeIn animated">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 xmargbot">
              <span className='navbar-header shake animated'>
                <Link to='/' className="navbar-brand">
                  <img id='name-brand' className=' col-xs-12 shake animated-8' src='/img/nameBrand.png'/>
                </Link>
              </span>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-4 col-md-offset-2'>
              <div className='col-xs-4 col-sm-4 col-md-4 no-margin'>
                <span role="presentation">
                <Link to='/resume' className='nav-links' id='resume'>
                  <img className='shake animated-5'  src='/img/newRes.png'/>
                </Link>
                </span>
              </div>
              <div className='col-xs-4 col-sm-4 col-md-4 no-margin'>
                <span role="presentation">
                  <Link to='/projects' className='nav-links' id='projects'>
                  <img className='shake animated-6' src='/img/newProj.png'/>
                  </Link>
                </span>
              </div>
              <div className='col-xs-4 col-sm-4 col-md-4 no-margin'>
                <span role="presentation">
                  <Link to='/technologies' className='nav-links' id='technologies'>
                  <img className='shake animated-7'  src='/img/newTech.png'/>
                  </Link>
                </span>
              </div>
            </div>
                       
          </div>
      </nav>
    );
  }
}

Navbar.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Navbar;
