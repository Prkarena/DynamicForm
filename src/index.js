
/**
 * Index.js : Main Component 
 * BrowserRouter : Routes 
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
 /****************** Components ******************/
import Routes from './routes';
/********************* Css ************************/
import './css/index.css';

const App = () => {

    return(
        <BrowserRouter>
            <div className = "mainContainer">
                    <Routes/>
            </div>
        </BrowserRouter>
    )
}

ReactDom.render(<App/>,document.getElementById('root'));