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
    document.getElementById('resume').className = 'nav-links';
    document.getElementById('technologies').className = 'nav-links';
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
        <div className='col-xs-10 col-sm-10 col-md-8 col-md-offset-2'>
          <div className="panel panel-default text-center">
            <br></br>
            <text className='project-title'>2016 - Coming Soon!</text>
            <br></br>
            <br></br>
          </div> 
          <div className="panel panel-default">
            <text className='project-title'>&nbsp;&nbsp;Choices - 2015</text>
            <div className="panel-heading">
              <a href='https://making-choices.herokuapp.com/'>
                <img id='project-img' src='http://i.imgur.com/dS9nhGc.png' />
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
          <div className="panel panel-default">
            <text className="project-title">&nbsp;&nbsp;Sidewalk Sailors - 2015</text>
            <div className="panel-heading">
              <a href='https://lit-anchorage-2445.herokuapp.com/'>
                <img id='project-img' src='http://i.imgur.com/SmodBRA.png' />
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
      </div>
    )
  }
}

export default Project;
