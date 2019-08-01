
/**
 * home.js
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
 /****************** Components ******************/

 /********************* Css ************************/
import './home.css';

const Home = () => {

    return(
      <Redirect to="/login"/>
    )
}


export default Home;