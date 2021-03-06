import React from 'react';
import {Link} from 'react-router';
import TechnologyStore from '../stores/TechnologyStore'
import TechnologyActions from '../actions/TechnologyActions';

class Technology extends React.Component {
  constructor(props) {
    super(props);
    this.state = TechnologyStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    TechnologyStore.listen(this.onChange);
    document.getElementById('name-brand').style.opacity = '';
    document.getElementById('resume').className = 'nav-links';
    document.getElementById('technologies').className = 'current-state';
    document.getElementById('projects').className = 'nav-links';
  }

  componentWillUnmount() {
    TechnologyStore.unlisten(this.onChange);
  }

  onChange(state) {
    document.getElementsByClassName('tech-image').className += 'flipOutX';
    document.getElementsByClassName('tech-image').className -= 'flipInX';
    document.getElementsByClassName('container').classList.remove('fadeIn animated');
    document.getElementsByClassName('container').classList.add('fadeOut animated');
    this.setState(state);
  }

  render() {
    return (
      <div className='container fadeIn animated'>
        <div className='col-xs-10 col-sm-10 col-md-8 col-md-offset-2 tech-images text-center'>
          <div className="panel panel-default text-center">
            <br></br>
            <text className='project-title'>My specialties are in...</text>
            <br></br>
            <br></br>
          </div>
          <div className="panel panel-default text-center">
            <img className='flipInX animated-1 tech-image' src='http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png'/>
            <img className='flipInX animated-2 tech-image' src='https://node-os.com/images/nodejs.png'/>
            <img className='flipInX animated-3 tech-image' src='http://jstricks.com/wp-content/uploads/2014/10/mongodb-gui-tools.png'/>
            <img className='flipInX animated-4 tech-image' src='https://luisfarzati.github.io/angulartics/images/angularjs.png'/>
            <img className='flipInX animated-5 tech-image' src='https://s3.amazonaws.com/codementor_content/2014-Aug-Week4-interviews/Ruby_on_Rails-logo.png'/>
            <img className='flipInX animated-6 tech-image' src='http://www.hortongroup.com/sites/default/files/tech-icons-css-html.jpg'/>
            <img className='flipInX animated-7 tech-image' src='http://www.pinyourclient.com/wp-content/uploads/2015/01/9455413519_javascript.png'/>
            <img className='flipInX animated-8 tech-image' src='http://blog.falafel.com/wp-content/uploads/2015/01/JS6_Logo.png'/>
            <img className='flipInX animated-9 tech-image' src='https://www.pubnub.com/blog/wp-content/uploads/2014/07/SOCKETIOICON.gif'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Technology;
