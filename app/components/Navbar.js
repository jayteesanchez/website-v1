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
          <div className="container-fluid">
            <div className='navbar-header shake animated'>
              <a href='/' className="navbar-brand">
                <img id='name-brand' className=' col-xs-12 shake animated-8' src='http://i.imgur.com/f9Q1pJj.png'/>
              </a>
            </div>
            <div className='col-xs-12 col-sm-6 col-sm-offset-1 col-md-5 col-md-offset-2'>
              <span className='navbar-right nav-links' role="presentation">
              <Link to='/resume'>
                <img className='shake animated-5' id='resume' src='http://i.imgur.com/AxidOCl.png'/>
              </Link>
              </span>
              <span className='navbar-right nav-links' role="presentation">
                <Link to='/projects'>
                <img className='shake animated-6' id='projects' src='http://i.imgur.com/PqQGB5D.png'/>
                </Link>
              </span>
              <span className='navbar-right nav-links' role="presentation">
                <Link to='/technologies'>
                <img className='shake animated-7' id='technologies' src='http://i.imgur.com/sNlIUam.png'/>
                </Link>
              </span>
            </div>
            <div className='col-xs-12 col-sm-3 col-md-2 col-md-offset-1'>
              <span className='navbar-right' role="presentation">
                <a className='icon-nav' href='mailto:jaytee.sanchez@gmail.com' id='resumeNav'>
                <img className='shake animated-1' src='http://i.imgur.com/3Q9Z3Bp.png'/>
                  <span className='btnBefore'></span>
                  <span className='btnAfter'></span>
                </a>
              </span>
              <span className='navbar-right' role="presentation">
                <a className='icon-nav' href='https://github.com/jayteesanchez' id='resumeNav'>
                <img className='shake animated-2' src='http://i.imgur.com/XZ3guXu.png'/>
                  <span className='btnBefore'></span>
                  <span className='btnAfter'></span>
                </a>
              </span>
              <span className='navbar-right' role="presentation">
                <a className='icon-nav' href='https://www.facebook.com/jaytee.sanchez' id='resumeNav'>
                <img className='shake animated-3' src='http://i.imgur.com/m00Eyei.png'/>
                  <span className='btnBefore'></span>
                  <span className='btnAfter'></span>
                </a>
              </span>
              <span className='navbar-right' role="presentation">
                <a className='icon-nav' href='https://www.linkedin.com/in/jayteesanchez' id='resumeNav'>
                <img className='shake animated-4' src='http://i.imgur.com/QBvvrMx.png'/>
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
