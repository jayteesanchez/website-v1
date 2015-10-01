import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Resume from './components/Resume';

export default (
  <Route handler={App}>
    <Route path='/' handler={Home} />
    <Route path='/technologies' handler={Technologies} />
    <Route path='/projects' handler={Projects} />
    <Route path='/resume' handler={Resume} />
  </Route>
);
