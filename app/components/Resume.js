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
    document.getElementById('technologies').className = '';
    document.getElementById('projects').className = '';

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
        <div className='panel panel-default resume-panel fadeIn animated'>
            <img id='resume-img' src='https://openmerchantaccount.com/img/Screen Shot 2015-10-01 at 4.13.07 AM.png'/>
        </div>
      </div>
    )
  }
}

export default Resume;
