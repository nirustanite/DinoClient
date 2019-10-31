import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import GameContainer from './componenets/GameContainer'
import HomePageContainer from './componenets/HomePageContainer';
import DinoPage from './componenets/DinoPage'

class App extends React.Component {
 render(){
   return(
     <React.Fragment>
       <Route path="/" exact component={HomePageContainer} />
       <Route path="/game" component={GameContainer} />
       <Route path="/getdino" component={DinoPage} />
     </React.Fragment>
   )
 }
}

export default App;
