import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'  
import MainContainer from './main-container/MainContainer';
import Header from './template/Header';
import Footer from './template/Footer';
import Landing from './template/Landing';
import Login from './template/Login';
import Signup from './template/Signup';

import { createStore ,applyMiddleware } from 'redux' ;
import { Provider } from 'react-redux';
import store from '../store';

import './App.css';

// const initialState = {
//   activeNode : null,
// }

// const store = createStore( ()=> [] ,initialState ,applyMiddleware );

function App() 
{
  return (
    <Provider store = {store}>  
      <Router>
        <div className="App">
          {/* <Header/>
            <Route exact path="/" component={Landing}/>
              <div className="container">
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Signup" component={Signup}/>
              </div>
            <Footer/> */}
          <MainContainer/>
        </div>  
      </Router>
    </Provider>  
    );
}

export default App;
