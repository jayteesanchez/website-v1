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
        <div id='home-container' className='col-xs-6 col-sm-6 col-md-6 homeText fadeIn animated'>
          <text>
            Hello, I'm<br/><br/>
            <img className='shake animated-8' src='https://openmerchantaccount.com/img/nameBrand.png'/><br/><br/>
            a 28 Year Old Web Developer,<br/>
            Located in Los Angeles, CA<br/><br/>
            Former Retail Manager,<br/>
            Graduate of General Assembly WDI<br/><br/>
            Sneaker Collector,<br/>
            Lakers & Charger Fan,<br/>
            Dog Lover<br/><br/>
            Strengths:<br/>
            Fast-Learner, Team-Player,<br/>
            Detail-Oriented<br/><br/>
            Weaknesses: Milk, Spiders<br/>
          </text>
        </div>
        <div className='homeImage fadeIn animated shake animated-8'>
          <img src='https://openmerchantaccount.com/img/IMG_6426.png' width='70%' height='70%'/>
        </div>
      </div>
    )
  }
}

export default Home;
