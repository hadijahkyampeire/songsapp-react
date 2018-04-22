import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Notifications from 'react-notify-toast'
import {Provider} from 'react-redux';
import Dashboard from './components/Dashboard';
import Register from './components/CreateUser';
import CreateSong from './components/CreateSong';
import Login from './components/Login';
import Navbar from './components/Navbar';
import store from './Reducers/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <BrowserRouter>
      <div className="App">
      <Notifications/>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Register}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/add' component={CreateSong}/>
      <Route exact path='/dashboard' component={Dashboard}/>
       </Switch>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
