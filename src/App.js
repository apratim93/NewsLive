import React from 'react';
import Navbar from './header/NavBar'
import tech from './Tech/TechNav'
import Business from './Business/BuinsessNav'
import Health from './Health/HealthNav'
import Enter from './Entertainment/EnterNav'
import SportsApi from './Sports/SportsNav'
import WeatherApi from './Weather/WeatherNav'
import Corona from './corona/CoronaNav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
  
<Router>
  <div>
<Switch>
{/* <Route exact path='/' component={Home} /> */}
<Route path='/tech' component={tech} />
<Route path='/Business' component={Business} />
<Route path='/Health' component={Health} />
<Route path='/Enter' component={Enter} />
<Route path='/SportsApi' component={SportsApi} />
<Route path='/WeatherApi' component={WeatherApi} />
<Route path='/Corona' component={Corona} />
<Route path='/' component={Navbar} />

</Switch>
</div>
</Router>
  );
}

export default App;
