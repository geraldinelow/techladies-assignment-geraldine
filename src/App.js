import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={SectionList} />
          <Route exact path="/details" component={Details} />
          <Route exact path='/weatherapi' component={WeatherApi} />
          <Route path="/contactme" component={ContactMe} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
     );
  }
}
 
export default App;
