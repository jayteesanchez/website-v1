import React from 'react';
import {Link} from 'react-router';
import ResumeStore from '../stores/ResumeStore'
import ResumeActions from '../actions/ResumeActions';

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = ResumeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    ResumeStore.listen(this.onChange);
    document.getElementById('name-brand').style.opacity = '';
    document.getElementById('resume').className = 'current-state';
    document.getElementById('technologies').className = 'nav-links';
    document.getElementById('projects').className = 'nav-links';

  }

  componentWillUnmount() {
    ResumeStore.unlisten(this.onChange);
  }

  onChange(state) {
    document.getElementByClassName('container').classList.remove('fadeIn animated');
    document.getElementByClassName('container').classList.add('fadeOut animated');
    this.setState(state);
  }

  render() {
    return (
      <div className='container fadeIn animated'>
        <div className='col-xs-10 col-sm-10 col-md-8 col-md-offset-2' style={{paddingBottom: '200px;'}}>
          <div className="panel panel-default text-center">
            <br></br>
            <text className='project-title'>Under Construction, Please Check out my  <a href="https://www.linkedin.com/in/jayteesanchez">Linked-In!</a></text>
            <br></br>
            <br></br>
          </div>      
        </div>      
      </div>
    )
  }
}

export default Resume;
