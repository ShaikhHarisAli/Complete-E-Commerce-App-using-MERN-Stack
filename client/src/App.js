import React from "react";
import {Switch,Route} from 'react-router-dom'
import Login from '../src/pages/auth/Login'
import Register from '../src/pages/auth/Register'
import Home from '../src/pages/Home'
import Header from "./component/nav/Header";


const App = () => {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/login" component={Login}/>
      <Route exact path ="/register" component={Register}/>
    </Switch>
    </>
   
  )
}
  
;

export default App;
