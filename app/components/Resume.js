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
      <div className='container'>
        <h1> Under Construction... Please click the LinkedIn Link for Information</h1>       
      </div>
    )
  }
}

export default Resume;
