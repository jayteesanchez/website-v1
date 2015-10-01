import React from 'react';
import {Link} from 'react-router';
import ProjectStore from '../stores/ProjectStore'
import ProjectActions from '../actions/ProjectActions';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = ProjectStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ProjectStore.listen(this.onChange);
    document.getElementById('name-brand').style.opacity = '';
    document.getElementById('resume').className = '';
    document.getElementById('technologies').className = '';
    document.getElementById('projects').className = 'current-state';
  }

  componentWillUnmount() {
    ProjectStore.unlisten(this.onChange);
  }

  onChange(state) {
    document.getElementByClassName('container').classList.remove('fadeIn animated');
    document.getElementByClassName('container').classList.add('fadeOut animated');
    this.setState(state);
  }

  render() {
    return (
      <div className='container fadeIn animated'>
        <div className="panel panel-default col-xs-10 col-sm-10 col-sm-offset-1 col-md-12">
          <text className='project-title'>Choices</text>
          <div className="panel-heading">
            <a href='https://making-choices.herokuapp.com/'>
              <img id='project-img' src='https://openmerchantaccount.com/img/Screen Shot 2015-10-01 at 3.11.50 AM.png'/>
            </a>
          </div>
          <div className="panel-body">
            <text className="project-text">
              An app that will help you make choices by asking other people that dont know you, to vote for what they think is right choice!<br/><br/>
              The major obstacle in creating this app was that it was my first attempt to learn a new framework on my own as well as learning gulp and new JS ES6<br/><br/>
              <u>Technologies Used:</u><br/>
              HTML5/CSS3/JS6, React, Flux, MongoDB Express, Node.js, Socket.io, Babel, Gulp<br/>
            </text>
          </div>
        </div>
        <div className="panel panel-default col-xs-10 col-sm-10 col-sm-offset-1 col-md-12">
          <text className="project-title">Sidewalk Sailors</text>
          <div className="panel-heading">
            <a href='https://lit-anchorage-2445.herokuapp.com/'>
              <img id='project-img' src='https://openmerchantaccount.com/img/Screen Shot 2015-10-01 at 3.11.09 AM.png'/>
            </a>
          </div>
          <div className="panel-body">
            <text className="project-text">
              The app's mission is to facilitate Freecycling!<br/><br/>
              When members of the Los Angeles community offer free material, Sidewalk Sailors will facilitate sharing this material with users by posting an image and location so that items may be picked up.<br/><br/>
              <u>Technologies Used:</u><br/>
              HTML5/CSS3/JS5, MongoDB Express, Node.js, Socket.io, Google Maps API<br/>
            </text>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
