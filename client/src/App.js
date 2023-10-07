import React, {useEffect} from "react";
import {Switch,Route} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from '../src/pages/auth/Login'
import Register from '../src/pages/auth/Register'
import Home from '../src/pages/Home'
import Header from "./component/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import {auth} from './firebase'
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch()

  // to check fiebase auth state
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        // console.log("user", user);
        // console.log("idTokenResult", idTokenResult);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });
    // cleanup
    return () => unsubscribe();
  }, []);

  


  return (
    <>
    <Header/>
    <ToastContainer/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/login" component={Login}/>
      <Route exact path ="/register" component={Register}/>
      <Route exact path="/register/complete" component={RegisterComplete}/>
    </Switch>
    </>
   
  )
}
  
;

export default App;
