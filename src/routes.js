/**
 * Routes : returns routes of our application for router
 */
import React from 'react';
import { Route , Switch } from 'react-router-dom';
/****************** Components ******************/
import Home from './components/Home/home';
import FourOFour from './components/FourOFour/fourofour';
import Login from './components/Account/Login/login';
import SignUp from './components/Account/SignUp/signup';
import ForgotPassword from './components/Account/ForgotPassword/forgotpassword';

const Routes = () => {
   return (
       <Switch>
           <Route path="/login" exact component={Login}/>
           <Route path="/forgotpassword" exact component={ForgotPassword}/>
           <Route path="/signup" exact component={SignUp}/>
           <Route path="/" exact component={Home}/>
           <Route component={FourOFour}/>        
       </Switch>
   )
}

export default Routes;