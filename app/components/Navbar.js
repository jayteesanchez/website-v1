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
          <div className="container">
            <span className='navbar-header shake animated'>
              <Link to='/' className="navbar-brand">
                <img id='name-brand' className=' col-xs-12 shake animated-8' src='/img/nameBrand.png'/>
              </Link>
            </span>
            <div className='col-xs-12 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-1'>
              <span className='navbar-right' role="presentation">
              <Link className='nav-links' to='/resume'>
                <img className='shake animated-5' id='resume' src='/img/newRes.png'/>
              </Link>
              </span>
              <span className='navbar-right' role="presentation">
                <Link className='nav-links' to='/projects'>
                <img className='shake animated-6' id='projects' src='/img/newProj.png'/>
                </Link>
              </span>
              <span className='navbar-right' role="presentation">
                <Link to='/technologies' className='nav-links' id='technologies'>
                <img className='shake animated-7'  src='/img/newTech.png'/>
                </Link>
              </span>
            </div>
            <div className='col-xs-12 col-sm-3 col-md-3 col-md-offset-1'>
              <span className='navbar-right' role="presentation">
                <a className='icon-nav' href='mailto:jaytee.sanchez@gmail.com' id='resumeNav'>
                <img className='shake animated-1' src='/img/emailjsnew.png'/>
                  <span className='btnBefore'></span>
                  <span className='btnAfter'></span>
                </a>
              </span>
              <span className='navbar-right' role="presentation">
                <a className='icon-nav' href='https://github.com/jayteesanchez' id='resumeNav'>
                <img className='shake animated-2' src='/img/githubnew.png'/>
                  <span className='btnBefore'></span>
                  <span className='btnAfter'></span>
                </a>
              </span>
              <span className='navbar-right' role="presentation">
                <a className='icon-nav' href='https://www.facebook.com/jaytee.sanchez' id='resumeNav'>
                <img className='shake animated-3' src='/img/facebookjsnew.png'/>
                  <span className='btnBefore'></span>
                  <span className='btnAfter'></span>
                </a>
              </span>
              <span className='navbar-right' role="presentation">
                <a className='icon-nav' href='https://www.linkedin.com/in/jayteesanchez' id='resumeNav'>
                <img className='shake animated-4' src='/img/linkedinjnew2.png'/>
                  <span className='btnBefore'></span>
                  <span className='btnAfter'></span>
                </a>
              </span>
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
