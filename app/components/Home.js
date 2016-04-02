import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
    document.getElementById('name-brand').style.opacity = 0;
    document.getElementById('resume').className = 'nav-links';
    document.getElementById('technologies').className = 'nav-links';
    document.getElementById('projects').className = 'nav-links';
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
        <div className='container'>
        <div className='row'>
          <div id='home-container' className='col-xs-6 col-sm-6 col-md-6 homeText fadeIn animated'>
            <text>
              Hello, I'm<br/><br/>
              <img className='shake animated-8' src='/img/nameBrand.png'/><br/><br/>
              Full-Stack Web Developer<br/>
              Located in Los Angeles, CA<br/><br/>
              Former Retail Manager,<br/>
              Graduate of General Assembly WDI<br/><br/>
              Lakers & Chargers Fan<br/><br/>
              Dog Lover &
              Sneaker Collector<br/><br/>
              Fast-Learner, Team-Player &
              Detail-Oriented<br/><br/>
              Weaknesses: Milk & Spiders<br/>
            </text>
          </div>
          <div className='col-xs-6 col-sm-6 col-md-6 homeImage fadeIn animated shake animated-8'>
            <img src='http://i.imgur.com/3vd5bBx.jpg' style={{width: "70%;"}}/>
          </div>
                      <div className='navbar-left col-xs-12 col-sm-6 col-md-5'>
              <div className='col-xs-3 col-sm-3 col-md-3 no-margin'>
                <span role="presentation">
                  <a className='icon-nav' href='mailto:jaytee.sanchez@gmail.com' id='resumeNav'>
                  <img className='shake animated-1' src='/img/emailjsnew.png'/>
                    <span className='btnBefore'></span>
                    <span className='btnAfter'></span>
                  </a>
                </span>
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3 no-margin'>
                <span role="presentation">
                  <a className='icon-nav' href='https://github.com/jayteesanchez' id='resumeNav'>
                  <img className='shake animated-2' src='/img/githubnew.png'/>
                    <span className='btnBefore'></span>
                    <span className='btnAfter'></span>
                  </a>
                </span>
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3 no-margin'>
                <span role="presentation">
                  <a className='icon-nav' href='https://www.facebook.com/jaytee.sanchez' id='resumeNav'>
                  <img className='shake animated-3' src='/img/facebookjsnew.png'/>
                    <span className='btnBefore'></span>
                    <span className='btnAfter'></span>
                  </a>
                </span>
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3 no-margin'>
                <span role="presentation">
                  <a className='icon-nav' href='https://www.linkedin.com/in/jayteesanchez' id='resumeNav'>
                  <img className='shake animated-4' src='/img/linkedinjnew2.png'/>
                    <span className='btnBefore'></span>
                    <span className='btnAfter'></span>
                  </a>
                </span>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;
