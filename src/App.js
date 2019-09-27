import React, { Component } from 'react';
import {HashRouter, Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentss/Navbar';
import SectionList from './componentss/SectionList';
import Section from './componentss/Section';
import Details from './componentss/Details';
import Default from './componentss/Default';
import ContactMe from './componentss/ContactMe';
import WeatherApi from './componentss/fetchWeatherApi';


class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <Navbar />
        <HashRouter basename="/">
          <Route exact path="/" component={SectionList} />
          <Route exact path="/details" component={Details} />
          <Route exact path='/weatherapi' component={WeatherApi} />
          <Route exact path="/contactme" component={ContactMe} />
          <Route exact path="/default" component={Default} />
        </HashRouter>
      </React.Fragment>
     );
  }
}
 
export default App;
